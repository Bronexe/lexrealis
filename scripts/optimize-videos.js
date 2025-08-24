const ffmpeg = require('fluent-ffmpeg');
const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');
const fs = require('fs');
const path = require('path');

// Configurar FFmpeg
ffmpeg.setFfmpegPath(ffmpegInstaller.path);

const publicDir = path.join(__dirname, '../public');
const optimizedDir = path.join(publicDir, 'optimized');

// Crear directorio de videos optimizados si no existe
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true });
}

// Configuración de optimización
const optimizationConfig = {
  // Para web - formato WebM con VP9 (mejor compresión)
  webm: {
    codec: 'libvpx-vp9',
    quality: 30, // 0-63, menor = mejor calidad
    crf: 30, // Constant Rate Factor
    maxrate: '2M', // Máximo bitrate
    bufsize: '4M',
    preset: 'slow', // Mejor compresión, más lento
    threads: 4
  },
  // Para web - formato MP4 con H.264 (compatibilidad)
  mp4: {
    codec: 'libx264',
    preset: 'slow',
    crf: 23, // 0-51, menor = mejor calidad
    maxrate: '2M',
    bufsize: '4M',
    threads: 4
  }
};

// Lista de videos a optimizar
const videosToOptimize = [
  'Oficina Lex Realis Viña del Mar.mp4',
  'santiago-chile.mp4'
];

function getFileSize(filePath) {
  const stats = fs.statSync(filePath);
  return (stats.size / (1024 * 1024)).toFixed(2); // MB
}

function optimizeVideo(videoName) {
  const inputPath = path.join(publicDir, videoName);
  const baseName = path.parse(videoName).name;
  
  if (!fs.existsSync(inputPath)) {
    console.log(`⚠️  Video no encontrado: ${videoName}`);
    return Promise.resolve();
  }

  const originalSize = getFileSize(inputPath);
  console.log(`🔄 Optimizando: ${videoName} (${originalSize} MB)`);

  return new Promise((resolve, reject) => {
    // Crear versión WebM optimizada
    const webmOutputPath = path.join(optimizedDir, `${baseName}.webm`);
    
    ffmpeg(inputPath)
      .outputOptions([
        `-c:v ${optimizationConfig.webm.codec}`,
        `-crf ${optimizationConfig.webm.crf}`,
        `-b:v ${optimizationConfig.webm.maxrate}`,
        `-maxrate ${optimizationConfig.webm.maxrate}`,
        `-bufsize ${optimizationConfig.webm.bufsize}`,
        `-preset ${optimizationConfig.webm.preset}`,
        `-threads ${optimizationConfig.webm.threads}`,
        '-c:a libopus', // Audio codec para WebM
        '-b:a 128k', // Audio bitrate
        '-movflags +faststart', // Optimización para streaming
        '-g 30', // GOP size
        '-keyint_min 30', // Keyframe interval
        '-sc_threshold 0', // Scene change threshold
        '-tile-columns 2', // VP9 specific
        '-frame-parallel 1' // VP9 specific
      ])
      .output(webmOutputPath)
      .on('end', () => {
        const webmSize = getFileSize(webmOutputPath);
        console.log(`✅ WebM optimizado: ${baseName}.webm (${webmSize} MB)`);
        
        // Crear versión MP4 optimizada como fallback
        const mp4OutputPath = path.join(optimizedDir, `${baseName}-optimized.mp4`);
        
        ffmpeg(inputPath)
          .outputOptions([
            `-c:v ${optimizationConfig.mp4.codec}`,
            `-preset ${optimizationConfig.mp4.preset}`,
            `-crf ${optimizationConfig.mp4.crf}`,
            `-maxrate ${optimizationConfig.mp4.maxrate}`,
            `-bufsize ${optimizationConfig.mp4.bufsize}`,
            `-threads ${optimizationConfig.mp4.threads}`,
            '-c:a aac', // Audio codec para MP4
            '-b:a 128k', // Audio bitrate
            '-movflags +faststart', // Optimización para streaming
            '-g 30', // GOP size
            '-keyint_min 30', // Keyframe interval
            '-sc_threshold 0', // Scene change threshold
            '-profile:v high', // H.264 profile
            '-level 4.1' // H.264 level
          ])
          .output(mp4OutputPath)
          .on('end', () => {
            const mp4Size = getFileSize(mp4OutputPath);
            const compressionRatio = ((originalSize - mp4Size) / originalSize * 100).toFixed(1);
            console.log(`✅ MP4 optimizado: ${baseName}-optimized.mp4 (${mp4Size} MB)`);
            console.log(`📊 Compresión: ${compressionRatio}% más pequeño\n`);
            resolve();
          })
          .on('error', (err) => {
            console.error(`❌ Error optimizando MP4 ${videoName}:`, err.message);
            reject(err);
          })
          .run();
      })
      .on('error', (err) => {
        console.error(`❌ Error optimizando WebM ${videoName}:`, err.message);
        reject(err);
      })
      .run();
  });
}

async function optimizeAllVideos() {
  console.log('🚀 Iniciando optimización de videos...\n');
  
  for (const videoName of videosToOptimize) {
    try {
      await optimizeVideo(videoName);
    } catch (error) {
      console.error(`❌ Error procesando ${videoName}:`, error.message);
    }
  }
  
  console.log('🎉 Optimización de videos completada!');
  console.log(`📁 Videos optimizados guardados en: ${optimizedDir}`);
  console.log('\n💡 Recomendaciones:');
  console.log('• Usa WebM como formato principal (mejor compresión)');
  console.log('• Usa MP4 como fallback para navegadores antiguos');
  console.log('• Considera usar lazy loading para videos que no están en viewport');
}

optimizeAllVideos().catch(console.error);

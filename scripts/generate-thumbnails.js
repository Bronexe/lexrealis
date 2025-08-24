const ffmpeg = require('fluent-ffmpeg');
const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');
const ffprobeInstaller = require('@ffprobe-installer/ffprobe');
const fs = require('fs');
const path = require('path');

// Configurar FFmpeg y FFprobe
ffmpeg.setFfmpegPath(ffmpegInstaller.path);
ffmpeg.setFfprobePath(ffprobeInstaller.path);

const publicDir = path.join(__dirname, '../public');
const optimizedDir = path.join(publicDir, 'optimized');

// Crear directorio de thumbnails si no existe
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true });
}

// Lista de videos para generar thumbnails
const videosForThumbnails = [
  'Oficina Lex Realis Viña del Mar.mp4',
  'santiago-chile.mp4'
];

function generateThumbnail(videoName) {
  const inputPath = path.join(publicDir, videoName);
  const baseName = path.parse(videoName).name;
  const thumbnailPath = path.join(optimizedDir, `${baseName}-thumbnail.jpg`);
  
  if (!fs.existsSync(inputPath)) {
    console.log(`⚠️  Video no encontrado: ${videoName}`);
    return Promise.resolve();
  }

  console.log(`🖼️  Generando thumbnail: ${videoName}`);

  return new Promise((resolve, reject) => {
    ffmpeg(inputPath)
      .screenshots({
        timestamps: ['50%'], // Tomar screenshot al 50% del video
        filename: `${baseName}-thumbnail.jpg`,
        folder: optimizedDir,
        size: '1280x720' // Tamaño HD
      })
      .on('end', () => {
        console.log(`✅ Thumbnail generado: ${baseName}-thumbnail.jpg`);
        resolve();
      })
      .on('error', (err) => {
        console.error(`❌ Error generando thumbnail para ${videoName}:`, err.message);
        reject(err);
      });
  });
}

async function generateAllThumbnails() {
  console.log('🖼️  Iniciando generación de thumbnails...\n');
  
  for (const videoName of videosForThumbnails) {
    try {
      await generateThumbnail(videoName);
    } catch (error) {
      console.error(`❌ Error procesando ${videoName}:`, error.message);
    }
  }
  
  console.log('\n🎉 Generación de thumbnails completada!');
  console.log(`📁 Thumbnails guardados en: ${optimizedDir}`);
  console.log('\n💡 Uso:');
  console.log('• Usa los thumbnails como poster en los componentes de video');
  console.log('• Mejora la experiencia de carga mostrando una preview');
}

generateAllThumbnails().catch(console.error);

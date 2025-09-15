const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const optimizedDir = path.join(publicDir, 'optimized');

// Crear directorio de imágenes optimizadas si no existe
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true });
}

// Configuración de optimización
const optimizationConfig = {
  quality: 80,
  format: 'webp',
  widths: [400, 800, 1200, 1600], // Diferentes tamaños para responsive
};

// Lista de imágenes a optimizar
const imagesToOptimize = [
  'Logo-Lex-Realis.png',
  'Diagnostico Lex Realis.jpg',
  'Estrategia Lex Realis.jpg',
  'Reunión Lex Realis.jpg',
  'Workflow lex realis.png',
  'abogados administración legal.jpg',
  'tribunales civiles chile.jpg',
  'Abogados inmobiliarios viña del mar.jpg',
  'modern-legal-office.png',
  'sebastian-leon-sanchez.png',
  'matias-sanchez-strange.png',
  'juan-ferrer-williams.png',
  'catalina-aguilar-silva.png',
  'melanie-moraga-villanueva.png',
  'cristobal-zaror-faggioni.png',
];

async function optimizeImage(imageName) {
  const inputPath = path.join(publicDir, imageName);
  const baseName = path.parse(imageName).name;
  
  if (!fs.existsSync(inputPath)) {
    console.log(`⚠️  Imagen no encontrada: ${imageName}`);
    return;
  }

  console.log(`🔄 Optimizando: ${imageName}`);

  try {
    // Obtener información de la imagen original
    const imageInfo = await sharp(inputPath).metadata();
    
    // Crear versiones optimizadas en diferentes tamaños
    for (const width of optimizationConfig.widths) {
      if (width <= imageInfo.width) {
        const height = Math.round((width / imageInfo.width) * imageInfo.height);
        
        // WebP optimizado
        await sharp(inputPath)
          .resize(width, height, { fit: 'cover' })
          .webp({ quality: optimizationConfig.quality })
          .toFile(path.join(optimizedDir, `${baseName}-${width}w.webp`));
        
        // JPEG como fallback
        await sharp(inputPath)
          .resize(width, height, { fit: 'cover' })
          .jpeg({ quality: optimizationConfig.quality })
          .toFile(path.join(optimizedDir, `${baseName}-${width}w.jpg`));
      }
    }
    
    // Versión original optimizada
    await sharp(inputPath)
      .webp({ quality: optimizationConfig.quality })
      .toFile(path.join(optimizedDir, `${baseName}.webp`));
    
    console.log(`✅ Optimizada: ${imageName}`);
  } catch (error) {
    console.error(`❌ Error optimizando ${imageName}:`, error.message);
  }
}

async function optimizeAllImages() {
  console.log('🚀 Iniciando optimización de imágenes...\n');
  
  for (const imageName of imagesToOptimize) {
    await optimizeImage(imageName);
  }
  
  console.log('\n🎉 Optimización completada!');
  console.log(`📁 Imágenes optimizadas guardadas en: ${optimizedDir}`);
}

optimizeAllImages().catch(console.error);




const { execSync } = require('child_process');
const path = require('path');

console.log('🚀 Iniciando optimización completa de medios...\n');

try {
  // 1. Optimizar imágenes
  console.log('📸 Paso 1: Optimizando imágenes...');
  execSync('node scripts/optimize-images.js', { stdio: 'inherit' });
  console.log('✅ Imágenes optimizadas\n');

  // 2. Optimizar videos
  console.log('🎥 Paso 2: Optimizando videos...');
  execSync('node scripts/optimize-videos.js', { stdio: 'inherit' });
  console.log('✅ Videos optimizados\n');

  // 3. Generar thumbnails
  console.log('🖼️  Paso 3: Generando thumbnails...');
  execSync('node scripts/generate-thumbnails.js', { stdio: 'inherit' });
  console.log('✅ Thumbnails generados\n');

  console.log('🎉 ¡Optimización completa finalizada!');
  console.log('\n📊 Resumen de optimizaciones:');
  console.log('• Imágenes: Convertidas a WebP con múltiples tamaños');
  console.log('• Videos: Optimizados a WebM y MP4 con compresión avanzada');
  console.log('• Thumbnails: Generados para mejorar la experiencia de carga');
  console.log('\n💡 Próximos pasos:');
  console.log('• Los componentes ya están actualizados para usar las versiones optimizadas');
  console.log('• Considera implementar lazy loading para videos no críticos');
  console.log('• Monitorea el rendimiento con herramientas como Lighthouse');

} catch (error) {
  console.error('❌ Error durante la optimización:', error.message);
  process.exit(1);
}




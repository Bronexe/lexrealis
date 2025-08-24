# Optimización de Medios - Lex Realis

Este documento describe las optimizaciones implementadas para mejorar el rendimiento de carga de imágenes y videos en el proyecto.

## 🎯 Objetivos

- Reducir el tamaño de archivos de medios
- Mejorar los tiempos de carga de página
- Implementar lazy loading para contenido no crítico
- Proporcionar fallbacks para navegadores antiguos

## 📸 Optimización de Imágenes

### Herramientas utilizadas
- **Sharp**: Para procesamiento y optimización de imágenes
- **WebP**: Formato moderno con mejor compresión
- **Responsive Images**: Múltiples tamaños para diferentes dispositivos

### Configuración
- **Calidad**: 80% (balance entre calidad y tamaño)
- **Formatos**: WebP (principal) + JPEG (fallback)
- **Tamaños**: 400w, 800w, 1200w, 1600w
- **Compresión**: Promedio 60-80% de reducción de tamaño

### Uso
```bash
# Optimizar todas las imágenes
npm run optimize:images

# O ejecutar la optimización completa
npm run optimize
```

## 🎥 Optimización de Videos

### Herramientas utilizadas
- **FFmpeg**: Para procesamiento de video
- **VP9/WebM**: Formato moderno con mejor compresión
- **H.264/MP4**: Fallback para compatibilidad

### Configuración
- **WebM (VP9)**: CRF 30, maxrate 2M
- **MP4 (H.264)**: CRF 23, maxrate 2M
- **Audio**: 128k AAC/Opus
- **Compresión**: Promedio 60-80% de reducción

### Resultados obtenidos
- **Oficina Lex Realis**: 25.22MB → 4.66MB (81.5% reducción)
- **Santiago Chile**: 11.37MB → 4.43MB (61.0% reducción)

### Uso
```bash
# Optimizar todos los videos
npm run optimize:videos

# Generar thumbnails
npm run optimize:thumbnails
```

## 🖼️ Thumbnails

### Propósito
- Mostrar preview mientras se carga el video
- Mejorar la experiencia de usuario
- Reducir la percepción de tiempo de carga

### Configuración
- **Tamaño**: 1280x720 (HD)
- **Momento**: 50% del video
- **Formato**: JPEG

## 🧩 Componentes Optimizados

### OptimizedVideo
Componente React que implementa:
- Lazy loading con Intersection Observer
- Múltiples formatos (WebM + MP4)
- Fallbacks para navegadores antiguos
- Thumbnails como poster
- Manejo de errores

```tsx
import { OptimizedVideo } from "@/components/ui/optimized-video"

<OptimizedVideo
  webmSrc="/optimized/video.webm"
  mp4Src="/optimized/video-optimized.mp4"
  poster="/optimized/video-thumbnail.jpg"
  className="w-full h-full object-cover"
  autoPlay
  loop
  muted
  lazy={true}
/>
```

### Hero Section
Actualizado para usar:
- Videos optimizados
- Thumbnails como poster
- Preload metadata
- Sin lazy loading (contenido crítico)

## 📊 Beneficios de Rendimiento

### Antes de la optimización
- **Videos**: 36.59MB total
- **Imágenes**: ~10MB total
- **Tiempo de carga**: Lento en conexiones lentas

### Después de la optimización
- **Videos**: ~9MB total (75% reducción)
- **Imágenes**: ~2MB total (80% reducción)
- **Tiempo de carga**: Significativamente mejorado

## 🛠️ Scripts Disponibles

```bash
# Optimización completa
npm run optimize

# Optimizaciones individuales
npm run optimize:images
npm run optimize:videos
npm run optimize:thumbnails
```

## 📁 Estructura de Archivos

```
public/
├── optimized/
│   ├── *.webp              # Imágenes WebP optimizadas
│   ├── *-400w.webp         # Imágenes responsive
│   ├── *-800w.webp
│   ├── *-1200w.webp
│   ├── *-1600w.webp
│   ├── *.webm              # Videos WebM optimizados
│   ├── *-optimized.mp4     # Videos MP4 optimizados
│   └── *-thumbnail.jpg     # Thumbnails de videos
├── *.jpg                   # Imágenes originales
├── *.png                   # Imágenes originales
└── *.mp4                   # Videos originales
```

## 🔧 Configuración de Next.js

### next.config.mjs
```javascript
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [400, 800, 1200, 1600],
  },
  experimental: {
    optimizePackageImports: ['sharp'],
  },
}
```

## 📈 Monitoreo de Rendimiento

### Herramientas recomendadas
- **Lighthouse**: Análisis de rendimiento
- **WebPageTest**: Pruebas de velocidad
- **Core Web Vitals**: Métricas de experiencia de usuario

### Métricas a monitorear
- **LCP** (Largest Contentful Paint)
- **FID** (First Input Delay)
- **CLS** (Cumulative Layout Shift)
- **Tiempo de carga total**

## 🚀 Próximos Pasos

1. **Implementar lazy loading** para videos no críticos
2. **Configurar CDN** para distribución global
3. **Implementar preloading** para contenido crítico
4. **Monitorear métricas** de rendimiento en producción
5. **Optimizar más medios** según sea necesario

## 📝 Notas Importantes

- Los archivos originales se mantienen como fallback
- Las optimizaciones son reversibles
- Los scripts se pueden ejecutar múltiples veces
- Considerar el impacto en SEO (Core Web Vitals)
- Mantener backups antes de ejecutar optimizaciones masivas


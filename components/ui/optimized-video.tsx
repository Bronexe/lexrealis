"use client"

import { useState, useRef, useEffect } from 'react'

interface OptimizedVideoProps {
  webmSrc: string
  mp4Src: string
  fallbackSrc?: string
  poster?: string
  className?: string
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  playsInline?: boolean
  preload?: 'none' | 'metadata' | 'auto'
  lazy?: boolean
  onLoad?: () => void
  onError?: () => void
}

export function OptimizedVideo({
  webmSrc,
  mp4Src,
  fallbackSrc,
  poster,
  className = "",
  autoPlay = false,
  loop = false,
  muted = true,
  playsInline = true,
  preload = "metadata",
  lazy = true,
  onLoad,
  onError
}: OptimizedVideoProps) {
  const [isInView, setIsInView] = useState(!lazy)
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (!lazy) {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '50px', // Cargar 50px antes de que el video esté visible
        threshold: 0.1
      }
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
      observerRef.current = observer
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [lazy])

  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  const handleError = () => {
    console.warn('Error loading optimized video, falling back to original')
    onError?.()
  }

  if (!isInView) {
    return (
      <div 
        ref={videoRef}
        className={`${className} bg-gray-200 animate-pulse`}
        style={{ aspectRatio: '16/9' }}
      >
        {poster && (
          <img 
            src={poster} 
            alt="Video poster" 
            className="w-full h-full object-cover"
          />
        )}
      </div>
    )
  }

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      preload={preload}
      poster={poster}
      onLoadedData={handleLoad}
      onError={handleError}
    >
      {/* WebM - mejor compresión, formato moderno */}
      <source src={webmSrc} type="video/webm" />
      
      {/* MP4 optimizado - compatibilidad amplia */}
      <source src={mp4Src} type="video/mp4" />
      
      {/* Fallback para navegadores muy antiguos */}
      {fallbackSrc && (
        <source src={fallbackSrc} type="video/mp4" />
      )}
      
      {/* Mensaje de fallback para navegadores sin soporte de video */}
      <p className="text-center p-4 bg-gray-100">
        Tu navegador no soporta la reproducción de video.
        <a href={mp4Src} className="text-blue-600 underline ml-2">
          Descargar video
        </a>
      </p>
    </video>
  )
}

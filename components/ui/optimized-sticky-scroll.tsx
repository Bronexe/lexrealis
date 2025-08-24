"use client";

import React, { useEffect, useState } from 'react';
import StickyScrollRevealDemo from './sticky-scroll-reveal-demo';

// Componente que pre-carga las imágenes de manera inteligente
export function OptimizedStickyScroll() {
  const [isImagesLoaded, setIsImagesLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Pre-cargar las imágenes optimizadas
    const imageUrls = [
      '/optimized/Diagnostico Lex Realis.webp',
      '/optimized/Estrategia Lex Realis.webp',
      '/optimized/Reunión Lex Realis.webp',
      '/optimized/Workflow lex realis.webp'
    ];

    const preloadImages = async () => {
      try {
        const imagePromises = imageUrls.map((url) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = reject;
            img.src = url;
          });
        });

        await Promise.all(imagePromises);
        setIsImagesLoaded(true);
      } catch (error) {
        console.warn('Error pre-cargando imágenes:', error);
        // Si falla la pre-carga, mostrar de todas formas
        setIsImagesLoaded(true);
      }
    };

    // Crear un Intersection Observer para cargar solo cuando esté cerca
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          preloadImages();
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px', // Cargar cuando esté a 200px de distancia
        threshold: 0.1
      }
    );

    // Observar el contenedor padre
    const container = document.querySelector('[data-sticky-scroll-container]');
    if (container) {
      observer.observe(container);
    }

    return () => observer.disconnect();
  }, []);

  // Mostrar un placeholder mientras se cargan las imágenes
  if (!isVisible || !isImagesLoaded) {
    return (
      <div 
        data-sticky-scroll-container
        className="w-full py-4 min-h-[30rem] bg-gradient-to-br from-[#BF7F11]/10 to-[#A66B0F]/10 rounded-md flex items-center justify-center"
      >
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#BF7F11] mx-auto"></div>
          <p className="text-muted-foreground">Cargando proceso de trabajo...</p>
        </div>
      </div>
    );
  }

  return (
    <div data-sticky-scroll-container>
      <StickyScrollRevealDemo />
    </div>
  );
}

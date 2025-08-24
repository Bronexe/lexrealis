"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { FileText, BookOpen, CheckCircle, Briefcase } from "lucide-react";
import Image from "next/image";

// Componente optimizado para imágenes con lazy loading
const OptimizedImage = ({ 
  src, 
  alt, 
  isFirst = false 
}: { 
  src: string; 
  alt: string; 
  isFirst?: boolean;
}) => (
  <Image
    src={src}
    alt={alt}
    fill
    className="object-cover"
    priority={isFirst}
    loading={isFirst ? "eager" : "lazy"}
    sizes="(max-width: 768px) 100vw, 320px"
  />
);

const content = [
  {
    title: "Diagnóstico",
    description:
      "Analizamos tu situación legal actual y identificamos riesgos y oportunidades. Realizamos una evaluación completa de tu caso, revisando documentación, normativas aplicables y posibles conflictos. Nuestro equipo especializado identifica los puntos críticos y establece una estrategia clara para resolver tu situación.",
    content: (
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-md">
        <OptimizedImage
          src="/optimized/Diagnostico Lex Realis.webp"
          alt="Diagnóstico Lex Realis"
          isFirst={true}
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white p-4">
          <FileText className="mx-auto h-12 w-12 mb-3" />
          <h3 className="text-lg font-bold">Diagnóstico Legal</h3>
          <p className="text-sm mt-1 text-gray-100">Evaluación completa de tu caso</p>
        </div>
      </div>
    ),
  },
  {
    title: "Plan Estratégico",
    description:
      "Diseñamos una estrategia personalizada con objetivos claros y plazos definidos. Basándonos en nuestro diagnóstico, creamos un plan de acción detallado que incluye pasos específicos, cronogramas y resultados esperados. Te mantenemos informado en cada etapa del proceso.",
    content: (
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-md">
        <OptimizedImage
          src="/optimized/Estrategia Lex Realis.webp"
          alt="Estrategia Lex Realis"
          isFirst={false}
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white p-4">
          <BookOpen className="mx-auto h-12 w-12 mb-3" />
          <h3 className="text-lg font-bold">Estrategia Personalizada</h3>
          <p className="text-sm mt-1 text-gray-100">Plan de acción detallado</p>
        </div>
      </div>
    ),
  },
  {
    title: "Ejecución",
    description:
      "Implementamos las soluciones con seguimiento constante y comunicación transparente. Nuestro equipo ejecuta cada paso del plan estratégico con precisión y profesionalismo. Mantenemos una comunicación fluida contigo, informándote sobre el progreso y cualquier desarrollo importante.",
    content: (
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-md">
        <OptimizedImage
          src="/optimized/Reunión Lex Realis.webp"
          alt="Reunión Lex Realis"
          isFirst={false}
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white p-4">
          <CheckCircle className="mx-auto h-12 w-12 mb-3" />
          <h3 className="text-lg font-bold">Ejecución Profesional</h3>
          <p className="text-sm mt-1 text-gray-100">Implementación con seguimiento</p>
        </div>
      </div>
    ),
  },
  {
    title: "Reporte y Seguimiento",
    description:
      "Entregamos reportes regulares y mantenemos seguimiento post-implementación. Una vez completada la ejecución, proporcionamos reportes detallados de los resultados obtenidos y establecemos un plan de seguimiento para asegurar la sostenibilidad de las soluciones implementadas.",
    content: (
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-md">
        <OptimizedImage
          src="/optimized/Workflow lex realis.webp"
          alt="Workflow Lex Realis"
          isFirst={false}
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white p-4">
          <Briefcase className="mx-auto h-12 w-12 mb-3" />
          <h3 className="text-lg font-bold">Seguimiento Continuo</h3>
          <p className="text-sm mt-1 text-gray-100">Reportes y monitoreo</p>
        </div>
      </div>
    ),
  },
];

export default function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}

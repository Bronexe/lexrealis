"use client";
import { cn } from "@/lib/utils";

interface ResultadoCardProps {
  emoji: string;
  title: string;
  description: string;
  bgColor: string;
  hoverColor?: string;
}

function ResultadoCard({ emoji, title, description, bgColor, hoverColor }: ResultadoCardProps) {
  return (
    <div className="max-w-xs w-full">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-80 rounded-md shadow-xl mx-auto flex flex-col justify-end p-6 border border-transparent dark:border-neutral-800",
          bgColor,
          hoverColor && `hover:${hoverColor}`,
          "transition-all duration-500 hover:scale-105"
        )}
      >
        <div className="text relative z-50">
          <div className="text-4xl mb-3">{emoji}</div>
          <h3 className="font-bold text-lg md:text-xl text-white relative mb-2">
            {title}
          </h3>
          <p className="font-normal text-sm text-gray-100 relative">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ResultadosCards() {
  const resultados = [
    {
      emoji: "📊",
      title: "Seguridad en las operaciones",
      description: "Más de 1200 estudios de títulos realizados, garantizando operaciones inmobiliarias libres de vicios.",
      bgColor: "bg-gradient-to-br from-[#BF7F11] to-[#A66B0F]",
      hoverColor: "bg-gradient-to-br from-[#A66B0F] to-[#8B5A0D]"
    },
    {
      emoji: "⚖️",
      title: "Respaldo jurídico confiable",
      description: "Más de 500 contratos revisados y redactados para corredores e inmobiliarias, evitando demandas y conflictos.",
      bgColor: "bg-gradient-to-br from-[#BF7F11]/90 to-[#A66B0F]/90",
      hoverColor: "bg-gradient-to-br from-[#A66B0F] to-[#8B5A0D]"
    },
    {
      emoji: "🏦",
      title: "Confianza para instituciones financieras",
      description: "Hemos asesorado a compradores y bancos en constitución de hipotecas y mutuos, asegurando créditos respaldados legalmente.",
      bgColor: "bg-gradient-to-br from-[#BF7F11]/80 to-[#A66B0F]/80",
      hoverColor: "bg-gradient-to-br from-[#A66B0F] to-[#8B5A0D]"
    },
    {
      emoji: "⏱️",
      title: "Agilidad en los procesos",
      description: "Reducción de tiempos de escrituración en hasta un 30% gracias a nuestra gestión especializada.",
      bgColor: "bg-gradient-to-br from-[#BF7F11]/70 to-[#A66B0F]/70",
      hoverColor: "bg-gradient-to-br from-[#A66B0F] to-[#8B5A0D]"
    },
    {
      emoji: "🛡️",
      title: "Protección frente a riesgos",
      description: "95% de juicios favorables en defensa de clientes frente a incumplimientos contractuales o problemas con su propiedad.",
      bgColor: "bg-gradient-to-br from-[#BF7F11]/60 to-[#A66B0F]/60",
      hoverColor: "bg-gradient-to-br from-[#A66B0F] to-[#8B5A0D]"
    }
  ];

  return (
    <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {resultados.map((resultado, index) => (
        <ResultadoCard
          key={index}
          emoji={resultado.emoji}
          title={resultado.title}
          description={resultado.description}
          bgColor={resultado.bgColor}
          hoverColor={resultado.hoverColor}
        />
      ))}
    </div>
  );
}

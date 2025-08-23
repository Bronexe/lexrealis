"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSectionLegal() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/Oficina Lex Realis Viña del Mar.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-10 md:py-20">
        {/* Animated Main Heading */}
        <h1 className="relative z-10 mx-auto max-w-5xl text-center text-3xl font-bold text-white md:text-5xl lg:text-7xl animate-fade-in-up">
          Tu respaldo legal en{" "}
          <span className="text-[#BF7F11] animate-text-shimmer bg-gradient-to-r from-[#BF7F11] via-[#D4A017] to-[#BF7F11] bg-[length:200%_100%] bg-clip-text text-transparent">
            administración de edificios
          </span>{" "}
          y negocios inmobiliarios
        </h1>

        {/* Animated Subtitle */}
        <p className="relative z-10 mx-auto max-w-2xl py-6 text-center text-lg font-normal text-gray-200 animate-fade-in-up animation-delay-200">
          Cumplimiento, contratos y cobranza sin fricciones. Protege tu comunidad y acelera tus operaciones con nuestros
          servicios jurídicos especializados.
        </p>

        {/* Animated CTA Buttons */}
        <div className="relative z-10 mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
          <Button
            asChild
            size="lg"
            className="w-60 transform bg-[#BF7F11] hover:bg-[#BF7F11]/90 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            <Link href="/administradores" className="flex items-center gap-2">
              Soy Administrador
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-60 transform border-white/30 text-white hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg bg-transparent"
          >
            <Link href="/corredores-agentes">Soy Corredor o Inmobiliaria</Link>
          </Button>
        </div>

        {/* Secondary CTA */}
        <div className="relative z-10 mt-6 flex justify-center animate-fade-in-up animation-delay-600">
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="bg-white/10 hover:bg-white/20 text-white border-white/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Link href="/contacto">Agenda una consulta</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

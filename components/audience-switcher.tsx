"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function AudienceSwitcher() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">¿Cuál es tu perfil?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Selecciona tu área para acceder a soluciones jurídicas especializadas
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {/* Administradores Card */}
          <div className="max-w-xs w-full mx-auto">
            <Link href="/administradores">
              <div
                className={cn(
                  "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl flex flex-col justify-end p-6 border border-transparent dark:border-neutral-800",
                  "bg-[url(/placeholder.svg?height=400&width=300&query=modern%20building%20administration%20office)] bg-cover",
                  "hover:bg-[url(/placeholder.svg?height=400&width=300&query=animated%20building%20management%20dashboard)]",
                  "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-[#BF7F11] hover:after:opacity-20",
                  "transition-all duration-500",
                )}
              >
                <div className="text relative z-50">
                  <h1 className="font-bold text-2xl md:text-3xl text-gray-50 relative mb-2">Administradores</h1>
                  <p className="font-normal text-base text-gray-50 relative mb-4">
                    Cobranza de gastos comunes, actualización de reglamentos, contratos con proveedores y resolución de
                    conflictos.
                  </p>
                  <Button
                    className="bg-[#BF7F11] hover:bg-[#BF7F11]/90 text-white relative z-10"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Ver servicios para administradores
                  </Button>
                </div>
              </div>
            </Link>
          </div>

          {/* Corredores Card */}
          <div className="max-w-xs w-full mx-auto">
            <Link href="/corredores-agentes">
              <div
                className={cn(
                  "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl flex flex-col justify-end p-6 border border-transparent dark:border-neutral-800",
                  "bg-[url(/placeholder.svg?height=400&width=300&query=real%20estate%20broker%20office%20professional)] bg-cover",
                  "hover:bg-[url(/placeholder.svg?height=400&width=300&query=animated%20real%20estate%20sales%20dashboard)]",
                  "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-[#BF7F11] hover:after:opacity-20",
                  "transition-all duration-500",
                )}
              >
                <div className="text relative z-50">
                  <h1 className="font-bold text-2xl md:text-3xl text-gray-50 relative mb-2">Corredores</h1>
                  <p className="font-normal text-base text-gray-50 relative mb-4">
                    Contratos blindados, estudio de títulos, protección de comisiones y prevención de fraudes.
                  </p>
                  <Button
                    className="bg-[#BF7F11] hover:bg-[#BF7F11]/90 text-white relative z-10"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Ver servicios para corredores
                  </Button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

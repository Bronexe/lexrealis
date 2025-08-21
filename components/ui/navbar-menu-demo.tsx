"use client"
import { useState } from "react"
import Link from "next/link"
import { HoveredLink, Menu, MenuItem, ServiceItem } from "@/components/ui/navbar-menu"
import { cn } from "@/lib/utils"
import { Scale, Building2, Home, FileText, Users, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LexRealisNavbar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  )
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null)

  return (
    <div className={cn("fixed top-4 inset-x-0 max-w-6xl mx-auto z-50 px-4", className)}>
      {/* Desktop Menu */}
      <div className="hidden md:block">
        <Menu setActive={setActive}>
          <Link href="/" className="flex items-center space-x-2 mr-8">
            <Scale className="h-6 w-6 text-[#BF7F11]" />
            <span className="font-bold text-xl text-[#BF7F11]">Lex Realis</span>
          </Link>

          <MenuItem setActive={setActive} active={active} item="Servicios">
            <div className="grid grid-cols-2 gap-6 p-4 min-w-[500px]">
              <ServiceItem
                title="Administradores"
                href="/administradores"
                icon={<Building2 className="h-5 w-5 text-[#BF7F11]" />}
                description="Cobranza, reglamentos y gestión legal para edificios"
              />
              <ServiceItem
                title="Corredores"
                href="/corredores-inmobiliarias"
                icon={<Home className="h-5 w-5 text-[#BF7F11]" />}
                description="Contratos blindados y protección de comisiones"
              />

              <ServiceItem
                title="Blog"
                href="/blog"
                icon={<Users className="h-5 w-5 text-[#BF7F11]" />}
                description="Artículos y novedades legales"
              />
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Empresa">
            <div className="flex flex-col space-y-2 text-sm min-w-[200px]">
              <HoveredLink href="/nosotros">Nosotros</HoveredLink>
              
                              <HoveredLink href="/blog">Blog</HoveredLink>
              <HoveredLink href="/contacto">Contacto</HoveredLink>
            </div>
          </MenuItem>

          <div className="ml-8">
            <Button asChild className="bg-[#BF7F11] hover:bg-[#BF7F11]/90">
              <Link href="/agendar">
                <Phone className="h-4 w-4 mr-2" />
                Consulta Gratuita
              </Link>
            </Button>
          </div>
        </Menu>
      </div>

      {/* Mobile Menu */}
      <MobileNavbar />
    </div>
  )
}

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <div className="bg-white dark:bg-black rounded-full border border-black/[0.2] dark:border-white/[0.2] shadow-xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Scale className="h-6 w-6 text-[#BF7F11]" />
            <span className="font-bold text-lg text-[#BF7F11]">Lex Realis</span>
          </Link>

          <button onClick={() => setIsOpen(!isOpen)} className="flex flex-col space-y-1 p-2" aria-label="Toggle menu">
            <span
              className={cn(
                "block h-0.5 w-6 bg-black dark:bg-white transition-all duration-300",
                isOpen ? "rotate-45 translate-y-1.5" : "",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-6 bg-black dark:bg-white transition-all duration-300",
                isOpen ? "opacity-0" : "",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-6 bg-black dark:bg-white transition-all duration-300",
                isOpen ? "-rotate-45 -translate-y-1.5" : "",
              )}
            />
          </button>
        </div>

        {/* Mobile Menu Items */}
        {isOpen && (
          <div className="mt-6 pb-4 border-t border-gray-200 dark:border-gray-700 pt-4">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[#BF7F11] mb-2">Servicios</h3>
                <div className="space-y-2 pl-4">
                  <Link
                    href="/administradores"
                    className="block text-sm text-gray-700 dark:text-gray-300 hover:text-[#BF7F11]"
                    onClick={() => setIsOpen(false)}
                  >
                    Administradores
                  </Link>
                  <Link
                    href="/corredores-inmobiliarias"
                    className="block text-sm text-gray-700 dark:text-gray-300 hover:text-[#BF7F11]"
                    onClick={() => setIsOpen(false)}
                  >
                    Corredores e Inmobiliarias
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-[#BF7F11] mb-2">Empresa</h3>
                <div className="space-y-2 pl-4">
                  <Link
                    href="/nosotros"
                    className="block text-sm text-gray-700 dark:text-gray-300 hover:text-[#BF7F11]"
                    onClick={() => setIsOpen(false)}
                  >
                    Nosotros
                  </Link>
                  
                  <Link
                    href="/blog"
                    className="block text-sm text-gray-700 dark:text-gray-300 hover:text-[#BF7F11]"
                    onClick={() => setIsOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/contacto"
                    className="block text-sm text-gray-700 dark:text-gray-300 hover:text-[#BF7F11]"
                    onClick={() => setIsOpen(false)}
                  >
                    Contacto
                  </Link>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <Button asChild className="w-full bg-[#BF7F11] hover:bg-[#BF7F11]/90">
                  <Link href="/contacto" onClick={() => setIsOpen(false)}>
                    <Phone className="h-4 w-4 mr-2" />
                    Consulta Gratuita
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

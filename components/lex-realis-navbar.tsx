"use client";
import React, { useState } from "react";
import Link from "next/link";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Phone, Menu as MenuIcon, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function LexRealisNavbar() {
  return (
    <div className="relative w-full">
      <Navbar className="top-4" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  return (
    <div
      className={cn("fixed top-4 inset-x-0 max-w-6xl mx-auto z-50 px-4", className)}
    >
      {isMobile ? (
        // Mobile Navbar
        <div className="bg-white/95 backdrop-blur-sm rounded-full border border-black/[0.1] shadow-lg flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center">
            <img 
              src="/Logo-Lex-Realis.png" 
              alt="LexRealis Abogados" 
              className="h-8 w-auto"
            />
          </Link>
          
          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="bg-[#BF7F11] hover:bg-[#BF7F11]/90 text-xs px-3">
              <Link href="/agendar">
                <Phone className="h-3 w-3 mr-1" />
                Cotiza
              </Link>
            </Button>
            
            <Drawer open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <DrawerTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <MenuIcon className="h-5 w-5" />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="max-h-[85vh]">
                <DrawerHeader className="text-left">
                  <DrawerTitle className="flex items-center justify-between">
                    <span>Menú</span>
                    <DrawerClose asChild>
                      <Button variant="ghost" size="sm" className="p-2">
                        <X className="h-5 w-5" />
                      </Button>
                    </DrawerClose>
                  </DrawerTitle>
                </DrawerHeader>
                
                <div className="px-4 pb-4 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Servicios</h3>
                    <div className="space-y-1">
                      <Link 
                        href="/administradores" 
                        className="block py-2 px-3 rounded-lg hover:bg-muted transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Administradores
                      </Link>
                      <Link 
                        href="/corredores-inmobiliarias" 
                        className="block py-2 px-3 rounded-lg hover:bg-muted transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Corredores e Inmobiliarias
                      </Link>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Blog</h3>
                    <div className="space-y-1">
                      <Link 
                        href="/blog" 
                        className="block py-2 px-3 rounded-lg hover:bg-muted transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Artículos y Recursos
                      </Link>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Empresa</h3>
                    <div className="space-y-1">
                      <Link 
                        href="/nosotros" 
                        className="block py-2 px-3 rounded-lg hover:bg-muted transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Nosotros
                      </Link>
                      <Link 
                        href="/contacto" 
                        className="block py-2 px-3 rounded-lg hover:bg-muted transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Contacto
                      </Link>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <Button asChild className="w-full bg-[#BF7F11] hover:bg-[#BF7F11]/90">
                      <Link href="/agendar" onClick={() => setIsMobileMenuOpen(false)}>
                        <Phone className="h-4 w-4 mr-2" />
                        Cotiza Aquí
                      </Link>
                    </Button>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      ) : (
        // Desktop Navbar
        <nav 
          onMouseLeave={() => setActive(null)}
          className="relative rounded-full border border-transparent dark:bg-black/80 dark:border-white/[0.2] bg-white/80 backdrop-blur-sm shadow-input flex items-center justify-between px-8 py-6"
        >
          <Link href="/" className="flex items-center">
            <img 
              src="/Logo-Lex-Realis.png" 
              alt="LexRealis Abogados" 
              className="h-10 w-auto"
            />
          </Link>

          <div className="flex items-center space-x-8">
            <MenuItem setActive={setActive} active={active} item="Servicios">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/administradores">Administradores</HoveredLink>
                <HoveredLink href="/corredores-inmobiliarias">Corredores e Inmobiliarias</HoveredLink>
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Empresa">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/nosotros">Nosotros</HoveredLink>
                <HoveredLink href="/contacto">Contacto</HoveredLink>
              </div>
            </MenuItem>

            <Link href="/blog" className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white">
              Blog
            </Link>
          </div>

          <Button asChild className="bg-[#BF7F11] hover:bg-[#BF7F11]/90">
            <Link href="/agendar">
              <Phone className="h-4 w-4 mr-2" />
              Cotiza Aquí
            </Link>
          </Button>
        </nav>
      )}
    </div>
  );
}

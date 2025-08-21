"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone } from "lucide-react"

export function SiteHeader() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image 
              src="/Logo-Lex-Realis.png" 
              alt="Lex Realis" 
              width={120} 
              height={40} 
              className="h-8 w-auto"
            />
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/administradores" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Administradores
            </Link>
            <Link
              href="/corredores-inmobiliarias"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Corredores
            </Link>
            <Link href="/blog" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Blog
            </Link>
            <Link href="/nosotros" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Nosotros
            </Link>
            <Link href="/contacto" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Contacto
            </Link>
          </nav>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
              <Image 
                src="/Logo-Lex-Realis.png" 
                alt="Lex Realis" 
                width={100} 
                height={35} 
                className="h-7 w-auto"
              />
            </Link>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col space-y-3">
                <Link href="/administradores" onClick={() => setIsOpen(false)}>
                  Administradores
                </Link>
                <Link href="/corredores-inmobiliarias" onClick={() => setIsOpen(false)}>
                  Corredores e Inmobiliarias
                </Link>

                <Link href="/blog" onClick={() => setIsOpen(false)}>
                  Blog
                </Link>
                <Link href="/nosotros" onClick={() => setIsOpen(false)}>
                  Nosotros
                </Link>
                <Link href="/contacto" onClick={() => setIsOpen(false)}>
                  Contacto
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link href="/" className="flex items-center space-x-2 md:hidden">
              <Image 
                src="/Logo-Lex-Realis.png" 
                alt="Lex Realis" 
                width={100} 
                height={35} 
                className="h-7 w-auto"
              />
            </Link>
          </div>
          <nav className="flex items-center">
            <Button asChild className="bg-[#BF7F11] hover:bg-[#BF7F11]/90">
                              <Link href="/contacto">
                  <Phone className="h-4 w-4 mr-2" />
                  Cotiza Aquí
                </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

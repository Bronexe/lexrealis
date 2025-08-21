"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { Phone } from "lucide-react";

export default function LexRealisResizableNavbar() {
  const navItems = [
    {
      name: "Administradores",
      link: "/administradores",
    },
    {
      name: "Corredores",
      link: "/corredores-inmobiliarias",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Nosotros",
      link: "/nosotros",
    },
    {
      name: "Contacto",
      link: "/contacto",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary" href="/contacto">
              Contacto
            </NavbarButton>
            <NavbarButton variant="primary" href="/agendar">
              <Phone className="h-4 w-4 mr-2" />
              Consulta Gratuita
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-foreground/60 hover:text-foreground/80 transition-colors"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4 pt-4 border-t border-border">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="secondary"
                className="w-full"
                href="/contacto"
              >
                Contacto
              </NavbarButton>
                             <NavbarButton
                 onClick={() => setIsMobileMenuOpen(false)}
                 variant="primary"
                 className="w-full"
                 href="/agendar"
               >
                 <Phone className="h-4 w-4 mr-2" />
                 Consulta Gratuita
               </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}

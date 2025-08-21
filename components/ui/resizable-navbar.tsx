"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Scale, Menu, X } from "lucide-react"

// Navbar Container
export const Navbar = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <nav className={cn("w-full bg-white dark:bg-black border-b border-border", className)}>
      {children}
    </nav>
  )
}

// Navbar Body for Desktop
export const NavBody = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={cn("hidden md:flex items-center justify-between px-6 py-4 max-w-7xl mx-auto", className)}>
      {children}
    </div>
  )
}

// Navbar Logo
export const NavbarLogo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className={cn("flex items-center", className)}>
      <img 
        src="/Logo-Lex-Realis.png" 
        alt="LexRealis Abogados" 
        className="h-8 w-auto"
      />
    </Link>
  )
}

// Navbar Items
export const NavItems = ({ 
  items, 
  className 
}: { 
  items: Array<{ name: string; link: string }>; 
  className?: string 
}) => {
  return (
    <div className={cn("flex items-center space-x-8", className)}>
      {items.map((item, idx) => (
        <Link
          key={`nav-item-${idx}`}
          href={item.link}
          className="text-foreground/60 hover:text-foreground/80 transition-colors font-medium"
        >
          {item.name}
        </Link>
      ))}
    </div>
  )
}

// Navbar Button
export const NavbarButton = ({ 
  children, 
  variant = "primary", 
  href, 
  onClick,
  className,
  ...props 
}: { 
  children: React.ReactNode; 
  variant?: "primary" | "secondary"; 
  href?: string; 
  onClick?: () => void;
  className?: string;
  [key: string]: any;
}) => {
  const buttonClasses = cn(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
    variant === "primary" && "bg-[#BF7F11] text-white hover:bg-[#BF7F11]/90",
    variant === "secondary" && "bg-transparent border border-input hover:bg-accent hover:text-accent-foreground",
    "h-10 px-4 py-2",
    className
  )

  if (href) {
    return (
      <Link href={href} className={buttonClasses} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={buttonClasses} {...props}>
      {children}
    </button>
  )
}

// Mobile Navigation Container
export const MobileNav = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={cn("md:hidden", className)}>
      {children}
    </div>
  )
}

// Mobile Navigation Header
export const MobileNavHeader = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={cn("flex items-center justify-between px-6 py-4", className)}>
      {children}
    </div>
  )
}

// Mobile Navigation Toggle
export const MobileNavToggle = ({ 
  isOpen, 
  onClick, 
  className 
}: { 
  isOpen: boolean; 
  onClick: () => void; 
  className?: string 
}) => {
  return (
    <button
      onClick={onClick}
      className={cn("flex flex-col space-y-1 p-2", className)}
      aria-label="Toggle menu"
    >
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
  )
}

// Mobile Navigation Menu
export const MobileNavMenu = ({ 
  isOpen, 
  onClose, 
  children, 
  className 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  children: React.ReactNode; 
  className?: string 
}) => {
  if (!isOpen) return null

  return (
    <div className={cn("px-6 pb-6 border-t border-border", className)}>
      <div className="space-y-4 pt-4">
        {children}
      </div>
    </div>
  )
}

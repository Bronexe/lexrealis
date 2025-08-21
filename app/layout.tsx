import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import LexRealisNavbar from "@/components/lex-realis-navbar"
import { SiteFooter } from "@/components/site-footer"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Lex Realis - Tu respaldo legal en administración de edificios y negocios inmobiliarios",
    template: "%s | Lex Realis",
  },
  description:
    "Especialistas en derecho inmobiliario, copropiedad y consumo. Cumplimiento, contratos y cobranza sin fricciones para administradores y corredores.",
  keywords: [
    "derecho inmobiliario",
    "administración edificios",
    "corredores propiedades",
    "cobranza gastos comunes",
    "contratos inmobiliarios",
  ],
  authors: [{ name: "Lex Realis" }],
  creator: "Lex Realis",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://lexrealis.cl",
    title: "Lex Realis - Tu respaldo legal inmobiliario",
    description:
      "Especialistas en derecho inmobiliario, copropiedad y consumo. Protege tu comunidad y acelera tus operaciones.",
    siteName: "Lex Realis",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lex Realis - Tu respaldo legal inmobiliario",
    description: "Especialistas en derecho inmobiliario, copropiedad y consumo.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Lex Realis",
              url: "https://lexrealis.cl",
              logo: "https://lexrealis.cl/logo.png",
              description:
                "Estudio jurídico especializado en derecho inmobiliario, administración de edificios y servicios a corredores de propiedades.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Reñaca Norte 25, Oficina 812",
                addressLocality: "Viña del Mar",
                addressCountry: "CL",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+56-9-6618-8788",
                contactType: "customer service",
                availableLanguage: "Spanish",
              },
              sameAs: ["https://linkedin.com/company/lexrealis", "https://twitter.com/lexrealis"],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
                  <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <div className="relative flex min-h-screen flex-col">
              <LexRealisNavbar />
              <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

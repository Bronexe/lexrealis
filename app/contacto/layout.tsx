import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto | Lex Realis",
  description: "Contáctanos para agendar una consulta personalizada con nuestros especialistas en derecho inmobiliario. Estamos aquí para ayudarte.",
  icons: {
    icon: "/Favicon.png",
    shortcut: "/Favicon.png",
    apple: "/Favicon.png",
  },
  openGraph: {
    title: "Contacto | Lex Realis",
    description: "Agenda tu consulta personalizada con especialistas en derecho inmobiliario.",
  },
}

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

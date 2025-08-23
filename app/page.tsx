import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import HeroSectionLegal from "@/components/ui/hero-section-legal"
import { getBlogPosts } from "@/lib/mdx"
import BlogCards from "@/components/ui/blog-cards"
import {
  ArrowRight,
  Building2,
  Home,
  Scale,
  Clock,
  Shield,
  CheckCircle,
  FileSearch,
  Users,
  DollarSign,
  Gavel,
  FileText,
  BookOpen,
  Building,
  Hammer,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Lex Realis - Tu respaldo legal en administración de edificios y negocios inmobiliarios",
  description:
    "Cumplimiento, contratos y cobranza sin fricciones. Protege tu comunidad y acelera tus operaciones con nuestros servicios jurídicos especializados.",
  icons: {
    icon: "/Favicon.png",
    shortcut: "/Favicon.png",
    apple: "/Favicon.png",
  },
  openGraph: {
    title: "Lex Realis - Tu respaldo legal inmobiliario",
    description: "Cumplimiento, contratos y cobranza sin fricciones. Protege tu comunidad y acelera tus operaciones.",
    type: "website",
  },
}

const services = [
  {
    icon: FileSearch,
    title: "Estudio de Títulos",
    description:
              "Revisamos la situación jurídica de la propiedad para garantizar que esté libre de cargas y gravámenes, brindando seguridad jurídica en la transacción.",
    category: "Due Diligence",
  },
  {
    icon: Users,
    title: "Representación Legal",
    description:
              "Ofrecemos asesoría legal en todas las etapas de transacciones inmobiliarias, defendiendo tus derechos y garantizando un proceso transparente y seguro.",
    category: "Representación",
  },
  {
    icon: DollarSign,
    title: "Cobranza de Gastos Comunes",
    description:
              "Gestionamos la cobranza de gastos comunes, actuando de manera eficiente y profesional para asegurar el cumplimiento de las obligaciones económicas de los propietarios.",
    category: "Administración",
  },
  {
    icon: Gavel,
    title: "Juicios de Arrendamiento",
    description:
      "Brindamos asesoría y representación en juicios de arrendamiento, defendiendo tus intereses y buscando soluciones rápidas y efectivas para conflictos de arriendo y precarios.",
    category: "Litigios",
  },
  {
    icon: FileText,
    title: "Compraventa",
    description:
      "Redactamos y revisamos contratos de compraventa, asegurando que cumplan con las normativas legales y protejan los intereses de todas las partes involucradas.",
    category: "Contratos",
  },
  {
    icon: BookOpen,
    title: "Reglamentos",
    description:
      "Elaboramos y asesoramos en la creación de reglamentos internos para comunidades y condominios, asegurando el cumplimiento de la normativa vigente (Ley 21442).",
    category: "Normativa",
  },
  {
    icon: Building,
    title: "Trámites en Conservador de Bienes Raíces",
    description:
      "Realizamos todos los trámites necesarios ante el Conservador de Bienes Raíces, garantizando la correcta inscripción y actualización de los registros de propiedad.",
    category: "Trámites",
  },
  {
    icon: Hammer,
    title: "Remate de Propiedades",
    description:
      "Representamos en procesos de remate de propiedades, asegurando el cumplimiento de la normativa legal y obteniendo los mejores resultados posibles para nuestros clientes.",
    category: "Ejecución",
  },
]

export default function HomePage() {
  // Obtener los 4 posts más recientes del blog
  const allPosts = getBlogPosts()
  const recentPosts = allPosts.slice(0, 4)

  return (
    <div className="flex flex-col">
      {/* Hero Section with Video Background */}
      <HeroSectionLegal />



      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
              Nuestros <span className="text-[#BF7F11]">Servicios</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluciones jurídicas integrales para todas tus necesidades inmobiliarias, desde transacciones hasta
              gestión de comunidades.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-2 hover:border-[#BF7F11]/20 transition-all duration-300 hover:shadow-lg group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2 bg-[#BF7F11]/10 rounded-lg group-hover:bg-[#BF7F11]/20 transition-colors">
                      <service.icon className="h-5 w-5 text-[#BF7F11]" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {service.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-[#BF7F11] hover:bg-[#BF7F11]/90">
              <Link href="/contacto">
                Cotiza aquí
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
              ¿Por qué elegir <span className="text-[#BF7F11]">Lex Realis</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Somos el único estudio que combina experiencia jurídica con tecnología para optimizar la gestión legal
              inmobiliaria.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-2 hover:border-[#BF7F11]/20 transition-colors">
              <CardHeader>
                <div className="p-2 bg-[#BF7F11]/10 rounded-lg w-fit mb-4">
                  <Scale className="h-6 w-6 text-[#BF7F11]" />
                </div>
                <CardTitle className="text-xl">Especialización</CardTitle>
                <CardDescription>Dedicados a la copropiedad inmobiliaria y a la administración</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-[#BF7F11]" />
                    Edificios, condominios y lotes asesorados
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-[#BF7F11]" />
                    Gestión de Activos
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-[#BF7F11]" />
                    Recuperación de patrimonios y comisiones
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-[#BF7F11]/20 transition-colors">
              <CardHeader>
                <div className="p-2 bg-[#BF7F11]/10 rounded-lg w-fit mb-4">
                  <Clock className="h-6 w-6 text-[#BF7F11]" />
                </div>
                <CardTitle className="text-xl">Tecnología</CardTitle>
                <CardDescription>Automatizaciones que optimizan procesos y reducen tiempos</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-[#BF7F11]" />
                    Cobranza automatizada
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-[#BF7F11]" />
                    Firmas digitales
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-[#BF7F11]" />
                    Reportes en tiempo real
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-[#BF7F11]/20 transition-colors">
              <CardHeader>
                <div className="p-2 bg-[#BF7F11]/10 rounded-lg w-fit mb-4">
                  <Shield className="h-6 w-6 text-[#BF7F11]" />
                </div>
                <CardTitle className="text-xl">Transparencia</CardTitle>
                <CardDescription>Precios fijos y tiempos de respuesta garantizados</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-[#BF7F11]" />
                    24h primera respuesta
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-[#BF7F11]" />
                    Honorarios transparentes
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-[#BF7F11]" />
                    SLA garantizados
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
              Recursos y <span className="text-[#BF7F11]">Blog</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Mantente actualizado con las últimas novedades legales y guías prácticas para administradores y profesionales inmobiliarios.
            </p>
          </div>

                    <BlogCards posts={recentPosts} />

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-[#BF7F11]/30 text-[#BF7F11] hover:bg-[#BF7F11]/5">
              <Link href="/blog">
                Ver todos los artículos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Audience Switcher */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">¿Cuál es tu perfil?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Selecciona tu área para acceder a soluciones jurídicas especializadas
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <Card className="border-2 hover:border-[#BF7F11]/20 transition-all duration-300 hover:shadow-lg group">
              <CardHeader>
                <div className="p-3 bg-[#BF7F11]/10 rounded-lg w-fit mb-4 group-hover:bg-[#BF7F11]/20 transition-colors">
                  <Building2 className="h-8 w-8 text-[#BF7F11]" />
                </div>
                <CardTitle className="text-2xl">Administradores</CardTitle>
                <CardDescription className="text-base">
                  Cobranza de gastos comunes, actualización de reglamentos, contratos con proveedores y resolución de
                  conflictos.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full bg-[#BF7F11] hover:bg-[#BF7F11]/90">
                  <Link href="/administradores">
                    Ver servicios para administradores
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-[#BF7F11]/20 transition-all duration-300 hover:shadow-lg group">
              <CardHeader>
                <div className="p-3 bg-[#BF7F11]/10 rounded-lg w-fit mb-4 group-hover:bg-[#BF7F11]/20 transition-colors">
                  <Home className="h-8 w-8 text-[#BF7F11]" />
                </div>
                <CardTitle className="text-2xl">Corredores e Inmobiliarias</CardTitle>
                <CardDescription className="text-base">
                  Contratos blindados, estudio de títulos, protección de comisiones y prevención de fraudes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full bg-[#BF7F11] hover:bg-[#BF7F11]/90">
                  <Link href="/corredores-agentes">
                    Ver servicios para corredores
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#BF7F11]/5">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">¿Listo para contar con el respaldo legal que tu negocio necesita?</h2>
            <p className="text-xl text-muted-foreground">
              Cotiza aquí y descubre cómo podemos ayudarte a resolver tus desafíos legales de manera
              eficiente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#BF7F11] hover:bg-[#BF7F11]/90">
                <Link href="/contacto">Cotiza aquí</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[#BF7F11]/30 text-[#BF7F11] hover:bg-[#BF7F11]/5 bg-transparent"
              >
                <Link href="/contacto">Contáctanos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="sticky-cta md:hidden">
        <div className="flex gap-2">
          <Button asChild className="flex-1 bg-white text-[#BF7F11] hover:bg-gray-50 border border-[#BF7F11]/20">
            <Link href="/contacto">Agenda ahora</Link>
          </Button>
          <Button asChild className="flex-1 bg-[#BF7F11] hover:bg-[#BF7F11]/90">
            <Link href="/contacto">Consulta Rápida</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

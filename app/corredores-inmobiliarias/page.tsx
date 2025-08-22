import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileSearch, Shield, AlertCircle, CheckCircle, Clock, DollarSign, ArrowRight, Users } from "lucide-react"
import ResultadosCards from "@/components/ui/resultados-cards"

export const metadata: Metadata = {
  title: "Servicios para Corredores e Inmobiliarias | Lex Realis",
  description:
    "Contratos blindados, estudio de títulos, protección de comisiones y prevención de fraudes para corredores de propiedades e inmobiliarias.",
  icons: {
    icon: "/Favicon.png",
    shortcut: "/Favicon.png",
    apple: "/Favicon.png",
  },
  openGraph: {
    title: "Servicios para Corredores e Inmobiliarias | Lex Realis",
    description: "Soluciones jurídicas especializadas para corredores de propiedades e inmobiliarias.",
  },
}

const problems = [
  {
    icon: FileSearch,
    title: "Estudio de Títulos",
    description: "Análisis completo de la situación jurídica de la propiedad con informe ejecutivo detallado.",
  },
  {
    icon: Shield,
    title: "Redacción de Promesa de Compraventa",
    description: "Documentos legalmente sólidos que protegen los intereses de todas las partes involucradas.",
  },
  {
    icon: DollarSign,
    title: "Contratos de Prestación de Servicios",
    description: "Elaboración de contratos blindados para servicios inmobiliarios y de corretaje.",
  },
  {
    icon: AlertCircle,
    title: "Coordinación con Notaría e Instrucciones",
    description: "Gestión completa del proceso notarial y asesoría en instrucciones para el cierre.",
  },
  {
    icon: Users,
    title: "Trámites ante el Conservador de Bienes Raíces",
    description: "Gestiones especializadas para inscripciones, anotaciones y consultas registrales.",
  },
  {
    icon: CheckCircle,
    title: "Confección de Compraventa Definitiva",
    description: "Redacción de escrituras públicas definitivas con todas las garantías legales.",
  },
]

const services = [
  {
    title: "Arriendo Pro",
    description: "Contrato, garantías y actas de entrega",
    features: [
      "Contratos de arriendo optimizados",
      "Gestión de garantías",
      "Actas de entrega detalladas",
      "Asesoría en desahucios",
    ],
    price: "Desde $120.000",
  },
  {
    title: "Plan Compraventa Segura",
    description: "Promesa + Estudio de Títulos + Compraventa + Inscripción",
    features: [
      "Promesa de compraventa blindada",
      "Estudio completo de títulos",
      "Compraventa definitiva",
      "Inscripción en el Conservador",
    ],
    price: "Desde $350.000",
    badge: "Más Popular",
  },
  {
    title: "Defensa de Comisión",
    description: "Cobro y mediación especializada",
    features: ["Estrategias de cobro", "Mediación extrajudicial", "Representación judicial", "Seguimiento de casos"],
    price: "Desde $200.000",
  },
]

export default function CorredoresPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-[#BF7F11]/5 to-transparent">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="w-fit mx-auto border-[#BF7F11]/30 text-[#BF7F11]">
              Servicios para Corredores e Inmobiliarias
            </Badge>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Protege tus <span className="text-[#BF7F11]">comisiones</span> y acelera tus operaciones
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Contratos blindados, estudios de títulos y defensa legal especializada para corredores de propiedades e
              inmobiliarias.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#BF7F11] hover:bg-[#BF7F11]/90">
                <Link href="/contacto">
                  Agenda una consulta
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-[#BF7F11]/30 text-[#BF7F11] hover:bg-[#BF7F11]/5">
                <Link href="#servicios">Ver servicios</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl mb-4">Problemas que resolvemos</h2>
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Enfrentamos los desafíos más comunes del negocio inmobiliario con soluciones jurídicas especializadas.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem, index) => (
              <Card key={index} className="border-2 hover:border-[#BF7F11]/20 transition-colors">
                <CardHeader>
                  <div className="p-2 bg-[#BF7F11]/10 rounded-lg w-fit mb-4">
                    <problem.icon className="h-6 w-6 text-[#BF7F11]" />
                  </div>
                  <CardTitle className="text-xl">{problem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{problem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl mb-4">Nuestros Servicios</h2>
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Soluciones diseñadas específicamente para corredores de propiedades e inmobiliarias.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="relative border-2 hover:border-[#BF7F11]/20 transition-colors">
                {service.badge && <Badge className="absolute -top-2 left-4 bg-[#BF7F11]">{service.badge}</Badge>}
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-[#BF7F11] mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t">
                    <div className="text-2xl font-bold text-[#BF7F11] mb-4">{service.price}</div>
                    <Button asChild className="w-full bg-[#BF7F11] hover:bg-[#BF7F11]/90">
                      <Link href="/contacto">Solicitar información</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl mb-4">Resultados que Entregamos</h2>
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Nuestros servicios especializados generan resultados concretos y medibles.
            </p>
          </div>

          <ResultadosCards />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-[#BF7F11]/5">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">¿Por qué elegirnos?</h2>
                <p className="text-base sm:text-xl text-muted-foreground">
                  Especialización en derecho inmobiliario y bancario.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="p-2 bg-[#BF7F11]/10 rounded-lg">
                    <Clock className="h-6 w-6 text-[#BF7F11]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Procesos claros y transparentes</h3>
                    <p className="text-muted-foreground">
                      Metodología clara y transparente en todos nuestros procesos legales.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-2 bg-[#BF7F11]/10 rounded-lg">
                    <Shield className="h-6 w-6 text-[#BF7F11]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Respaldo jurídico que protege tu negocio y tu inversión</h3>
                    <p className="text-muted-foreground">
                      Protección legal integral para tu negocio inmobiliario y tus inversiones.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-2 bg-[#BF7F11]/10 rounded-lg">
                    <DollarSign className="h-6 w-6 text-[#BF7F11]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Especialización en derecho inmobiliario y bancario</h3>
                    <p className="text-muted-foreground">
                      Experiencia especializada en las áreas legal e inmobiliaria y bancaria.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#BF7F11]/20 to-transparent rounded-3xl transform rotate-3"></div>
              <Card className="relative p-6 md:p-8 bg-white shadow-xl">
                <div className="text-center space-y-4">
                  <div className="text-3xl md:text-4xl font-bold text-[#BF7F11]">500+</div>
                  <div className="text-base md:text-lg font-semibold">Contratos gestionados</div>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Más de 500 contratos gestionados, más de 10 mil millones de pesos en transacciones inmobiliarias.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              ¿Listo para proteger tu negocio inmobiliario?
            </h2>
            <p className="text-base sm:text-xl text-muted-foreground px-4">
              Cotiza aquí y descubre cómo podemos ayudarte a asegurar tus comisiones y acelerar tus
              operaciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#BF7F11] hover:bg-[#BF7F11]/90">
                <Link href="/contacto">Cotiza aquí</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-[#BF7F11]/30 text-[#BF7F11] hover:bg-[#BF7F11]/5">
                <Link href="/blog">Ver Blog</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

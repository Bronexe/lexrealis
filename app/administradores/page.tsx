import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LeadBanner } from "@/components/lead-banner"
import ProcessTimeline from "@/components/ui/process-timeline"
import {
  Building2,
  DollarSign,
  FileText,
  Users,
  AlertTriangle,
  CheckCircle,
  Clock,
  Shield,
  ArrowRight,
  Gavel,
  BookOpen,
  Building,
  Hammer,
  Scale,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Servicios para Administradores de Edificios | Lex Realis",
  description:
    "Cobranza de gastos comunes, actualización de reglamentos, contratos con proveedores y resolución de conflictos para administradores de edificios.",
  icons: {
    icon: "/Favicon.png",
    shortcut: "/Favicon.png",
    apple: "/Favicon.png",
  },
  openGraph: {
    title: "Servicios para Administradores de Edificios | Lex Realis",
    description: "Soluciones jurídicas especializadas para administradores de edificios y condominios.",
  },
}

const problems = [
  {
    icon: DollarSign,
    title: "Cobranza de gastos comunes",
    description: "Gestión amistosa y judicial de morosos con procesos automatizados y seguimiento personalizado.",
  },
  {
    icon: FileText,
    title: "Actualización de Reglamento de Copropiedad",
    description: "Revisión y actualización de reglamentos internos y libros obligatorios según normativa vigente.",
  },
  {
    icon: Users,
    title: "Contratos con proveedores",
    description: "Elaboración de contratos blindados, gestión de responsabilidad civil y laboral.",
  },
  {
    icon: Building2,
    title: "Gestión del Comité",
    description: "Redacción de actas, delegaciones de facultades y cumplimiento normativo.",
  },
  {
    icon: AlertTriangle,
    title: "Conflictos habituales",
    description: "Resolución de disputas por ruidos, filtraciones, mascotas, morosidad y convivencia.",
  },
  {
    icon: Scale,
    title: "Compliance Laboral",
    description: "Revisión de cumplimiento normativo ante la Dirección del Trabajo, evita multas innecesarias y asegura el cumplimiento de la normativa laboral.",
  },
]



export default function AdministradoresPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-[#BF7F11]/5 to-transparent">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="w-fit mx-auto border-[#BF7F11]/30 text-[#BF7F11]">
              Servicios para Administradores
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Soluciones jurídicas para <span className="text-[#BF7F11]">administradores de edificios</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Desde cobranza automatizada hasta cumplimiento normativo. Protege tu comunidad con respaldo legal
              especializado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#BF7F11] hover:bg-[#BF7F11]/90">
                <Link href="/contacto">
                  Cotiza aquí
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
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
              Problemas que <span className="text-[#BF7F11]">resolvemos</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enfrentamos los desafíos más comunes de la administración de edificios con soluciones jurídicas probadas.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem, index) => (
              <Card key={index} className="border-2 hover:border-[#BF7F11]/20 transition-all duration-300 hover:shadow-lg group">
                <CardHeader>
                  <div className="p-2 bg-[#BF7F11]/10 rounded-lg w-fit mb-4 group-hover:bg-[#BF7F11]/20 transition-colors">
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

      {/* Pricing Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
              Elige el plan que más se ajuste a tu <span className="text-[#BF7F11]">presupuesto</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Con valores claros y servicios que se adaptan a cada necesidad.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {/* Plan Básico */}
            <Card className="relative border-2 hover:border-[#BF7F11]/20 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl">Plan Básico</CardTitle>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-[#BF7F11]">7</span>
                  <span className="text-xl text-muted-foreground">UF</span>
                  <span className="text-sm text-muted-foreground">/mes</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#BF7F11] mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Cobranza de Gastos Comunes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#BF7F11] mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Asesoría en Materia de Copropiedad Inmobiliaria</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#BF7F11] mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Elaboración de Actas del Comité y de Asamblea</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#BF7F11] mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Compliance Laboral</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-[#BF7F11] hover:bg-[#BF7F11]/90">
                  <Link href="/contacto">Elegir Plan Básico</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Plan Completo */}
            <Card className="relative border-2 border-[#BF7F11] hover:border-[#BF7F11]/80 transition-all duration-300 hover:shadow-lg transform scale-105">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#BF7F11] text-white">
                Más Popular
              </Badge>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl">Plan Completo</CardTitle>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-[#BF7F11]">13</span>
                  <span className="text-xl text-muted-foreground">UF</span>
                  <span className="text-sm text-muted-foreground">/mes</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-[#BF7F11] mb-2">Lo Incluido en el Plan Básico:</h4>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-[#BF7F11] mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">Cobranza de Gastos Comunes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-[#BF7F11] mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">Asesoría en Materia de Copropiedad Inmobiliaria</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-[#BF7F11] mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">Elaboración de Actas del Comité y de Asamblea</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-[#BF7F11] mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">Compliance Laboral</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#BF7F11] mb-2">Servicios Adicionales:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#BF7F11] mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Juicios laborales</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#BF7F11] mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Comparecencia ante la Dirección del Trabajo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#BF7F11] mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Confección e inscripción de reglamento de copropiedad de la Ley 21.442</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#BF7F11] mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Demandas civiles por incumplimiento de contrato</span>
                    </li>
                  </ul>
                </div>
                <Button asChild className="w-full bg-[#BF7F11] hover:bg-[#BF7F11]/90">
                  <Link href="/contacto">Elegir Plan Completo</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Plan Personalizado */}
            <Card className="relative border-2 hover:border-[#BF7F11]/20 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl">Plan Personalizado</CardTitle>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl font-bold text-[#BF7F11]">Contactar</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground text-center">
                  Servicios a medida según las necesidades específicas de tu edificio o comunidad.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#BF7F11] mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Todos los servicios de los planes anteriores</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#BF7F11] mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Servicios especializados adicionales</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#BF7F11] mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Atención prioritaria</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#BF7F11] mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Consultoría personalizada</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-[#BF7F11] hover:bg-[#BF7F11]/90">
                  <Link href="/contacto">Contactar para Cotizar</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <ProcessTimeline />

      {/* Lead Banner */}
      <section className="py-16">
        <div className="container">
          <LeadBanner />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-[#BF7F11]/5">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  ¿Por qué elegir <span className="text-[#BF7F11]">nuestros servicios</span>?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Años de experiencia especializados en derecho inmobiliario y administración de edificios.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="p-2 bg-[#BF7F11]/10 rounded-lg">
                    <Clock className="h-6 w-6 text-[#BF7F11]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Respuesta en 24 horas</h3>
                    <p className="text-muted-foreground">
                      Garantizamos respuesta a consultas urgentes en máximo 24 horas hábiles.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-2 bg-[#BF7F11]/10 rounded-lg">
                    <Shield className="h-6 w-6 text-[#BF7F11]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Honorarios transparentes</h3>
                    <p className="text-muted-foreground">
                      Precios fijos sin sorpresas. Sabes exactamente cuánto pagarás desde el inicio.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-2 bg-[#BF7F11]/10 rounded-lg">
                    <Users className="h-6 w-6 text-[#BF7F11]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Equipo especializado</h3>
                    <p className="text-muted-foreground">
                      Abogados con experiencia exclusiva en derecho inmobiliario y copropiedad.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#BF7F11]/20 to-transparent rounded-3xl transform -rotate-3"></div>
              <Card className="relative p-8 bg-white shadow-xl">
                <div className="text-center space-y-4">
                  <div className="text-4xl font-bold text-[#BF7F11]">95%</div>
                  <div className="text-lg font-semibold">de éxito en cobranzas</div>
                  <p className="text-muted-foreground">
                    De nuestros clientes administradores han resuelto sus problemas legales satisfactoriamente.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#BF7F11]/5">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              ¿Listo para simplificar la gestión legal de tu edificio?
            </h2>
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
                <Link href="/blog">Ver recursos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

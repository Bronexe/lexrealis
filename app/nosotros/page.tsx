import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedTeam } from "@/components/ui/animated-team"
import {
  Scale,
  Award,
  Users,
  BookOpen,
  CheckCircle,
  ArrowRight,
  Briefcase,
  GraduationCap,
  Building2,
  FileText,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Nosotros | Lex Realis",
  description:
    "Conoce a Lex Realis, estudio jurídico especializado en derecho inmobiliario, copropiedad y consumo con más de 15 años de experiencia.",
  icons: {
    icon: "/Favicon.png",
    shortcut: "/Favicon.png",
    apple: "/Favicon.png",
  },
  openGraph: {
    title: "Nosotros | Lex Realis",
    description: "Estudio jurídico especializado en derecho inmobiliario con más de 15 años de experiencia.",
  },
}

const team = [
  {
    name: "Cristóbal Zaror Faggioni",
    role: "Socio Fundador",
    specialization: "Derecho Inmobiliario y Copropiedad",
    education: "Universidad Adolfo Ibáñez",
    experience: "10+ años",
    description: "Especialista en administración de edificios, cobranza de gastos comunes y resolución de conflictos inmobiliarios.",
    image: "/cristobal-zaror-faggioni.png",
  },
  {
    name: "Matías Sánchez Strange",
    role: "Socio",
    specialization: "Derecho del Consumo y Contratos",
    education: "Universidad Adolfo Ibáñez",
    experience: "8+ años",
    description: "Experto en protección de corredores, contratos inmobiliarios y cumplimiento normativo.",
    image: "/matias-sanchez-strange.png",
  },
  {
    name: "Juan Ferrer Williams",
    role: "Abogado Senior",
    specialization: "Derecho Inmobiliario y Corporativo",
    education: "Universidad Adolfo Ibáñez",
    experience: "6+ años",
    description: "Especializado en estudios de títulos, promesas de compraventa y gestión de cierres inmobiliarios.",
    image: "/juan-ferrer-williams.png",
  },
  {
    name: "Sebastián León Sánchez",
    role: "Abogado",
    specialization: "Derecho Inmobiliario y Procedimientos",
    education: "Universidad Adolfo Ibáñez",
    experience: "6+ años",
    description: "Especialista en trámites registrales, inscripciones y procedimientos ante el Conservador de Bienes Raíces.",
    image: "/sebastian-leon-sanchez.png",
  },
  {
    name: "Melanie Moraga Villanueva",
    role: "Abogada",
    specialization: "Derecho del Consumo y Publicidad",
    education: "Universidad Adolfo Ibáñez",
    experience: "5+ años",
    description: "Experta en normativas de consumo, publicidad inmobiliaria y protección de derechos del consumidor.",
    image: "/melanie-moraga-villanueva.png",
  },
  {
    name: "Catalina Aguilar Silva",
    role: "Asistente Legal",
    specialization: "Gestión y Coordinación Legal",
    education: "Pontificia Universidad Católica de Valparaíso",
    experience: "3+ años",
    description: "Especializada en coordinación de casos, gestión documental y apoyo en procedimientos legales.",
    image: "/catalina-aguilar-silva.png",
  },
]

const credentials = [
  {
    title: "Colegio de Abogados de Chile",
    description: "Miembros activos con certificación vigente",
    icon: Scale,
  },
  {
    title: "Asociación de Derecho Inmobiliario",
    description: "Participación activa en desarrollo normativo",
    icon: Building2,
  },
  {
    title: "Certificación ISO 9001",
    description: "Procesos certificados de calidad",
    icon: Award,
  },
  {
    title: "Mediadores Certificados",
    description: "Centro de Mediación y Arbitraje",
    icon: Users,
  },
]

const process = [
  {
    step: "01",
    title: "Diagnóstico",
    description: "Analizamos tu situación legal actual y identificamos riesgos y oportunidades.",
    icon: FileText,
  },
  {
    step: "02",
    title: "Plan Estratégico",
    description: "Diseñamos una estrategia personalizada con objetivos claros y plazos definidos.",
    icon: BookOpen,
  },
  {
    step: "03",
    title: "Ejecución",
    description: "Implementamos las soluciones con seguimiento constante y comunicación transparente.",
    icon: CheckCircle,
  },
  {
    step: "04",
    title: "Reporte y Seguimiento",
    description: "Entregamos reportes regulares y mantenemos seguimiento post-implementación.",
    icon: Briefcase,
  },
]

export default function NosotrosPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="w-fit mx-auto">
              Sobre Lex Realis
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Equipo especializados en <span className="text-primary">derecho inmobiliario</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Somos un estudio jurídico boutique enfocado exclusivamente en derecho inmobiliario, copropiedad y consumo,
              brindando soluciones especializadas a administradores, corredores e inmobiliarias.
            </p>
          </div>
        </div>
      </section>



      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Nuestra Misión</h2>
                <p className="text-lg text-muted-foreground">
                  Brindar asesoría jurídica especializada y soluciones innovadoras en derecho inmobiliario, protegiendo
                  los intereses de nuestros clientes y facilitando el cumplimiento normativo con transparencia y
                  excelencia.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Nuestra Visión</h3>
                <p className="text-lg text-muted-foreground">
                  Ser el estudio jurídico de referencia en Chile para administradores de edificios, corredores e
                  inmobiliarias, reconocido por nuestra especialización, innovación tecnológica y resultados
                  excepcionales.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl transform rotate-3"></div>
              <Image
                src="/legal-team-meeting.png"
                alt="Equipo Lex Realis en reunión"
                width={600}
                height={400}
                className="relative rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Nuestro Equipo</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Profesionales especializados con amplia experiencia en derecho inmobiliario y copropiedad.
            </p>
          </div>

          <AnimatedTeam team={team} autoplay={false} />
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Credenciales y Certificaciones</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Respaldados por las principales instituciones del sector legal y inmobiliario.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {credentials.map((credential, index) => (
              <Card key={index} className="text-center border-2 hover:border-primary/20 transition-colors">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <credential.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{credential.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{credential.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Cómo Trabajamos</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Un proceso estructurado y transparente que garantiza resultados excepcionales.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <Card key={index} className="relative border-2 hover:border-primary/20 transition-colors">
                <div className="absolute -top-4 left-6 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  {step.step}
                </div>
                <CardHeader className="pt-8">
                  <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Press & Recognition */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Reconocimientos y Prensa</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nuestro trabajo ha sido reconocido por medios especializados y organizaciones del sector.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Badge variant="secondary">Revista Inmobiliaria</Badge>
                </div>
                <h3 className="font-semibold mb-2">"Los especialistas en cobranza de gastos comunes"</h3>
                <p className="text-sm text-muted-foreground">
                  Artículo destacando nuestras innovaciones en automatización de procesos de cobranza.
                </p>
                <p className="text-xs text-muted-foreground mt-2">Marzo 2024</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Badge variant="secondary">Diario Financiero</Badge>
                </div>
                <h3 className="font-semibold mb-2">"Protección legal para corredores de propiedades"</h3>
                <p className="text-sm text-muted-foreground">
                  Entrevista sobre estrategias legales para proteger comisiones de corredores.
                </p>
                <p className="text-xs text-muted-foreground mt-2">Enero 2024</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Badge variant="secondary">Premio Excelencia</Badge>
                </div>
                <h3 className="font-semibold mb-2">"Mejor Estudio Jurídico Inmobiliario 2023"</h3>
                <p className="text-sm text-muted-foreground">
                  Reconocimiento por la Cámara Chilena de la Construcción por innovación en servicios legales.
                </p>
                <p className="text-xs text-muted-foreground mt-2">Diciembre 2023</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">¿Listo para trabajar con especialistas?</h2>
            <p className="text-xl text-muted-foreground">
              Agenda una consulta gratuita y descubre cómo nuestra experiencia puede resolver tus desafíos legales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contacto">
                  Agenda tu consulta gratuita
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/casos">Ver casos de éxito</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

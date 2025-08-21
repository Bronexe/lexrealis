import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Agendar Consulta | Lex Realis",
  description: "Agenda tu consulta gratuita con nuestros especialistas en derecho inmobiliario. Horarios disponibles para reuniones presenciales y virtuales.",
  icons: {
    icon: "/Favicon.png",
    shortcut: "/Favicon.png",
    apple: "/Favicon.png",
  },
  openGraph: {
    title: "Agendar Consulta | Lex Realis",
    description: "Agenda tu consulta gratuita con nuestros especialistas en derecho inmobiliario.",
  },
}

export default function AgendarPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#BF7F11]/5 to-transparent">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Button asChild variant="ghost" className="mb-6">
              <Link href="/contacto" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Volver a contacto
              </Link>
            </Button>

            <div className="text-center space-y-6">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-[#BF7F11]/10 rounded-full">
                  <Calendar className="h-8 w-8 text-[#BF7F11]" />
                </div>
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Agenda tu consulta con <span className="text-[#BF7F11]">abogados especialistas en Derecho Inmobiliario</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Selecciona el horario que mejor te acomode para conversar sobre tus desafíos legales. 
                Ofrecemos reuniones presenciales y virtuales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Google Calendar Appointment Scheduling begin */}
              <iframe 
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1wwTiJeaPtVX0opFlLlFiFdV8Gst4N8Su9Tw4A-d65o6tWtdH0_kp-l3b3GNLA_DC-AvsglYBU?gv=true" 
                style={{ border: 0 }} 
                width="100%" 
                height="600" 
                frameBorder="0"
                title="Agendar consulta con Lex Realis"
              />
              {/* end Google Calendar Appointment Scheduling */}
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                ¿Qué incluye tu consulta con abogados especialistas?
              </h2>
              <p className="text-xl text-muted-foreground">
                Una sesión de 30 minutos para analizar tu situación y proponer soluciones.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center space-y-3">
                <div className="mx-auto p-3 bg-[#BF7F11]/10 rounded-full w-fit">
                  <Calendar className="h-6 w-6 text-[#BF7F11]" />
                </div>
                <h3 className="font-semibold">Análisis inicial</h3>
                <p className="text-sm text-muted-foreground">
                  Revisamos tu situación legal y identificamos los puntos críticos.
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="mx-auto p-3 bg-[#BF7F11]/10 rounded-full w-fit">
                  <Calendar className="h-6 w-6 text-[#BF7F11]" />
                </div>
                <h3 className="font-semibold">Estrategia personalizada</h3>
                <p className="text-sm text-muted-foreground">
                  Diseñamos un plan de acción específico para tu caso.
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="mx-auto p-3 bg-[#BF7F11]/10 rounded-full w-fit">
                  <Calendar className="h-6 w-6 text-[#BF7F11]" />
                </div>
                <h3 className="font-semibold">Presupuesto claro</h3>
                <p className="text-sm text-muted-foreground">
                  Te entregamos un presupuesto detallado sin compromiso.
                </p>
              </div>
            </div>

            <div className="pt-8">
              <Button asChild size="lg" className="bg-[#BF7F11] hover:bg-[#BF7F11]/90">
                <Link href="/contacto">
                  ¿Prefieres contactarnos directamente?
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}



"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, MessageSquare, Calendar, CheckCircle, FileText } from "lucide-react"
import { JotFormScripts } from "@/components/jotform-scripts"

export default function ContactoPage() {

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Agenda tu <span className="text-[#BF7F11]">consulta</span> personalizada
            </h1>
            <p className="text-xl text-muted-foreground">
              Conversemos sobre tus desafíos legales. Te responderemos en máximo 24 horas.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-2">
                <CardHeader className="hidden">
                  <CardTitle className="text-2xl">Cuéntanos tu situación</CardTitle>
                  <CardDescription>
                    Completa el formulario y nos pondremos en contacto contigo para agendar una consulta gratuita.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <iframe
                    id="JotFormIFrame-250325680930050"
                    title="Lex Realis - Contáctanos"
                    onLoad={() => window.parent.scrollTo(0,0)}
                    allow="geolocation; microphone; camera; fullscreen; payment"
                    src="https://form.jotform.com/250325680930050"
                    frameBorder="0"
                    style={{minWidth: "100%", maxWidth: "100%", height: "539px", border: "none"}}
                    scrolling="no"
                  />
                  <JotFormScripts />
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    Información de contacto
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <div className="font-medium">+56 9 6618 8788</div>
                      <div className="text-sm text-muted-foreground">Lunes a viernes, 9:00 - 18:00</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <div className="font-medium">contacto@lexrealis.cl</div>
                      <div className="text-sm text-muted-foreground">Respuesta en 24 horas</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <div className="font-medium">Reñaca Norte 25, Oficina 812, Viña del Mar</div>
                      <div className="text-sm text-muted-foreground">Reuniones presenciales y virtuales</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp */}
              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-100 rounded-full">
                      <MessageSquare className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-green-800">WhatsApp</h3>
                      <p className="text-sm text-green-700">Consultas urgentes</p>
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      className="border-green-300 text-green-700 hover:bg-green-100 bg-transparent"
                    >
                      <Link href="https://wa.me/56966188788" target="_blank">
                        Escribir
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Calendar */}
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">Agenda directa</h3>
                      <p className="text-sm text-muted-foreground">Reserva tu hora online</p>
                    </div>
                    <Button asChild>
                      <Link href="/agendar">
                        Agendar
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Tiempo de respuesta</h3>
                      <p className="text-sm text-muted-foreground">Máximo 24 horas hábiles para primera respuesta</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">¿Cómo trabajamos?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Un proceso simple y transparente para resolver tus desafíos legales.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Diagnóstico</h3>
              <p className="text-muted-foreground">Analizamos tu situación y identificamos los puntos críticos.</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Plan</h3>
              <p className="text-muted-foreground">
                Diseñamos una estrategia legal personalizada con tiempos y costos claros.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Ejecución</h3>
              <p className="text-muted-foreground">Implementamos las soluciones con seguimiento constante.</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">4. Reporte</h3>
              <p className="text-muted-foreground">Te mantenemos informado con reportes regulares de avance.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

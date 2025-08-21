import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Mail, Phone, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Política de Privacidad | Lex Realis",
  description: "Política de privacidad y tratamiento de datos personales de Lex Realis.",
  robots: {
    index: false,
    follow: true,
  },
}

export default function PrivacidadPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Button asChild variant="ghost" className="mb-8">
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Volver al inicio
              </Link>
            </Button>

            <div className="space-y-6">
              <Badge variant="outline" className="w-fit">
                Información Legal
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Política de <span className="text-primary">Privacidad</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                En Lex Realis valoramos y protegemos tu privacidad. Esta política explica cómo recopilamos, usamos y
                protegemos tu información personal.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>Última actualización: 15 de enero de 2024</span>
                <span>•</span>
                <span>Versión 2.1</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Información General */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  1. Información General
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  <strong>Lex Realis</strong> (en adelante "nosotros", "nuestro" o "la empresa") es un estudio jurídico
                  especializado en derecho inmobiliario, con domicilio en Viña del Mar, Chile.
                </p>
                <p>
                  Esta Política de Privacidad se aplica a toda la información personal que recopilamos a través de
                  nuestro sitio web, formularios de contacto, consultas telefónicas y cualquier otro medio de
                  comunicación.
                </p>
                <div className="bg-primary/5 p-4 rounded-lg">
                  <p className="text-sm">
                    <strong>Responsable del tratamiento:</strong> Lex Realis
                    <br />
                    <strong>Contacto DPO:</strong> privacidad@lexrealis.cl
                    <br />
                    <strong>Dirección:</strong> Reñaca Norte 25, Oficina 812, Viña del Mar, Chile
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Información que Recopilamos */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle>2. Información que Recopilamos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h4 className="font-semibold">2.1 Información que nos proporcionas directamente:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Datos de contacto (nombre, email, teléfono)</li>
                  <li>Información profesional (empresa, cargo, edificio/condominio)</li>
                  <li>Consultas legales y comunicaciones</li>
                  <li>Información de facturación y pagos</li>
                </ul>

                <h4 className="font-semibold">2.2 Información recopilada automáticamente:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Dirección IP y datos de navegación</li>
                  <li>Cookies y tecnologías similares</li>
                  <li>Información del dispositivo y navegador</li>
                  <li>Páginas visitadas y tiempo de permanencia</li>
                </ul>
              </CardContent>
            </Card>

            {/* Uso de la Información */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle>3. Cómo Usamos tu Información</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Utilizamos tu información personal para:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Prestación de servicios:</strong> Brindar asesoría jurídica y servicios legales
                  </li>
                  <li>
                    <strong>Comunicación:</strong> Responder consultas y mantener comunicación profesional
                  </li>
                  <li>
                    <strong>Mejora de servicios:</strong> Analizar y mejorar nuestros servicios
                  </li>
                  <li>
                    <strong>Marketing:</strong> Enviar información relevante (solo con tu consentimiento)
                  </li>
                  <li>
                    <strong>Cumplimiento legal:</strong> Cumplir obligaciones legales y regulatorias
                  </li>
                  <li>
                    <strong>Seguridad:</strong> Proteger nuestros sistemas y prevenir fraudes
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Base Legal */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle>4. Base Legal para el Tratamiento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Procesamos tu información personal basándonos en:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Consentimiento:</strong> Cuando nos has dado permiso explícito
                  </li>
                  <li>
                    <strong>Ejecución contractual:</strong> Para cumplir contratos de servicios legales
                  </li>
                  <li>
                    <strong>Interés legítimo:</strong> Para mejorar servicios y comunicación comercial
                  </li>
                  <li>
                    <strong>Obligación legal:</strong> Para cumplir requisitos legales del ejercicio profesional
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Compartir Información */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle>5. Compartir tu Información</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>No vendemos tu información personal. Podemos compartirla únicamente en estos casos:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Proveedores de servicios:</strong> Empresas que nos ayudan a operar (hosting, email, etc.)
                  </li>
                  <li>
                    <strong>Requerimientos legales:</strong> Cuando sea requerido por autoridades competentes
                  </li>
                  <li>
                    <strong>Protección de derechos:</strong> Para proteger nuestros derechos legales
                  </li>
                  <li>
                    <strong>Con tu consentimiento:</strong> En cualquier otro caso con tu autorización expresa
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Seguridad */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle>6. Seguridad de la Información</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Implementamos medidas de seguridad técnicas y organizativas para proteger tu información:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Cifrado SSL/TLS para transmisión de datos</li>
                  <li>Acceso restringido a información personal</li>
                  <li>Capacitación regular del personal en privacidad</li>
                  <li>Auditorías periódicas de seguridad</li>
                  <li>Respaldo seguro de información</li>
                </ul>
              </CardContent>
            </Card>

            {/* Retención de Datos */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle>7. Retención de Datos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Conservamos tu información personal durante:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Clientes activos:</strong> Durante la relación contractual y 5 años adicionales
                  </li>
                  <li>
                    <strong>Consultas:</strong> 2 años desde la última comunicación
                  </li>
                  <li>
                    <strong>Marketing:</strong> Hasta que retires tu consentimiento
                  </li>
                  <li>
                    <strong>Obligaciones legales:</strong> Según requiera la legislación aplicable
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Derechos del Usuario */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle>8. Tus Derechos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Tienes derecho a:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Acceso:</strong> Solicitar información sobre el tratamiento de tus datos
                  </li>
                  <li>
                    <strong>Rectificación:</strong> Corregir datos inexactos o incompletos
                  </li>
                  <li>
                    <strong>Eliminación:</strong> Solicitar la eliminación de tus datos personales
                  </li>
                  <li>
                    <strong>Oposición:</strong> Oponerte al tratamiento de tus datos
                  </li>
                  <li>
                    <strong>Portabilidad:</strong> Recibir tus datos en formato estructurado
                  </li>
                  <li>
                    <strong>Limitación:</strong> Solicitar la limitación del tratamiento
                  </li>
                </ul>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm">
                    <strong>Para ejercer tus derechos, contáctanos en:</strong>
                    <br />
                    Email: privacidad@lexrealis.cl
                    <br />
                    Teléfono: +56 9 6618 8788
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle>9. Cookies y Tecnologías Similares</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Utilizamos cookies para:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Mejorar la funcionalidad del sitio web</li>
                  <li>Analizar el tráfico y uso del sitio</li>
                  <li>Personalizar tu experiencia</li>
                  <li>Recordar tus preferencias</li>
                </ul>
                <p>
                  Puedes controlar las cookies a través de la configuración de tu navegador. Ten en cuenta que
                  deshabilitar cookies puede afectar la funcionalidad del sitio.
                </p>
              </CardContent>
            </Card>

            {/* Menores de Edad */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle>10. Menores de Edad</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Nuestros servicios están dirigidos a profesionales y empresas. No recopilamos intencionalmente
                  información personal de menores de 18 años sin el consentimiento de sus padres o tutores legales.
                </p>
              </CardContent>
            </Card>

            {/* Cambios en la Política */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle>11. Cambios en esta Política</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Podemos actualizar esta Política de Privacidad ocasionalmente. Te notificaremos sobre cambios
                  significativos a través de nuestro sitio web o por email.
                </p>
                <p>
                  Te recomendamos revisar esta política periódicamente para mantenerte informado sobre cómo protegemos
                  tu información.
                </p>
              </CardContent>
            </Card>

            {/* Contacto */}
            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  12. Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Si tienes preguntas sobre esta Política de Privacidad o el tratamiento de tus datos personales, puedes
                  contactarnos:
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <span>privacidad@lexrealis.cl</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>+56 9 6618 8788</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Nos comprometemos a responder tu consulta en un plazo máximo de 30 días.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold">¿Tienes dudas sobre privacidad?</h2>
            <p className="text-muted-foreground">
              Nuestro equipo está disponible para resolver cualquier consulta sobre el tratamiento de tus datos.
            </p>
            <Button asChild>
              <Link href="/contacto">Contactar</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

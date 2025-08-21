import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Scale, AlertTriangle, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Términos y Condiciones | Lex Realis",
  description: "Términos y condiciones de uso de los servicios de Lex Realis.",
  icons: {
    icon: "/Favicon.png",
    shortcut: "/Favicon.png",
    apple: "/Favicon.png",
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function TerminosPage() {
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
                Términos y <span className="text-primary">Condiciones</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Estos términos y condiciones regulan el uso de nuestros servicios y sitio web. Al utilizar nuestros
                servicios, aceptas estos términos.
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
            {/* Aceptación */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="h-5 w-5 text-primary" />
                  1. Aceptación de los Términos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Al acceder y utilizar el sitio web de <strong>Lex Realis</strong> y nuestros servicios, usted acepta
                  estar sujeto a estos Términos y Condiciones y a nuestra Política de Privacidad.
                </p>
                <p>Si no está de acuerdo con alguno de estos términos, no debe utilizar nuestros servicios.</p>
                <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
                    <p className="text-sm text-amber-800">
                      <strong>Importante:</strong> Estos términos pueden cambiar ocasionalmente. Es su responsabilidad
                      revisarlos periódicamente.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Definiciones */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle>2. Definiciones</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Para efectos de estos términos:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>"Lex Realis", "nosotros", "nuestro":</strong> Se refiere al estudio jurídico Lex Realis
                  </li>
                  <li>
                    <strong>"Cliente", "usted":</strong> Persona natural o jurídica que utiliza nuestros servicios
                  </li>
                  <li>
                    <strong>"Servicios":</strong> Todos los servicios legales ofrecidos por Lex Realis
                  </li>
                  <li>
                    <strong>"Sitio web":</strong> El sitio web lexrealis.cl y sus subdominios
                  </li>
                  <li>
                    <strong>"Contenido":</strong> Toda información, textos, documentos y materiales del sitio
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Servicios */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle>3. Descripción de Servicios</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Lex Realis ofrece servicios jurídicos especializados en:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Derecho inmobiliario y copropiedad</li>
                  <li>Asesoría a administradores de edificios</li>
                  <li>Servicios legales para corredores e inmobiliarias</li>
                  <li>Cobranza de gastos comunes</li>
                  <li>Contratos inmobiliarios</li>
                  <li>Representación judicial</li>
                </ul>

                <h4 className="font-semibold">3.1 Limitaciones del Servicio</h4>
                <p>
                  Nuestros servicios están sujetos a la legislación chilena y se prestan exclusivamente dentro del
                  territorio nacional, salvo acuerdo expreso en contrario.
                </p>
              </CardContent>
            </Card>

            {/* Relación Cliente-Abogado */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle>4. Relación Cliente-Abogado</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h4 className="font-semibold">4.1 Establecimiento de la Relación</h4>
                <p>
                  La relación cliente-abogado se establece únicamente mediante la firma de un contrato de prestación de
                  servicios profesionales o carta de representación.
                </p>

                <h4 className="font-semibold">4.2 Confidencialidad</h4>
                <p>
                  Toda información compartida con nosotros está protegida por el secreto profesional y será tratada con
                  estricta confidencialidad según las normas éticas de la profesión.
                </p>

                <h4 className="font-semibold">4.3 Conflictos de Interés</h4>
                <p>
                  Evaluamos cuidadosamente los potenciales conflictos de interés antes de aceptar cualquier
                  representación y mantenemos sistemas para identificar y manejar dichos conflictos.
                </p>
              </CardContent>
            </Card>

            {/* Honorarios y Pagos */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle>5. Honorarios y Forma de Pago</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h4 className="font-semibold">5.1 Estructura de Honorarios</h4>
                <p>Nuestros honorarios pueden estructurarse como:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Honorarios fijos por servicio</li>
                  <li>Honorarios por hora</li>
                  <li>Honorarios de éxito (cuando sea apropiado)</li>
                  <li>Retainer mensual</li>
                </ul>

                <h4 className="font-semibold">5.2 Facturación y Pago</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Los honorarios se facturan según lo acordado en el contrato</li>
                  <li>Los pagos deben realizarse dentro de 30 días desde la fecha de factura</li>
                  <li>Los pagos atrasados pueden generar intereses de mora</li>
                  <li>Podemos suspender servicios por falta de pago</li>
                </ul>

                <h4 className="font-semibold">5.3 Gastos Adicionales</h4>
                <p>
                  Los gastos de terceros (tribunales, notarías, publicaciones, etc.) son adicionales a los honorarios
                  profesionales y serán facturados por separado.
                </p>
              </CardContent>
            </Card>

            {/* Obligaciones del Cliente */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle>6. Obligaciones del Cliente</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>El cliente se compromete a:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Proporcionar información completa, precisa y oportuna</li>
                  <li>Colaborar activamente en el desarrollo del caso</li>
                  <li>Pagar los honorarios y gastos según lo acordado</li>
                  <li>Informar cambios relevantes en su situación</li>
                  <li>Seguir el consejo legal proporcionado</li>
                  <li>Mantener la confidencialidad cuando sea requerido</li>
                </ul>
              </CardContent>
            </Card>

            {/* Limitaciones de Responsabilidad */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle>7. Limitaciones de Responsabilidad</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h4 className="font-semibold">7.1 Estándar de Cuidado</h4>
                <p>
                  Nos comprometemos a prestar nuestros servicios con el cuidado, habilidad y diligencia que
                  razonablemente se espera de abogados competentes en nuestra área de especialización.
                </p>

                <h4 className="font-semibold">7.2 Limitaciones</h4>
                <p>Nuestra responsabilidad está limitada por:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>El alcance específico de nuestro mandato</li>
                  <li>La información proporcionada por el cliente</li>
                  <li>Factores externos fuera de nuestro control</li>
                  <li>Cambios en la legislación o jurisprudencia</li>
                </ul>

                <h4 className="font-semibold">7.3 Exclusiones</h4>
                <p>No somos responsables por:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Decisiones del cliente contrarias a nuestro consejo</li>
                  <li>Información falsa o incompleta proporcionada por el cliente</li>
                  <li>Daños indirectos o consecuenciales</li>
                  <li>Pérdida de oportunidades de negocio</li>
                </ul>
              </CardContent>
            </Card>

            {/* Uso del Sitio Web */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle>8. Uso del Sitio Web</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h4 className="font-semibold">8.1 Uso Permitido</h4>
                <p>Puede utilizar nuestro sitio web para:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Obtener información sobre nuestros servicios</li>
                  <li>Contactarnos para consultas</li>
                  <li>Descargar recursos gratuitos</li>
                  <li>Acceder a contenido educativo</li>
                </ul>

                <h4 className="font-semibold">8.2 Uso Prohibido</h4>
                <p>Está prohibido:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Usar el sitio para fines ilegales</li>
                  <li>Intentar acceder a sistemas no autorizados</li>
                  <li>Reproducir contenido sin autorización</li>
                  <li>Enviar spam o contenido malicioso</li>
                  <li>Interferir con el funcionamiento del sitio</li>
                </ul>
              </CardContent>
            </Card>

            {/* Propiedad Intelectual */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle>9. Propiedad Intelectual</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Todo el contenido del sitio web, incluyendo textos, gráficos, logos, imágenes, software y otros
                  materiales, es propiedad de Lex Realis o sus licenciantes.
                </p>
                <p>
                  Está protegido por las leyes de derechos de autor y otras leyes de propiedad intelectual. No puede
                  reproducir, distribuir o crear obras derivadas sin autorización expresa.
                </p>
              </CardContent>
            </Card>

            {/* Terminación */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle>10. Terminación de Servicios</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h4 className="font-semibold">10.1 Terminación por el Cliente</h4>
                <p>
                  El cliente puede terminar nuestros servicios en cualquier momento mediante notificación escrita,
                  sujeto al pago de servicios ya prestados.
                </p>

                <h4 className="font-semibold">10.2 Terminación por Lex Realis</h4>
                <p>Podemos terminar la representación en casos de:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Falta de pago de honorarios</li>
                  <li>Conflicto de interés</li>
                  <li>Falta de cooperación del cliente</li>
                  <li>Instrucciones contrarias a la ética profesional</li>
                </ul>

                <h4 className="font-semibold">10.3 Efectos de la Terminación</h4>
                <p>
                  Al terminar la relación, entregaremos los documentos del cliente y proporcionaremos un resumen del
                  estado del asunto.
                </p>
              </CardContent>
            </Card>

            {/* Ley Aplicable */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle>11. Ley Aplicable y Jurisdicción</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Estos términos se rigen por las leyes de Chile. Cualquier disputa será resuelta por los tribunales
                  competentes de Viña del Mar, Chile.
                </p>
                <p>Preferimos resolver disputas mediante mediación antes de recurrir a litigio.</p>
              </CardContent>
            </Card>

            {/* Modificaciones */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle>12. Modificaciones</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones
                  entrarán en vigor al ser publicadas en nuestro sitio web.
                </p>
                <p>
                  Los cambios significativos serán notificados a los clientes activos por email o mediante aviso en el
                  sitio web.
                </p>
              </CardContent>
            </Card>

            {/* Contacto */}
            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  13. Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Si tiene preguntas sobre estos Términos y Condiciones, puede contactarnos:</p>
                <div className="space-y-2">
                  <p>
                    <strong>Email:</strong> contacto@lexrealis.cl
                  </p>
                  <p>
                    <strong>Teléfono:</strong> +56 9 6618 8788
                  </p>
                  <p>
                    <strong>Dirección:</strong> Reñaca Norte 25, Oficina 812, Viña del Mar, Chile
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold">¿Listo para comenzar?</h2>
            <p className="text-muted-foreground">
              Agenda una consulta gratuita para discutir cómo podemos ayudarte con tus necesidades legales.
            </p>
            <Button asChild>
                              <Link href="/agendar">Agenda tu consulta</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

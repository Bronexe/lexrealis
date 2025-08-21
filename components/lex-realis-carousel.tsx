"use client"
import { Carousel, Card } from "@/components/ui/apple-cards-carousel"
import { Scale, Zap, FileCheck, Clock, Shield, Users } from "lucide-react"

export default function LexRealisCarousel() {
  const cards = data.map((card, index) => <Card key={card.src} card={card} index={index} />)

  return (
    <div className="w-full h-full py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 text-neutral-800 dark:text-neutral-200">
          ¿Por qué elegir <span className="text-[#BF7F11]">Lex Realis</span>?
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Somos el único estudio que combina experiencia jurídica con tecnología para optimizar la gestión legal
          inmobiliaria.
        </p>
      </div>
      <Carousel items={cards} />
    </div>
  )
}

const SpecializationContent = () => {
  return (
    <>
      <div className="bg-[#BF7F11]/5 dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-[#BF7F11]">
            15+ años especializados exclusivamente en derecho inmobiliario.
          </span>{" "}
          Nuestro equipo domina cada aspecto de la legislación de copropiedad, administración de edificios y negocios
          inmobiliarios. No somos generalistas - somos expertos.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#BF7F11] mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Edificios asesorados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#BF7F11] mb-2">95%</div>
            <div className="text-sm text-muted-foreground">Casos exitosos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#BF7F11] mb-2">$5.2M</div>
            <div className="text-sm text-muted-foreground">Recuperado para clientes</div>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-neutral-900 p-8 md:p-14 rounded-3xl mb-4">
        <h3 className="text-2xl font-bold text-[#BF7F11] mb-4">Áreas de Especialización</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start gap-3">
            <Scale className="h-6 w-6 text-[#BF7F11] mt-1" />
            <div>
              <h4 className="font-semibold mb-2">Derecho de Copropiedad</h4>
              <p className="text-sm text-muted-foreground">
                Reglamentos, asambleas, cobranza de gastos comunes y resolución de conflictos.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Users className="h-6 w-6 text-[#BF7F11] mt-1" />
            <div>
              <h4 className="font-semibold mb-2">Administración de Edificios</h4>
              <p className="text-sm text-muted-foreground">
                Contratos laborales, proveedores, seguros y cumplimiento normativo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const AutomationContent = () => {
  return (
    <>
      <div className="bg-[#BF7F11]/5 dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-[#BF7F11]">
            Tecnología que optimiza procesos y reduce tiempos de gestión.
          </span>{" "}
          Nuestras automatizaciones incluyen recordatorios inteligentes, reportes automáticos y firmas digitales que
          aceleran cada proceso legal.
        </p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-neutral-900 p-6 rounded-2xl">
            <Zap className="h-8 w-8 text-[#BF7F11] mb-3" />
            <h4 className="font-semibold mb-2">Cobranza Automatizada</h4>
            <p className="text-sm text-muted-foreground">
              Sistema que envía cartas de cobranza, hace seguimiento y genera reportes automáticamente.
            </p>
          </div>
          <div className="bg-white dark:bg-neutral-900 p-6 rounded-2xl">
            <FileCheck className="h-8 w-8 text-[#BF7F11] mb-3" />
            <h4 className="font-semibold mb-2">Firmas Digitales</h4>
            <p className="text-sm text-muted-foreground">
              Contratos y documentos firmados digitalmente con validez legal completa.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-neutral-900 p-8 md:p-14 rounded-3xl">
        <h3 className="text-2xl font-bold text-[#BF7F11] mb-4">Beneficios de la Automatización</h3>
        <ul className="space-y-3">
          <li className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#BF7F11] rounded-full"></div>
            <span>Reducción del 70% en tiempo de gestión administrativa</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#BF7F11] rounded-full"></div>
            <span>Reportes en tiempo real sobre estado de cobranzas</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#BF7F11] rounded-full"></div>
            <span>Notificaciones automáticas de vencimientos y plazos</span>
          </li>
        </ul>
      </div>
    </>
  )
}

const TransparencyContent = () => {
  return (
    <>
      <div className="bg-[#BF7F11]/5 dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-[#BF7F11]">
            Precios fijos y tiempos de respuesta garantizados por contrato.
          </span>{" "}
          Sin sorpresas, sin costos ocultos. Sabes exactamente cuánto pagarás y cuándo recibirás respuesta desde el
          primer día.
        </p>
        <div className="mt-8 bg-white dark:bg-neutral-900 p-6 rounded-2xl">
          <h4 className="font-semibold text-[#BF7F11] mb-4">Nuestros SLA Garantizados</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <Clock className="h-8 w-8 text-[#BF7F11] mx-auto mb-2" />
              <div className="font-bold">24 horas</div>
              <div className="text-sm text-muted-foreground">Primera respuesta</div>
            </div>
            <div className="text-center">
              <Shield className="h-8 w-8 text-[#BF7F11] mx-auto mb-2" />
              <div className="font-bold">48 horas</div>
              <div className="text-sm text-muted-foreground">Análisis legal</div>
            </div>
            <div className="text-center">
              <FileCheck className="h-8 w-8 text-[#BF7F11] mx-auto mb-2" />
              <div className="font-bold">7 días</div>
              <div className="text-sm text-muted-foreground">Documentos listos</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-neutral-900 p-8 md:p-14 rounded-3xl">
        <h3 className="text-2xl font-bold text-[#BF7F11] mb-4">Estructura de Honorarios Transparente</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-neutral-800 rounded-lg">
            <span className="font-medium">Consulta inicial</span>
            <span className="text-[#BF7F11] font-bold">GRATIS</span>
          </div>
          <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-neutral-800 rounded-lg">
            <span className="font-medium">Paquete Cumplimiento</span>
            <span className="text-[#BF7F11] font-bold">Desde $150.000</span>
          </div>
          <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-neutral-800 rounded-lg">
            <span className="font-medium">Cobranza Smart</span>
            <span className="text-[#BF7F11] font-bold">Desde $80.000/mes</span>
          </div>
        </div>
      </div>
    </>
  )
}

const data = [
  {
    category: "Especialización",
    title: "Expertos en derecho inmobiliario y copropiedad",
    src: "/legal-office-specialization.png",
    content: <SpecializationContent />,
  },
  {
    category: "Tecnología",
    title: "Automatizaciones que optimizan tu gestión",
    src: "/legal-tech-automation.png",
    content: <AutomationContent />,
  },
  {
    category: "Transparencia",
    title: "Honorarios claros y SLA garantizados",
    src: "/placeholder-aqgzi.png",
    content: <TransparencyContent />,
  },
]

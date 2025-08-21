import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  FileSearch,
  Users,
  DollarSign,
  Gavel,
  FileText,
  BookOpen,
  Building,
  Hammer,
  Briefcase,
} from "lucide-react";

export default function ServicesBentoGrid() {
  return (
    <BentoGrid className="max-w-6xl mx-auto">
      {services.map((service, i) => (
                 <BentoGridItem
           key={i}
           title={service.title}
           description={service.description}
           header={service.header}
           icon={service.icon}
           className={i === 0 || i === 3 || i === 4 ? "md:col-span-2" : ""}
         />
      ))}
    </BentoGrid>
  );
}

const Skeleton = ({ className }: { className?: string }) => (
  <div className={cn("flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-[#BF7F11]/10 to-[#BF7F11]/5", className)}></div>
);

const services = [
  {
    title: "Estudio de Títulos",
    description: "Revisamos los antecedentes legales de la propiedad para garantizar que esté libre de cargas y gravámenes, brindando seguridad jurídica en la transacción.",
    header: <Skeleton className="bg-gradient-to-br from-[#BF7F11]/20 to-[#BF7F11]/10" />,
    icon: <FileSearch className="h-6 w-6 text-[#BF7F11]" />,
  },
  {
    title: "Representación Legal",
    description: "Ofrecemos representación legal en todas las etapas de transacciones inmobiliarias, defendiendo tus derechos y garantizando un proceso transparente y seguro.",
    header: <Skeleton />,
    icon: <Users className="h-6 w-6 text-[#BF7F11]" />,
  },
  {
    title: "Cobranza de Gastos Comunes",
    description: "Gestionamos la cobranza de gastos comunes, actuando de manera eficiente y profesional para asegurar el cumplimiento de las obligaciones financieras.",
    header: <Skeleton />,
    icon: <DollarSign className="h-6 w-6 text-[#BF7F11]" />,
  },
  {
    title: "Reglamentos",
    description: "Elaboramos y asesoramos en la creación de reglamentos internos para comunidades y condominios, asegurando el cumplimiento de la normativa vigente (Ley 21442).",
    header: <Skeleton className="bg-gradient-to-br from-[#BF7F11]/20 to-[#BF7F11]/10" />,
    icon: <BookOpen className="h-6 w-6 text-[#BF7F11]" />,
  },
  {
    title: "Asesoría Laboral y Remuneraciones",
    description: "Dado que en los edificios y condominios existen trabajadores y copropietarios, pueden derivar en diversos conflictos. Prestamos asesoría en materia Laboral y de Remuneración de los Trabajadores.",
    header: <Skeleton />,
    icon: <Briefcase className="h-6 w-6 text-[#BF7F11]" />,
  },
  {
    title: "Juicios de Arrendamiento",
    description: "Brindamos asesoría y representación en juicios de arrendamiento, defendiendo tus intereses y buscando soluciones rápidas y efectivas para conflictos.",
    header: <Skeleton />,
    icon: <Gavel className="h-6 w-6 text-[#BF7F11]" />,
  },
  {
    title: "Compraventa",
    description: "Redactamos y revisamos contratos de compraventa, asegurando que cumplan con las normativas legales y protejan los intereses de todas las partes involucradas.",
    header: <Skeleton />,
    icon: <FileText className="h-6 w-6 text-[#BF7F11]" />,
  },
  {
    title: "Trámites en Conservador",
    description: "Realizamos todos los trámites necesarios ante el Conservador de Bienes Raíces, garantizando la correcta inscripción y actualización de los registros de propiedad.",
    header: <Skeleton />,
    icon: <Building className="h-6 w-6 text-[#BF7F11]" />,
  },
  {
    title: "Remate de Propiedades",
    description: "Representamos en procesos de remate de propiedades, asegurando el cumplimiento de la normativa legal y obteniendo los mejores resultados posibles.",
    header: <Skeleton />,
    icon: <Hammer className="h-6 w-6 text-[#BF7F11]" />,
  },
];

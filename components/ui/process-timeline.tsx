"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  FileText, 
  Search, 
  Target, 
  DollarSign, 
  Gavel, 
  BookOpen 
} from "lucide-react";

export default function ProcessTimeline() {
  const data = [
    {
      title: "1. Reunión Personalizada",
      content: (
        <div>
          <p className="mb-6 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
            Iniciamos con una reunión personalizada para entender las necesidades específicas de tu edificio y comunidad.
          </p>
          <Card className="bg-[#BF7F11]/5 border-[#BF7F11]/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-[#BF7F11]/10 rounded-lg">
                  <Users className="h-5 w-5 text-[#BF7F11]" />
                </div>
                <h4 className="font-semibold text-[#BF7F11]">Evaluación Inicial</h4>
              </div>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#BF7F11]">•</span>
                  Análisis de la situación actual del edificio
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#BF7F11]">•</span>
                  Identificación de problemas y necesidades
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#BF7F11]">•</span>
                  Definición de objetivos y expectativas
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      title: "2. Contratación del Servicio",
      content: (
        <div>
          <p className="mb-6 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
            Una vez definidas las necesidades, procedemos con la contratación del servicio más adecuado según tu presupuesto.
          </p>
          <Card className="bg-[#BF7F11]/5 border-[#BF7F11]/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-[#BF7F11]/10 rounded-lg">
                  <FileText className="h-5 w-5 text-[#BF7F11]" />
                </div>
                <h4 className="font-semibold text-[#BF7F11]">Selección del Plan</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <Badge variant="outline" className="text-xs border-[#BF7F11]/30 text-[#BF7F11]">
                  Plan Básico - 7 UF
                </Badge>
                <Badge variant="outline" className="text-xs border-[#BF7F11]/30 text-[#BF7F11]">
                  Plan Completo - 13 UF
                </Badge>
                <Badge variant="outline" className="text-xs border-[#BF7F11]/30 text-[#BF7F11]">
                  Plan Personalizado
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      title: "3. Revisión de Documentos",
      content: (
        <div>
          <p className="mb-6 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
            Nuestros abogados especializados revisan exhaustivamente las actas, reglamentos e información laboral del edificio.
          </p>
          <Card className="bg-[#BF7F11]/5 border-[#BF7F11]/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-[#BF7F11]/10 rounded-lg">
                  <Search className="h-5 w-5 text-[#BF7F11]" />
                </div>
                <h4 className="font-semibold text-[#BF7F11]">Auditoría Legal</h4>
              </div>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#BF7F11]">•</span>
                  Revisión de actas de asambleas y comité
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#BF7F11]">•</span>
                  Análisis del reglamento de copropiedad
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#BF7F11]">•</span>
                  Evaluación de cumplimiento laboral
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#BF7F11]">•</span>
                  Identificación de riesgos legales
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      title: "4. Plan de Mejora",
      content: (
        <div>
          <p className="mb-6 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
          Basado en la auditoría, desarrollamos un plan de mejora personalizado para optimizar la gestión legal del edificio.
          </p>
          <Card className="bg-[#BF7F11]/5 border-[#BF7F11]/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-[#BF7F11]/10 rounded-lg">
                  <Target className="h-5 w-5 text-[#BF7F11]" />
                </div>
                <h4 className="font-semibold text-[#BF7F11]">Estrategia Personalizada</h4>
              </div>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#BF7F11]">•</span>
                  Definición de prioridades y cronograma
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#BF7F11]">•</span>
                  Establecimiento de objetivos específicos
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#BF7F11]">•</span>
                  Asignación de recursos y responsabilidades
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      title: "5. Ejecución Paralela",
      content: (
        <div>
          <p className="mb-6 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
          Ejecutamos en paralelo los servicios contratados según el plan seleccionado, optimizando tiempos y recursos.
          </p>
          <div className="grid gap-4">
            <Card className="bg-[#BF7F11]/5 border-[#BF7F11]/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#BF7F11]/10 rounded-lg">
                    <DollarSign className="h-5 w-5 text-[#BF7F11]" />
                  </div>
                  <h4 className="font-semibold text-[#BF7F11]">Cobranza de Gastos Comunes</h4>
                </div>
                <p className="text-sm text-neutral-700">
                  Gestión eficiente de morosos con procesos automatizados y seguimiento personalizado.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-[#BF7F11]/5 border-[#BF7F11]/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#BF7F11]/10 rounded-lg">
                    <Gavel className="h-5 w-5 text-[#BF7F11]" />
                  </div>
                  <h4 className="font-semibold text-[#BF7F11]">Defensa en Demandas Laborales</h4>
                </div>
                <p className="text-sm text-neutral-700">
                  Representación legal especializada en conflictos laborales ante la Dirección del Trabajo.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-[#BF7F11]/5 border-[#BF7F11]/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#BF7F11]/10 rounded-lg">
                    <BookOpen className="h-5 w-5 text-[#BF7F11]" />
                  </div>
                  <h4 className="font-semibold text-[#BF7F11]">Nuevo Reglamento de Copropiedad</h4>
                </div>
                <p className="text-sm text-neutral-700">
                  Elaboración y actualización del reglamento según la Ley 21.442 y normativa vigente.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip bg-white">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-3xl md:text-4xl mb-4 text-black font-bold max-w-4xl">
          Nuestro <span className="text-[#BF7F11]">Proceso de Trabajo</span>
        </h2>
        <p className="text-neutral-700 text-sm md:text-base max-w-2xl">
          Un enfoque sistemático y profesional para resolver los desafíos legales de tu edificio de manera eficiente y transparente.
        </p>
      </div>
      <Timeline data={data} />
    </div>
  );
}



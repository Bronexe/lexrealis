"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Download, FileText } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { MobileLeadSheet } from "@/components/mobile-lead-sheet"

const formSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  position: z.string().min(2, "El cargo debe tener al menos 2 caracteres"),
  building: z.string().min(2, "El nombre del edificio debe tener al menos 2 caracteres"),
})

type FormData = z.infer<typeof formSchema>

export function LeadBanner() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Simulate download
      const link = document.createElement("a")
      link.href = "/descargas/checklist-condominio.pdf"
      link.download = "checklist-legal-condominio.pdf"
      link.click()

      toast({
        title: "¡Descarga iniciada!",
        description: "Te hemos enviado el checklist a tu email. Revisa tu bandeja de entrada.",
      })

      reset()
      setIsOpen(false)
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al procesar tu solicitud. Inténtalo nuevamente.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-shrink-0">
          <div className="p-3 bg-primary/10 rounded-full">
            <FileText className="h-8 w-8 text-primary" />
          </div>
        </div>

        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl font-semibold mb-2">Checklist Legal Anual para tu Condominio</h3>
          <p className="text-muted-foreground">
            Descarga gratis nuestra guía completa con todos los puntos de cumplimiento legal que debe revisar tu
            condominio cada año.
          </p>
        </div>

        {/* Desktop Dialog */}
        <div className="hidden md:block">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Descargar PDF
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Descarga tu Checklist Legal</DialogTitle>
                <DialogDescription>
                  Completa tus datos para recibir el checklist en tu email y descargarlo inmediatamente.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Label htmlFor="name">Nombre completo</Label>
                  <Input id="name" {...register("name")} placeholder="Tu nombre completo" />
                  {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" {...register("email")} placeholder="tu@email.com" />
                  {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <Label htmlFor="position">Cargo</Label>
                  <Input id="position" {...register("position")} placeholder="Ej: Administrador, Presidente Comité" />
                  {errors.position && <p className="text-sm text-destructive mt-1">{errors.position.message}</p>}
                </div>

                <div>
                  <Label htmlFor="building">Edificio/Condominio</Label>
                  <Input id="building" {...register("building")} placeholder="Nombre del edificio o condominio" />
                  {errors.building && <p className="text-sm text-destructive mt-1">{errors.building.message}</p>}
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Procesando..." : "Descargar Checklist"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Al descargar aceptas recibir comunicaciones de Lex Realis. Puedes darte de baja en cualquier momento.
                </p>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Mobile Sheet */}
        <div className="md:hidden w-full">
          <MobileLeadSheet />
        </div>
      </div>
    </div>
  )
}

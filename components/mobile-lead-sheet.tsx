"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Download, FileText } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const formSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  position: z.string().min(2, "El cargo debe tener al menos 2 caracteres"),
  building: z.string().min(2, "El nombre del edificio debe tener al menos 2 caracteres"),
})

type FormData = z.infer<typeof formSchema>

export function MobileLeadSheet() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)
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
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button size="lg" className="flex items-center gap-2 w-full">
          <Download className="h-4 w-4" />
          Descargar PDF
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[90vh] overflow-y-auto">
        <SheetHeader className="text-left mb-6">
          <SheetTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Descarga tu Checklist Legal
          </SheetTitle>
          <SheetDescription>
            Completa tus datos para recibir el checklist en tu email y descargarlo inmediatamente.
          </SheetDescription>
        </SheetHeader>

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

          <div className="flex flex-col gap-3 pt-4">
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Procesando..." : "Descargar Checklist"}
            </Button>
            <Button type="button" variant="outline" className="w-full bg-transparent" onClick={() => setIsOpen(false)}>
              Cancelar
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center mt-4">
            Al descargar aceptas recibir comunicaciones de Lex Realis. Puedes darte de baja en cualquier momento.
          </p>
        </form>
      </SheetContent>
    </Sheet>
  )
}

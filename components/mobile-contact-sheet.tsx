"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Phone, MessageSquare } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  company: z.string().min(2, "La empresa/edificio debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(8, "El teléfono debe tener al menos 8 dígitos"),
  reason: z.string().min(1, "Selecciona un motivo de consulta"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
  privacy: z.boolean().refine((val) => val === true, "Debes aceptar la política de privacidad"),
})

type ContactFormData = z.infer<typeof contactSchema>

export function MobileContactSheet() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      privacy: false,
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast({
        title: "¡Mensaje enviado exitosamente!",
        description: "Te contactaremos en 1 día hábil. Revisa tu email para confirmación.",
      })

      reset()
      setIsOpen(false)
    } catch (error) {
      toast({
        title: "Error al enviar mensaje",
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
        <Button size="lg" className="flex items-center gap-2 w-full bg-[#BF7F11] hover:bg-[#BF7F11]/90">
          <MessageSquare className="h-4 w-4" />
          Consulta Rápida
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[95vh] overflow-y-auto">
        <SheetHeader className="text-left mb-6">
          <SheetTitle className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-primary" />
            Consulta Gratuita
          </SheetTitle>
          <SheetDescription>Cuéntanos tu situación y te responderemos en máximo 24 horas.</SheetDescription>
        </SheetHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid gap-4 grid-cols-2">
            <div>
              <Label htmlFor="name">Nombre *</Label>
              <Input id="name" {...register("name")} placeholder="Tu nombre" />
              {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <Label htmlFor="company">Empresa *</Label>
              <Input id="company" {...register("company")} placeholder="Tu empresa" />
              {errors.company && <p className="text-xs text-destructive mt-1">{errors.company.message}</p>}
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email *</Label>
            <Input id="email" type="email" {...register("email")} placeholder="tu@email.com" />
            {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <Label htmlFor="phone">Teléfono *</Label>
            <Input id="phone" {...register("phone")} placeholder="+56 9 6618 8788" />
            {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone.message}</p>}
          </div>

          <div>
            <Label htmlFor="reason">Motivo *</Label>
            <Select onValueChange={(value) => setValue("reason", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Selecciona el motivo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cobranza">Cobranza de gastos comunes</SelectItem>
                <SelectItem value="reglamento">Actualización de reglamento</SelectItem>
                <SelectItem value="contratos">Contratos inmobiliarios</SelectItem>
                <SelectItem value="comision">Protección de comisión</SelectItem>
                <SelectItem value="conflictos">Resolución de conflictos</SelectItem>
                <SelectItem value="cumplimiento">Auditoría de cumplimiento</SelectItem>
                <SelectItem value="otro">Otro</SelectItem>
              </SelectContent>
            </Select>
            {errors.reason && <p className="text-xs text-destructive mt-1">{errors.reason.message}</p>}
          </div>

          <div>
            <Label htmlFor="message">Mensaje *</Label>
            <Textarea id="message" {...register("message")} placeholder="Describe tu situación..." rows={3} />
            {errors.message && <p className="text-xs text-destructive mt-1">{errors.message.message}</p>}
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="privacy"
              {...register("privacy")}
              onCheckedChange={(checked) => setValue("privacy", checked as boolean)}
            />
            <Label htmlFor="privacy" className="text-xs leading-4">
              Acepto la política de privacidad y autorizo el tratamiento de mis datos. *
            </Label>
          </div>
          {errors.privacy && <p className="text-xs text-destructive">{errors.privacy.message}</p>}

          <div className="flex flex-col gap-3 pt-4">
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Enviar consulta"}
            </Button>
            <Button type="button" variant="outline" className="w-full bg-transparent" onClick={() => setIsOpen(false)}>
              Cancelar
            </Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  )
}

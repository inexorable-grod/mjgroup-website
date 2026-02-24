import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres').max(100),
  company: z.string().min(2, 'La empresa debe tener al menos 2 caracteres').max(100),
  email: z.string().email('Correo electrónico inválido'),
  phone: z.string().min(7, 'Teléfono inválido').max(20),
  service: z.enum(['infraestructura', 'servicios', 'arriendo'], {
    message: 'Seleccione un servicio',
  }),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres').max(1000),
})

export type ContactFormData = z.infer<typeof contactSchema>

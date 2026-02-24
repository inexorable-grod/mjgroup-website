'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, type ContactFormData } from '@/lib/validators/contact.schema'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'
import { Button } from '@/components/ui/Button'
import { Spinner } from '@/components/ui/Spinner'
import { MapPin, Phone, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      reset()
      setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contacto" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="display text-4xl sm:text-5xl mb-4">
            <span className="gradient-text">CONTACTENOS</span>
          </h2>
          <p className="text-[rgb(var(--muted-foreground))] max-w-2xl mx-auto">
            Solicite una cotización o más información sobre nuestros servicios.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Información de Contacto</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-electric-500/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-electric-500" />
                </div>
                <div>
                  <p className="font-medium">Dirección</p>
                  <p className="text-sm text-[rgb(var(--muted-foreground))]">Cúcuta, Norte de Santander, Colombia</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-electric-500/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-electric-500" />
                </div>
                <div>
                  <p className="font-medium">Teléfono</p>
                  <p className="text-sm text-[rgb(var(--muted-foreground))]">+57 314 8114739</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-electric-500/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-electric-500" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-[rgb(var(--muted-foreground))]">mj.groupcolombia@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Nombre</Label>
                  <Input id="name" placeholder="Su nombre" {...register('name')} className="mt-1" />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <Label htmlFor="company">Empresa</Label>
                  <Input id="company" placeholder="Su empresa" {...register('company')} className="mt-1" />
                  {errors.company && <p className="text-xs text-red-500 mt-1">{errors.company.message}</p>}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="correo@empresa.com" {...register('email')} className="mt-1" />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input id="phone" placeholder="+57 300 000 0000" {...register('phone')} className="mt-1" />
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
                </div>
              </div>
              <div>
                <Label htmlFor="service">Servicio</Label>
                <select
                  id="service"
                  {...register('service')}
                  className="mt-1 flex h-10 w-full rounded-lg border border-[rgb(var(--input))] bg-[rgb(var(--background))] px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-500/50"
                >
                  <option value="">Seleccione un servicio</option>
                  <option value="infraestructura">Infraestructura Eléctrica</option>
                  <option value="servicios">Servicios Especializados</option>
                  <option value="arriendo">Arriendo de Flota</option>
                </select>
                {errors.service && <p className="text-xs text-red-500 mt-1">{errors.service.message}</p>}
              </div>
              <div>
                <Label htmlFor="message">Mensaje</Label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Describa su requerimiento..."
                  {...register('message')}
                  className="mt-1 flex w-full rounded-lg border border-[rgb(var(--input))] bg-[rgb(var(--background))] px-3 py-2 text-sm placeholder:text-[rgb(var(--muted-foreground))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-500/50 resize-none"
                />
                {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
              </div>

              <Button type="submit" disabled={status === 'loading'} className="w-full">
                {status === 'loading' ? (
                  <Spinner size="sm" />
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Enviar Mensaje
                  </>
                )}
              </Button>

              {status === 'success' && (
                <div className="flex items-center gap-2 text-sm text-emerald-500">
                  <CheckCircle className="h-4 w-4" />
                  Mensaje enviado correctamente
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 text-sm text-red-500">
                  <AlertCircle className="h-4 w-4" />
                  Error al enviar el mensaje. Intente nuevamente.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

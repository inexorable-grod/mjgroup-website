import { NextRequest, NextResponse } from 'next/server'
import { contactSchema } from '@/lib/validators/contact.schema'
import { saveContactSubmission } from '@/lib/supabase/queries'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const parsed = contactSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Datos inválidos', details: parsed.error.flatten().fieldErrors },
        { status: 400 },
      )
    }

    const { name, company, email, phone, service, message } = parsed.data

    // Save to Supabase
    await saveContactSubmission({ name, company, email, phone, service, message })

    // If Resend is configured, send email
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)

      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL ?? 'noreply@mjgroupsas.com',
        to: process.env.RESEND_TO_EMAIL ?? 'mj.groupcolombia@gmail.com',
        subject: `Nuevo contacto: ${name} — ${company}`,
        html: `
          <h2>Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Empresa:</strong> ${company}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${phone}</p>
          <p><strong>Servicio:</strong> ${service}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${message}</p>
        `,
      })
    }

    return NextResponse.json({ success: true, message: 'Mensaje enviado correctamente' })
  } catch {
    return NextResponse.json({ error: 'Error al enviar el mensaje' }, { status: 500 })
  }
}

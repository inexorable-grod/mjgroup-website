'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Shield, Award, Lightbulb, HardHat } from 'lucide-react'

const values = [
  { icon: Target, title: 'Misión', description: 'Proveer servicios eléctricos integrales de alta calidad, garantizando la seguridad, eficiencia y satisfacción de nuestros clientes en toda Colombia.' },
  { icon: Eye, title: 'Visión', description: 'Ser la empresa líder en servicios eléctricos y arriendo de flota especializada en Colombia, reconocida por nuestra innovación, confiabilidad y excelencia operativa.' },
  { icon: Shield, title: 'Valores', description: 'Seguridad, calidad, innovación, compromiso con el cliente y responsabilidad social. Cada operación se ejecuta bajo los más altos estándares.' },
]

const pillars = [
  { icon: Award, title: 'Calidad', description: 'Certificaciones ONAC vigentes en todos nuestros equipos' },
  { icon: Lightbulb, title: 'Innovación', description: 'Tecnología de punta en cada proyecto eléctrico' },
  { icon: HardHat, title: 'Seguridad', description: 'Protocolos rigurosos y personal certificado' },
]

export function About() {
  return (
    <section id="nosotros" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="display text-4xl sm:text-5xl mb-4">
            SOBRE <span className="gradient-text">NOSOTROS</span>
          </h2>
          <p className="text-[rgb(var(--muted-foreground))] max-w-2xl mx-auto">
            MJ Group SAS es una empresa colombiana especializada en servicios y construcciones eléctricas con más de 7 años de experiencia y presencia nacional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6 hover:electric-border transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-electric-500/10 flex items-center justify-center mb-4">
                <item.icon className="h-6 w-6 text-electric-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-[rgb(var(--muted-foreground))]">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 rounded-full bg-electric-500/10 flex items-center justify-center mx-auto mb-4">
                <pillar.icon className="h-8 w-8 text-electric-500" />
              </div>
              <h4 className="font-semibold mb-2">{pillar.title}</h4>
              <p className="text-sm text-[rgb(var(--muted-foreground))]">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

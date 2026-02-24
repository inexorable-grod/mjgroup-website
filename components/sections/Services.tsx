'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Network, TreePine, Truck, ChevronRight } from 'lucide-react'

const services = [
  {
    id: 'infraestructura',
    icon: Network,
    title: 'Infraestructura Eléctrica',
    description: 'Construcción y mantenimiento de redes eléctricas de alta, media y baja tensión.',
    items: [
      'Construcción de redes eléctricas (alta, media, baja tensión)',
      'Centros de transformación',
      'Mantenimiento predictivo, preventivo y correctivo',
      'Redes aéreas y subterráneas',
      'Mantenimiento y rehabilitación de alumbrado público',
    ],
  },
  {
    id: 'servicios',
    icon: TreePine,
    title: 'Servicios Especializados',
    description: 'Poda técnica, control de vegetación y cuadrillas especializadas.',
    items: [
      'Poda de árboles en líneas de redes y cono lumínico',
      'Control químico y desmalezamiento en subestaciones',
      'Cuadrillas especializadas (Linieros y Técnicos)',
      'Personal especializado certificado',
      'Atención de PQRs de alumbrado público',
    ],
  },
  {
    id: 'arriendo',
    icon: Truck,
    title: 'Arriendo y Logística de Flota',
    description: 'Alquiler de camiones canasta y equipos especializados con certificación ONAC.',
    items: [
      'Alquiler camión tipo canasta (13m y 16m)',
      'Alquiler camión con brazo hidráulico articulado',
      'Alquiler de equipos especializados',
      'Atención integral y administración de flotas',
      'Certificaciones ONAC vigentes (ISO/IEC 17025:2005)',
    ],
  },
]

export function Services() {
  const [activeTab, setActiveTab] = useState('infraestructura')

  const activeService = services.find((s) => s.id === activeTab)!

  return (
    <section id="servicios" className="section-padding bg-[rgb(var(--muted))]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="display text-4xl sm:text-5xl mb-4">
            NUESTROS <span className="gradient-text">SERVICIOS</span>
          </h2>
          <p className="text-[rgb(var(--muted-foreground))] max-w-2xl mx-auto">
            Soluciones integrales en infraestructura eléctrica, servicios especializados y arriendo de flota.
          </p>
        </motion.div>

        {/* Service tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                activeTab === service.id
                  ? 'bg-electric-500 text-white shadow-lg shadow-electric-500/25'
                  : 'bg-[rgb(var(--card))] text-[rgb(var(--muted-foreground))] hover:text-electric-500 border border-[rgb(var(--border))]'
              }`}
            >
              <service.icon className="h-4 w-4" />
              {service.title}
            </button>
          ))}
        </div>

        {/* Active service detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-8"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="w-14 h-14 rounded-xl bg-electric-500/10 flex items-center justify-center mb-4">
                  <activeService.icon className="h-7 w-7 text-electric-500" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{activeService.title}</h3>
                <p className="text-[rgb(var(--muted-foreground))]">{activeService.description}</p>
              </div>
              <div>
                <ul className="space-y-3">
                  {activeService.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <ChevronRight className="h-5 w-5 text-electric-500 shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

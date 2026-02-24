'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Truck } from 'lucide-react'

const stats = [
  { value: '30+', label: 'Contratos' },
  { value: '9+', label: 'Vehículos' },
  { value: '100%', label: 'Ejecución' },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[rgb(var(--background))]" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(14,165,233,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-power-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-electric-500/20 bg-electric-500/5 text-electric-500 text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-electric-500" />
              </span>
              7+ Años de Experiencia · Certificados ONAC
            </motion.div>

            <h1 className="display text-5xl sm:text-6xl lg:text-7xl mb-6">
              ENERGIZAMOS LA{' '}
              <span className="gradient-text">INFRAESTRUCTURA</span>{' '}
              DE COLOMBIA
            </h1>

            <p className="text-lg text-[rgb(var(--muted-foreground))] mb-8 max-w-xl">
              Servicios y Construcciones Eléctricas — Especialistas en alumbrado público, redes eléctricas de alta tensión y arriendo de flota con certificaciones ONAC.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#servicios"
                className="inline-flex items-center gap-2 h-12 px-8 rounded-lg bg-electric-500 text-white font-medium hover:bg-electric-600 transition-colors shadow-lg shadow-electric-500/25"
              >
                Ver Servicios
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#flota"
                className="inline-flex items-center gap-2 h-12 px-8 rounded-lg border border-electric-500/30 text-electric-400 font-medium hover:bg-electric-500/10 transition-colors"
              >
                <Truck className="h-4 w-4" />
                Nuestra Flota
              </a>
            </div>
          </motion.div>

          {/* Right - Power tower illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-electric-500/5 border border-electric-500/10 flex items-center justify-center animate-float">
                <div className="w-60 h-60 rounded-full bg-electric-500/10 border border-electric-500/20 flex items-center justify-center">
                  <svg width="120" height="160" viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-electric-500">
                    <path d="M60 0L20 60h30L30 160l70-100H70L90 0H60z" fill="currentColor" opacity="0.2" />
                    <path d="M60 10L25 65h28L35 150l60-85H68L85 10H60z" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-xl bg-power-500/10 border border-power-500/20 flex items-center justify-center animate-pulse-slow">
                <span className="text-power-500 text-xl font-bold">⚡</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-lg"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-[rgb(var(--muted-foreground))] mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

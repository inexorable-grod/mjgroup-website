'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import type { DbClient } from '@/lib/supabase/types'

function ClientCard({ client }: { client: DbClient }) {
  return (
    <div className="flex-shrink-0 w-48 mx-4">
      <div className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-4 text-center hover:electric-border transition-all duration-300">
        <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden bg-[rgb(var(--muted))] flex items-center justify-center">
          <Image
            src={client.logo_url}
            alt={client.name}
            width={64}
            height={64}
            className="object-contain"
            unoptimized
          />
        </div>
        <p className="text-sm font-medium truncate">{client.name}</p>
        <p className="text-xs text-[rgb(var(--muted-foreground))] truncate">{client.sector}</p>
      </div>
    </div>
  )
}

interface ClientsProps {
  clients: DbClient[]
}

export function Clients({ clients }: ClientsProps) {
  const doubled = [...clients, ...clients]

  return (
    <section id="clientes" className="section-padding bg-[rgb(var(--muted))]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="display text-4xl sm:text-5xl mb-4">
            NUESTROS <span className="gradient-text">CLIENTES</span>
          </h2>
          <p className="text-[rgb(var(--muted-foreground))] max-w-2xl mx-auto">
            Empresas líderes en el sector eléctrico e infraestructura confían en MJ Group SAS.
          </p>
        </motion.div>
      </div>

      {/* Marquee row 1 */}
      <div className="overflow-hidden mb-4">
        <div className="flex animate-scroll-left" style={{ width: 'max-content' }}>
          {doubled.map((client, i) => (
            <ClientCard key={`row1-${client.id}-${i}`} client={client} />
          ))}
        </div>
      </div>

      {/* Marquee row 2 - reverse */}
      <div className="overflow-hidden">
        <div className="flex animate-scroll-right" style={{ width: 'max-content' }}>
          {[...doubled].reverse().map((client, i) => (
            <ClientCard key={`row2-${client.id}-${i}`} client={client} />
          ))}
        </div>
      </div>
    </section>
  )
}

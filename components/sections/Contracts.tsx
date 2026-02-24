'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { formatDate } from '@/lib/utils'
import { MapPin, Calendar, ChevronDown, ChevronUp } from 'lucide-react'
import type { DbContract, ContractCategory, ContractStats } from '@/lib/supabase/types'

const categoryLabels: Record<ContractCategory, string> = {
  alumbrado: 'Alumbrado',
  poda: 'Podas',
  pqr: 'PQR',
  arriendo: 'Arriendo',
}

const categoryColors: Record<ContractCategory, 'default' | 'success' | 'warning' | 'power'> = {
  alumbrado: 'default',
  poda: 'success',
  pqr: 'warning',
  arriendo: 'power',
}

interface ContractsProps {
  contracts: DbContract[]
  contractStats: ContractStats
}

export function Contracts({ contracts, contractStats }: ContractsProps) {
  const [categoryFilter, setCategoryFilter] = useState<'all' | ContractCategory>('all')
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'completed'>('all')
  const [showAll, setShowAll] = useState(false)

  let filtered = contracts
  if (categoryFilter !== 'all') filtered = filtered.filter((c) => c.category === categoryFilter)
  if (statusFilter !== 'all') filtered = filtered.filter((c) => c.status === statusFilter)

  const displayed = showAll ? filtered : filtered.slice(0, 6)

  return (
    <section id="contratos" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="display text-4xl sm:text-5xl mb-4">
            HISTORIAL DE <span className="gradient-text">CONTRATOS</span>
          </h2>
          <p className="text-[rgb(var(--muted-foreground))] max-w-2xl mx-auto">
            {contractStats.total} contratos ejecutados con {contractStats.active} actualmente en ejecución.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="px-4 py-2 rounded-lg bg-electric-500/10 border border-electric-500/20 text-sm">
            <span className="font-bold text-electric-500">{contractStats.total}</span> Total
          </div>
          <div className="px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-sm">
            <span className="font-bold text-emerald-500">{contractStats.active}</span> Activos
          </div>
          <div className="px-4 py-2 rounded-lg bg-carbon-500/10 border border-carbon-500/20 text-sm">
            <span className="font-bold">{contractStats.completed}</span> Completados
          </div>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {[
            { key: 'all' as const, label: 'Todos' },
            { key: 'alumbrado' as const, label: 'Alumbrado' },
            { key: 'poda' as const, label: 'Podas' },
            { key: 'pqr' as const, label: 'PQR' },
            { key: 'arriendo' as const, label: 'Arriendo' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setCategoryFilter(tab.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                categoryFilter === tab.key
                  ? 'bg-electric-500 text-white'
                  : 'bg-[rgb(var(--card))] text-[rgb(var(--muted-foreground))] border border-[rgb(var(--border))] hover:border-electric-500/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Status filter */}
        <div className="flex justify-center gap-2 mb-8">
          {[
            { key: 'all' as const, label: 'Todos' },
            { key: 'active' as const, label: 'En Ejecución' },
            { key: 'completed' as const, label: 'Completados' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setStatusFilter(tab.key)}
              className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                statusFilter === tab.key
                  ? 'bg-carbon-700 text-white'
                  : 'text-[rgb(var(--muted-foreground))] hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Contract cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayed.map((contract, i) => (
            <motion.div
              key={contract.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <Badge variant={categoryColors[contract.category as ContractCategory]}>
                  {categoryLabels[contract.category as ContractCategory]}
                </Badge>
                {contract.status === 'active' ? (
                  <Badge variant="success">En Ejecución</Badge>
                ) : (
                  <Badge variant="secondary">Completado</Badge>
                )}
              </div>
              <p className="text-sm font-medium mb-2 line-clamp-2">{contract.description}</p>
              <p className="text-xs text-[rgb(var(--muted-foreground))] mb-1">{contract.contractor}</p>
              <div className="flex items-center gap-3 text-xs text-[rgb(var(--muted-foreground))] mt-3">
                <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {contract.location}</span>
                <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {formatDate(contract.start_date)}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length > 6 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-electric-500/30 text-electric-400 text-sm font-medium hover:bg-electric-500/10 transition-colors"
            >
              {showAll ? (
                <>Mostrar menos <ChevronUp className="h-4 w-4" /></>
              ) : (
                <>Ver historial completo ({filtered.length}) <ChevronDown className="h-4 w-4" /></>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

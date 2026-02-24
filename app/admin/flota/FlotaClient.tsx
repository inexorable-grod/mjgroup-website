'use client'

import { useState } from 'react'
import { FleetCard } from '@/components/admin/FleetCard'
import type { DbVehicle, FleetStats } from '@/lib/supabase/types'

interface FlotaClientProps {
  vehicles: DbVehicle[]
  fleetStats: FleetStats
}

export function FlotaClient({ vehicles, fleetStats }: FlotaClientProps) {
  const [filter, setFilter] = useState<'all' | 'active' | 'rented' | 'maintenance'>('all')

  const filtered = filter === 'all' ? vehicles : vehicles.filter((v) => v.status === filter)

  return (
    <div className="space-y-6">
      {/* Stats bar */}
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[rgb(var(--card))] border border-[rgb(var(--border))]">
          <span className="text-sm font-medium">Total:</span>
          <span className="text-lg font-bold">{fleetStats.total}</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="text-sm">{fleetStats.active} Disponibles</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
          <span className="h-2 w-2 rounded-full bg-amber-500" />
          <span className="text-sm">{fleetStats.rented} Arrendados</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-electric-500/10 border border-electric-500/20">
          <span className="text-sm">Utilización: <span className="font-bold text-electric-500">{fleetStats.utilizationRate}%</span></span>
        </div>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap gap-2">
        {[
          { key: 'all' as const, label: 'Todos' },
          { key: 'active' as const, label: 'Disponible' },
          { key: 'rented' as const, label: 'Arrendado' },
          { key: 'maintenance' as const, label: 'Mantenimiento' },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === tab.key
                ? 'bg-electric-500 text-white'
                : 'bg-[rgb(var(--card))] text-[rgb(var(--muted-foreground))] border border-[rgb(var(--border))] hover:border-electric-500/30'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((vehicle) => (
          <FleetCard key={vehicle.plate} vehicle={vehicle} />
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-center py-12 text-[rgb(var(--muted-foreground))]">
            No se encontraron vehículos con este filtro.
          </div>
        )}
      </div>
    </div>
  )
}

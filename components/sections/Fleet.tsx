'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { Modal } from '@/components/ui/Modal'
import { Truck, CheckCircle } from 'lucide-react'
import type { DbVehicle, FleetStats } from '@/lib/supabase/types'

const statusLabels: Record<string, string> = {
  active: 'Disponible',
  rented: 'Arrendado',
  maintenance: 'Mantenimiento',
}

const statusVariant: Record<string, 'success' | 'warning' | 'danger'> = {
  active: 'success',
  rented: 'warning',
  maintenance: 'danger',
}

interface FleetProps {
  vehicles: DbVehicle[]
  fleetStats: FleetStats
}

export function Fleet({ vehicles, fleetStats }: FleetProps) {
  const [filter, setFilter] = useState<'all' | 'active' | 'rented'>('all')
  const [selectedVehicle, setSelectedVehicle] = useState<DbVehicle | null>(null)

  const filtered = filter === 'all' ? vehicles : vehicles.filter((v) => v.status === filter)

  return (
    <section id="flota" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="display text-4xl sm:text-5xl mb-4">
            NUESTRA <span className="gradient-text">FLOTA</span>
          </h2>
          <p className="text-[rgb(var(--muted-foreground))] max-w-2xl mx-auto">
            {fleetStats.total} vehículos especializados con certificaciones ONAC vigentes. Tasa de utilización: {fleetStats.utilizationRate}%.
          </p>
        </motion.div>

        {/* Stats bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-sm">{fleetStats.active} Disponibles</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            <span className="text-sm">{fleetStats.rented} Arrendados</span>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center gap-2 mb-8">
          {[
            { key: 'all' as const, label: 'Todos' },
            { key: 'active' as const, label: 'Disponible' },
            { key: 'rented' as const, label: 'Arrendado' },
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

        {/* Fleet grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((vehicle, i) => (
            <motion.div
              key={vehicle.plate}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setSelectedVehicle(vehicle)}
              className="cursor-pointer rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6 hover:electric-border transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="mono text-lg font-bold text-electric-500">{vehicle.plate}</span>
                <Badge variant={statusVariant[vehicle.status]}>{statusLabels[vehicle.status]}</Badge>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-[rgb(var(--muted-foreground))]">
                  <Truck className="h-4 w-4" />
                  {vehicle.truck_brand} {vehicle.truck_model} ({vehicle.truck_year})
                </div>
                <p>Canasta: {vehicle.basket_brand} {vehicle.basket_model}</p>
                <div className="flex items-center gap-2">
                  <Badge variant="default">{vehicle.basket_work_height_m}m</Badge>
                  <Badge variant="default">{vehicle.basket_voltage_kv}kV</Badge>
                </div>
                <div className="flex gap-3 mt-3 text-xs text-[rgb(var(--muted-foreground))]">
                  <span className="flex items-center gap-1"><CheckCircle className="h-3 w-3 text-emerald-500" /> Dieléctrico</span>
                  <span className="flex items-center gap-1"><CheckCircle className="h-3 w-3 text-emerald-500" /> Izaje</span>
                </div>
                {vehicle.assigned_to && (
                  <p className="text-xs text-power-500 mt-2">→ {vehicle.assigned_to}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vehicle detail modal */}
        {selectedVehicle && (
          <Modal
            open={!!selectedVehicle}
            onOpenChange={() => setSelectedVehicle(null)}
            title={`Vehículo ${selectedVehicle.plate}`}
            className="max-w-2xl"
          >
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2 text-electric-500">Camión</h4>
                  <p>Marca: {selectedVehicle.truck_brand}</p>
                  <p>Modelo: {selectedVehicle.truck_model}</p>
                  <p>Año: {selectedVehicle.truck_year}</p>
                  <p>Combustible: {selectedVehicle.truck_fuel}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-electric-500">Canasta</h4>
                  <p>Marca: {selectedVehicle.basket_brand}</p>
                  <p>Modelo: {selectedVehicle.basket_model}</p>
                  {selectedVehicle.basket_series && <p>Serie: {selectedVehicle.basket_series}</p>}
                  <p>Altura: {selectedVehicle.basket_work_height_m}m</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2 text-electric-500">Especificaciones</h4>
                  <p>Presión: {selectedVehicle.basket_hydraulic_pressure_psi} PSI</p>
                  <p>Voltaje: {selectedVehicle.basket_voltage_kv} kV</p>
                  <p>Estabilizadores: {selectedVehicle.basket_stabilizers}</p>
                  {selectedVehicle.basket_max_load_kg && <p>Carga máx: {selectedVehicle.basket_max_load_kg} kg</p>}
                  <p>Brazo dieléctrico: {selectedVehicle.basket_dielectric_arm ? 'Sí' : 'No'}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-electric-500">Estado</h4>
                  <p>Estado: <Badge variant={statusVariant[selectedVehicle.status]}>{statusLabels[selectedVehicle.status]}</Badge></p>
                  {selectedVehicle.assigned_to && <p className="mt-2">Asignado a: {selectedVehicle.assigned_to}</p>}
                  <div className="mt-2 space-y-1">
                    <p className="flex items-center gap-1"><CheckCircle className="h-3 w-3 text-emerald-500" /> Certificación dieléctrica</p>
                    <p className="flex items-center gap-1"><CheckCircle className="h-3 w-3 text-emerald-500" /> Certificación de izaje</p>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </section>
  )
}

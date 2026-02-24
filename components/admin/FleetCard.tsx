import { Badge } from '@/components/ui/Badge'
import { Truck, CheckCircle } from 'lucide-react'
import type { DbVehicle } from '@/lib/supabase/types'

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

interface FleetCardProps {
  vehicle: DbVehicle
}

export function FleetCard({ vehicle }: FleetCardProps) {
  return (
    <div className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-5 hover:electric-border transition-all duration-300">
      <div className="flex items-center justify-between mb-3">
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
          <Badge variant="default">{vehicle.basket_hydraulic_pressure_psi} PSI</Badge>
        </div>
        <div className="flex gap-3 mt-2 text-xs text-[rgb(var(--muted-foreground))]">
          <span className="flex items-center gap-1">
            <CheckCircle className="h-3 w-3 text-emerald-500" /> Dieléctrico
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle className="h-3 w-3 text-emerald-500" /> Izaje
          </span>
        </div>
        {vehicle.assigned_to && (
          <p className="text-xs text-power-500 mt-2">Asignado: {vehicle.assigned_to}</p>
        )}
      </div>
    </div>
  )
}

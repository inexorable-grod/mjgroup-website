'use client'

import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import type { FleetStats, ContractStats } from '@/lib/supabase/types'

interface FleetPieChartProps {
  fleetStats: FleetStats
}

export function FleetPieChart({ fleetStats }: FleetPieChartProps) {
  const fleetData = [
    { name: 'Disponible', value: fleetStats.active, color: '#10b981' },
    { name: 'Arrendado', value: fleetStats.rented, color: '#f59e0b' },
    { name: 'Mantenimiento', value: fleetStats.maintenance, color: '#ef4444' },
  ]

  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={fleetData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={4}
            dataKey="value"
          >
            {fleetData.map((entry, i) => (
              <Cell key={i} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgb(var(--card))',
              border: '1px solid rgb(var(--border))',
              borderRadius: '8px',
              fontSize: '12px',
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex justify-center gap-4 -mt-4">
        {fleetData.map((item) => (
          <div key={item.name} className="flex items-center gap-1.5 text-xs">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />
            {item.name} ({item.value})
          </div>
        ))}
      </div>
    </div>
  )
}

interface CategoryBarChartProps {
  contractStats: ContractStats
}

export function CategoryBarChart({ contractStats }: CategoryBarChartProps) {
  const categoryData = [
    { name: 'Alumbrado', value: contractStats.byCategory.alumbrado, fill: '#0ea5e9' },
    { name: 'Podas', value: contractStats.byCategory.poda, fill: '#10b981' },
    { name: 'PQR', value: contractStats.byCategory.pqr, fill: '#f59e0b' },
    { name: 'Arriendo', value: contractStats.byCategory.arriendo, fill: '#f97316' },
  ]

  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={categoryData}>
          <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="rgb(var(--muted-foreground))" />
          <YAxis tick={{ fontSize: 12 }} stroke="rgb(var(--muted-foreground))" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgb(var(--card))',
              border: '1px solid rgb(var(--border))',
              borderRadius: '8px',
              fontSize: '12px',
            }}
          />
          <Bar dataKey="value" radius={[4, 4, 0, 0]}>
            {categoryData.map((entry, i) => (
              <Cell key={i} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

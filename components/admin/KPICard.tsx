import { cn } from '@/lib/utils'
import type { LucideIcon } from 'lucide-react'

interface KPICardProps {
  title: string
  value: string | number
  subtitle?: string
  icon: LucideIcon
  trend?: string
  variant?: 'default' | 'success' | 'warning' | 'power'
}

const variantStyles = {
  default: 'bg-electric-500/10 text-electric-500',
  success: 'bg-emerald-500/10 text-emerald-500',
  warning: 'bg-amber-500/10 text-amber-500',
  power: 'bg-power-500/10 text-power-500',
}

export function KPICard({ title, value, subtitle, icon: Icon, trend, variant = 'default' }: KPICardProps) {
  return (
    <div className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-[rgb(var(--muted-foreground))]">{title}</span>
        <div className={cn('h-10 w-10 rounded-lg flex items-center justify-center', variantStyles[variant])}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <div className="text-3xl font-bold">{value}</div>
      {subtitle && <p className="text-sm text-[rgb(var(--muted-foreground))] mt-1">{subtitle}</p>}
      {trend && <p className="text-xs text-emerald-500 mt-2">{trend}</p>}
    </div>
  )
}

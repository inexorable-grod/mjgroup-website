import { Badge } from '@/components/ui/Badge'
import { formatDate } from '@/lib/utils'
import type { DbContract } from '@/lib/supabase/types'

const categoryColors: Record<string, 'default' | 'success' | 'warning' | 'power'> = {
  alumbrado: 'default',
  poda: 'success',
  pqr: 'warning',
  arriendo: 'power',
}

interface ActivityFeedProps {
  contracts: DbContract[]
}

export function ActivityFeed({ contracts }: ActivityFeedProps) {
  const recentContracts = [...contracts]
    .sort((a, b) => new Date(b.start_date).getTime() - new Date(a.start_date).getTime())
    .slice(0, 8)

  return (
    <div className="space-y-3">
      {recentContracts.map((contract) => (
        <div
          key={contract.id}
          className="flex items-start gap-3 p-3 rounded-lg hover:bg-[rgb(var(--muted))] transition-colors"
        >
          <div className="mt-1">
            <div className={`h-2 w-2 rounded-full ${contract.status === 'active' ? 'bg-emerald-500' : 'bg-carbon-500'}`} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{contract.description}</p>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant={categoryColors[contract.category]} className="text-[10px]">
                {contract.category}
              </Badge>
              <span className="text-xs text-[rgb(var(--muted-foreground))]">
                {contract.location} · {formatDate(contract.start_date)}
              </span>
            </div>
          </div>
          {contract.status === 'active' && (
            <Badge variant="success" className="shrink-0">Activo</Badge>
          )}
        </div>
      ))}
    </div>
  )
}

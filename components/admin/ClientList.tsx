'use client'

import Image from 'next/image'
import { Badge } from '@/components/ui/Badge'
import { ExternalLink } from 'lucide-react'
import type { DbClient } from '@/lib/supabase/types'

interface ClientListProps {
  clients: DbClient[]
}

export function ClientList({ clients }: ClientListProps) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {clients.map((client) => (
        <div
          key={client.id}
          className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-5"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-12 w-12 rounded-full overflow-hidden bg-[rgb(var(--muted))] flex items-center justify-center shrink-0">
              <Image
                src={client.logo_url}
                alt={client.name}
                width={48}
                height={48}
                className="object-contain"
                unoptimized
              />
            </div>
            <div>
              <h4 className="font-semibold text-sm">{client.name}</h4>
              <p className="text-xs text-[rgb(var(--muted-foreground))]">{client.sector}</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Badge variant="default">{client.contract_count} contrato{client.contract_count > 1 ? 's' : ''}</Badge>
            {client.website && (
              <a
                href={client.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-electric-500 hover:underline flex items-center gap-1"
              >
                Sitio web <ExternalLink className="h-3 w-3" />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

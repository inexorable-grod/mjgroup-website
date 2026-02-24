'use client'

import { useState, useMemo } from 'react'
import { ContractTable } from '@/components/admin/ContractTable'
import { Card, CardContent } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Badge } from '@/components/ui/Badge'
import { Search, Download } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import type { DbContract, ContractCategory } from '@/lib/supabase/types'

interface ContratosClientProps {
  contracts: DbContract[]
}

export function ContratosClient({ contracts }: ContratosClientProps) {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState<'all' | ContractCategory>('all')
  const [status, setStatus] = useState<'all' | 'active' | 'completed'>('all')
  const [page, setPage] = useState(1)
  const perPage = 10

  const filtered = useMemo(() => {
    let result = contracts
    if (category !== 'all') result = result.filter((c) => c.category === category)
    if (status !== 'all') result = result.filter((c) => c.status === status)
    if (search) {
      const q = search.toLowerCase()
      result = result.filter(
        (c) =>
          c.description.toLowerCase().includes(q) ||
          c.contractor.toLowerCase().includes(q) ||
          c.location.toLowerCase().includes(q),
      )
    }
    return result
  }, [contracts, search, category, status])

  const totalPages = Math.ceil(filtered.length / perPage)
  const paginated = filtered.slice((page - 1) * perPage, page * perPage)

  const exportCSV = () => {
    const headers = 'ID,Categoría,Descripción,Contratante,Ciudad,Departamento,Inicio,Fin,Estado\n'
    const rows = filtered
      .map(
        (c) =>
          `${c.id},${c.category},"${c.description}","${c.contractor}",${c.location},${c.department},${c.start_date},${c.end_date},${c.status}`,
      )
      .join('\n')
    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'contratos_mjgroup.csv'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-6">
      {/* Search and filters */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[rgb(var(--muted-foreground))]" />
          <Input
            placeholder="Buscar por descripción, contratante o ciudad..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1) }}
            className="pl-10"
          />
        </div>
        <Button variant="outline" size="sm" onClick={exportCSV}>
          <Download className="h-4 w-4" />
          Exportar CSV
        </Button>
      </div>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2">
        {[
          { key: 'all' as const, label: 'Todos' },
          { key: 'alumbrado' as const, label: 'Alumbrado' },
          { key: 'poda' as const, label: 'Podas' },
          { key: 'pqr' as const, label: 'PQR' },
          { key: 'arriendo' as const, label: 'Arriendo' },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => { setCategory(tab.key); setPage(1) }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              category === tab.key
                ? 'bg-electric-500 text-white'
                : 'bg-[rgb(var(--card))] text-[rgb(var(--muted-foreground))] border border-[rgb(var(--border))] hover:border-electric-500/30'
            }`}
          >
            {tab.label}
          </button>
        ))}
        <div className="border-l border-[rgb(var(--border))] mx-2" />
        {[
          { key: 'all' as const, label: 'Todos' },
          { key: 'active' as const, label: 'Activos' },
          { key: 'completed' as const, label: 'Completados' },
        ].map((tab) => (
          <button
            key={`status-${tab.key}`}
            onClick={() => { setStatus(tab.key); setPage(1) }}
            className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
              status === tab.key
                ? 'bg-carbon-700 text-white'
                : 'text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--foreground))]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="text-sm text-[rgb(var(--muted-foreground))]">
        {filtered.length} contrato{filtered.length !== 1 ? 's' : ''} encontrado{filtered.length !== 1 ? 's' : ''}
      </p>

      {/* Table */}
      <Card>
        <CardContent className="pt-6">
          <ContractTable data={paginated} />
        </CardContent>
      </Card>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2">
          <Button
            variant="outline"
            size="sm"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            Anterior
          </Button>
          <span className="text-sm text-[rgb(var(--muted-foreground))]">
            Página {page} de {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            Siguiente
          </Button>
        </div>
      )}
    </div>
  )
}

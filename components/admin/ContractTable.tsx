'use client'

import { Badge } from '@/components/ui/Badge'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/Table'
import { formatDate } from '@/lib/utils'
import type { DbContract, ContractCategory } from '@/lib/supabase/types'

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

interface ContractTableProps {
  data: DbContract[]
  limit?: number
}

export function ContractTable({ data, limit }: ContractTableProps) {
  const displayed = limit ? data.slice(0, limit) : data

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Descripción</TableHead>
          <TableHead>Contratante</TableHead>
          <TableHead>Ciudad</TableHead>
          <TableHead>Categoría</TableHead>
          <TableHead>Fecha Fin</TableHead>
          <TableHead>Estado</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {displayed.map((contract) => (
          <TableRow key={contract.id}>
            <TableCell className="mono text-xs font-bold">{contract.id}</TableCell>
            <TableCell className="max-w-[200px] truncate text-sm">{contract.description}</TableCell>
            <TableCell className="text-sm">{contract.contractor}</TableCell>
            <TableCell className="text-sm">{contract.location}</TableCell>
            <TableCell>
              <Badge variant={categoryColors[contract.category as ContractCategory]}>
                {categoryLabels[contract.category as ContractCategory]}
              </Badge>
            </TableCell>
            <TableCell className="text-sm">{formatDate(contract.end_date)}</TableCell>
            <TableCell>
              {contract.status === 'active' ? (
                <Badge variant="success">Activo</Badge>
              ) : (
                <Badge variant="secondary">Completado</Badge>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export const dynamic = 'force-dynamic'

import { FileText, Truck, MapPin, CheckCircle } from 'lucide-react'
import { KPICard } from '@/components/admin/KPICard'
import { ContractTable } from '@/components/admin/ContractTable'
import { ActivityFeed } from '@/components/admin/ActivityFeed'
import { FleetPieChart, CategoryBarChart } from '@/components/admin/ContractChart'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { getContracts, getContractStats, getFleetStats } from '@/lib/supabase/queries'

export default async function DashboardPage() {
  const [contracts, contractStats, fleetStats] = await Promise.all([
    getContracts(),
    getContractStats(),
    getFleetStats(),
  ])

  const activeContracts = contracts.filter((c) => c.status === 'active')
  const uniqueCities = new Set(activeContracts.map((c) => c.location)).size

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Contratos Activos"
          value={contractStats.active}
          subtitle={`de ${contractStats.total} totales`}
          icon={FileText}
          variant="default"
        />
        <KPICard
          title="Flota Arrendada"
          value={`${fleetStats.utilizationRate}%`}
          subtitle={`${fleetStats.active} disponibles`}
          icon={Truck}
          variant="warning"
        />
        <KPICard
          title="Ciudades Cubiertas"
          value={uniqueCities}
          subtitle="con contratos activos"
          icon={MapPin}
          variant="success"
        />
        <KPICard
          title="Completados"
          value={contractStats.completed}
          subtitle="100% tasa de ejecución"
          icon={CheckCircle}
          variant="power"
        />
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Estado de la Flota</CardTitle>
          </CardHeader>
          <CardContent>
            <FleetPieChart fleetStats={fleetStats} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Contratos por Categoría</CardTitle>
          </CardHeader>
          <CardContent>
            <CategoryBarChart contractStats={contractStats} />
          </CardContent>
        </Card>
      </div>

      {/* Activity + Table */}
      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Actividad Reciente</CardTitle>
          </CardHeader>
          <CardContent>
            <ActivityFeed contracts={contracts} />
          </CardContent>
        </Card>
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Contratos Activos</CardTitle>
          </CardHeader>
          <CardContent>
            <ContractTable data={activeContracts} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

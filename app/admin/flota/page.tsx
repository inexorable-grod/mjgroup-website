export const dynamic = 'force-dynamic'

import { getVehicles, getFleetStats } from '@/lib/supabase/queries'
import { FlotaClient } from './FlotaClient'

export default async function FlotaPage() {
  const [vehicles, fleetStats] = await Promise.all([
    getVehicles(),
    getFleetStats(),
  ])

  return <FlotaClient vehicles={vehicles} fleetStats={fleetStats} />
}

export const dynamic = 'force-dynamic'

import { getContracts } from '@/lib/supabase/queries'
import { ContratosClient } from './ContratosClient'

export default async function ContratosPage() {
  const contracts = await getContracts()
  return <ContratosClient contracts={contracts} />
}

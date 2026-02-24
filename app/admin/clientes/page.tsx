export const dynamic = 'force-dynamic'

import { ClientList } from '@/components/admin/ClientList'
import { getClients } from '@/lib/supabase/queries'

export default async function ClientesPage() {
  const clients = await getClients()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-[rgb(var(--muted-foreground))]">
          {clients.length} clientes registrados
        </p>
      </div>
      <ClientList clients={clients} />
    </div>
  )
}

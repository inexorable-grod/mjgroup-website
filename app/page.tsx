export const dynamic = 'force-dynamic'

import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Services } from '@/components/sections/Services'
import { Fleet } from '@/components/sections/Fleet'
import { Clients } from '@/components/sections/Clients'
import { Contracts } from '@/components/sections/Contracts'
import { Contact } from '@/components/sections/Contact'
import { getClients, getVehicles, getFleetStats, getContracts, getContractStats } from '@/lib/supabase/queries'

export default async function HomePage() {
  const [clients, vehicles, fleetStats, contracts, contractStats] = await Promise.all([
    getClients(),
    getVehicles(),
    getFleetStats(),
    getContracts(),
    getContractStats(),
  ])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Fleet vehicles={vehicles} fleetStats={fleetStats} />
        <Clients clients={clients} />
        <Contracts contracts={contracts} contractStats={contractStats} />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

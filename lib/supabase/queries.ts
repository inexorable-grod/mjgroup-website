import { createAdminClient } from './admin'

// ── Clients ──────────────────────────────────────────────────────────────────

export async function getClients() {
  const supabase = createAdminClient()
  const { data, error } = await supabase
    .from('clients')
    .select('*')
    .order('contract_count', { ascending: false })

  if (error) throw error
  return data
}

// ── Vehicles ─────────────────────────────────────────────────────────────────

export async function getVehicles() {
  const supabase = createAdminClient()
  const { data, error } = await supabase
    .from('vehicles')
    .select('*')
    .order('plate')

  if (error) throw error
  return data
}

export async function getFleetStats() {
  const vehicles = await getVehicles()
  const active = vehicles.filter((v) => v.status === 'active').length
  const rented = vehicles.filter((v) => v.status === 'rented').length
  const maintenance = vehicles.filter((v) => v.status === 'maintenance').length
  return {
    total: vehicles.length,
    active,
    rented,
    maintenance,
    utilizationRate: vehicles.length > 0 ? Math.round((rented / vehicles.length) * 100) : 0,
  }
}

// ── Contracts ────────────────────────────────────────────────────────────────

export async function getContracts() {
  const supabase = createAdminClient()
  const { data, error } = await supabase
    .from('contracts')
    .select('*')
    .order('start_date', { ascending: false })

  if (error) throw error
  return data
}

export async function getContractStats() {
  const contracts = await getContracts()
  const active = contracts.filter((c) => c.status === 'active').length
  const completed = contracts.filter((c) => c.status === 'completed').length
  return {
    total: contracts.length,
    active,
    completed,
    byCategory: {
      alumbrado: contracts.filter((c) => c.category === 'alumbrado').length,
      poda: contracts.filter((c) => c.category === 'poda').length,
      pqr: contracts.filter((c) => c.category === 'pqr').length,
      arriendo: contracts.filter((c) => c.category === 'arriendo').length,
    },
  }
}

// ── Contact Submissions ──────────────────────────────────────────────────────

export async function saveContactSubmission(data: {
  name: string
  company: string
  email: string
  phone: string
  service: string
  message: string
}) {
  const supabase = createAdminClient()
  const { error } = await supabase.from('contact_submissions').insert(data)
  if (error) throw error
}

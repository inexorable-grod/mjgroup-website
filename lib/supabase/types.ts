import type { Tables } from '@/lib/database.types'

export type DbClient = Tables<'clients'>
export type DbVehicle = Tables<'vehicles'>
export type DbContract = Tables<'contracts'>
export type DbContactSubmission = Tables<'contact_submissions'>

export type ContractCategory = 'alumbrado' | 'poda' | 'pqr' | 'arriendo'
export type ContractStatus = 'completed' | 'active' | 'upcoming'
export type VehicleStatus = 'active' | 'rented' | 'maintenance'

export interface FleetStats {
  total: number
  active: number
  rented: number
  maintenance: number
  utilizationRate: number
}

export interface ContractStats {
  total: number
  active: number
  completed: number
  byCategory: Record<ContractCategory, number>
}

export interface Vehicle {
  plate: string
  truck: { brand: string; model: string; year: number; fuel: string; color?: string }
  basket: {
    brand: string
    model: string
    series?: string
    maxLoad_kg?: number
    workHeight_m: number
    hydraulicPressure_psi: number
    voltage_kv: number
    stabilizers: number
    dielectricArm: boolean
  }
  certifications: { dielectric: boolean; hoisting: boolean }
  status: 'active' | 'rented' | 'maintenance'
  assignedTo?: string
}

export const fleet: Vehicle[] = [
  {
    plate: 'WDN510',
    status: 'active',
    truck: { brand: 'Volkswagen', model: 'VW 9.160', year: 2018, fuel: 'Diesel' },
    basket: {
      brand: 'Hidro-Grubert',
      model: 'BL-13CA',
      series: '019',
      maxLoad_kg: 240,
      workHeight_m: 13,
      hydraulicPressure_psi: 2683,
      voltage_kv: 46,
      stabilizers: 4,
      dielectricArm: false,
    },
    certifications: { dielectric: true, hoisting: true },
  },
  {
    plate: 'WOM029',
    status: 'rented',
    assignedTo: 'Deltec SA',
    truck: { brand: 'Volkswagen', model: 'Delivery 9.170', year: 2020, fuel: 'Diesel' },
    basket: {
      brand: 'Altec',
      model: 'AT37G-2FS',
      series: '0908DE10056',
      maxLoad_kg: 159,
      workHeight_m: 11.5,
      hydraulicPressure_psi: 2400,
      voltage_kv: 46,
      stabilizers: 4,
      dielectricArm: false,
    },
    certifications: { dielectric: true, hoisting: true },
  },
  {
    plate: 'WOL969',
    status: 'active',
    truck: { brand: 'Volkswagen', model: 'Delivery 9.170', year: 2020, fuel: 'Diesel' },
    basket: {
      brand: 'Altec',
      model: 'AL32',
      series: '1298C00353',
      maxLoad_kg: 136,
      workHeight_m: 9.75,
      hydraulicPressure_psi: 2400,
      voltage_kv: 46,
      stabilizers: 4,
      dielectricArm: false,
    },
    certifications: { dielectric: true, hoisting: true },
  },
  {
    plate: 'WOM310',
    status: 'rented',
    assignedTo: 'Yunex SAS',
    truck: { brand: 'Volkswagen', model: 'Delivery 9.170', year: 2021, fuel: 'Diesel', color: 'Blanco' },
    basket: {
      brand: 'Palfinger',
      model: 'ETA 37 IH',
      workHeight_m: 13,
      hydraulicPressure_psi: 2683,
      voltage_kv: 46,
      stabilizers: 4,
      dielectricArm: true,
    },
    certifications: { dielectric: true, hoisting: true },
  },
  {
    plate: 'WOM127',
    status: 'rented',
    assignedTo: 'American Lighting SAS',
    truck: { brand: 'Volkswagen', model: 'Delivery 9.170', year: 2020, fuel: 'Diesel' },
    basket: {
      brand: 'Hidro-Grubert',
      model: 'BL-13CA',
      series: '019064412-03',
      workHeight_m: 13,
      hydraulicPressure_psi: 2683,
      voltage_kv: 46,
      stabilizers: 4,
      dielectricArm: true,
    },
    certifications: { dielectric: true, hoisting: true },
  },
  {
    plate: 'WOM138',
    status: 'rented',
    assignedTo: 'Dominion Colombia SAS',
    truck: { brand: 'Volkswagen', model: 'Delivery 9.170', year: 2020, fuel: 'Diesel' },
    basket: {
      brand: 'Altec',
      model: 'AT37G-2FS',
      series: '1298C00578',
      workHeight_m: 13,
      hydraulicPressure_psi: 2400,
      voltage_kv: 46,
      stabilizers: 4,
      dielectricArm: true,
    },
    certifications: { dielectric: true, hoisting: true },
  },
  {
    plate: 'GQV410',
    status: 'rented',
    assignedTo: 'Sicte SAS',
    truck: { brand: 'Volkswagen', model: 'Delivery 9.170', year: 2022, fuel: 'Diesel' },
    basket: {
      brand: 'Altec',
      model: 'AT37G-2FS',
      series: '1298C00578',
      workHeight_m: 13,
      hydraulicPressure_psi: 2400,
      voltage_kv: 46,
      stabilizers: 4,
      dielectricArm: true,
    },
    certifications: { dielectric: true, hoisting: true },
  },
  {
    plate: 'LPK910',
    status: 'active',
    truck: { brand: 'Volkswagen', model: 'Delivery 9.170', year: 2023, fuel: 'Diesel' },
    basket: {
      brand: 'Palfinger',
      model: 'ETA 37 IH',
      workHeight_m: 13,
      hydraulicPressure_psi: 2683,
      voltage_kv: 46,
      stabilizers: 4,
      dielectricArm: true,
    },
    certifications: { dielectric: true, hoisting: true },
  },
  {
    plate: 'WDP224',
    status: 'active',
    truck: { brand: 'Chevrolet', model: 'NQR', year: 2025, fuel: 'Diesel' },
    basket: {
      brand: 'Tehiba',
      model: 'TL-13CA',
      series: '13TC-256',
      maxLoad_kg: 200,
      workHeight_m: 13,
      hydraulicPressure_psi: 2700,
      voltage_kv: 46,
      stabilizers: 4,
      dielectricArm: true,
    },
    certifications: { dielectric: true, hoisting: true },
  },
]

export const fleetStats = {
  total: fleet.length,
  active: fleet.filter((v) => v.status === 'active').length,
  rented: fleet.filter((v) => v.status === 'rented').length,
  maintenance: fleet.filter((v) => v.status === 'maintenance').length,
  utilizationRate: Math.round(
    (fleet.filter((v) => v.status === 'rented').length / fleet.length) * 100,
  ),
}

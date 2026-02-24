export type ContractCategory = 'alumbrado' | 'poda' | 'pqr' | 'arriendo'
export type ContractStatus = 'completed' | 'active' | 'upcoming'

export interface Contract {
  id: string
  category: ContractCategory
  status: ContractStatus
  description: string
  location: string
  department: string
  contractor: string
  startDate: string
  endDate: string
  executionPct: number | 'active'
}

export const contracts: Contract[] = [
  { id: 'A01', category: 'alumbrado', status: 'completed', description: 'Instalación y/o Montaje del Alumbrado Público en Cúcuta', location: 'Cúcuta', department: 'Norte de Santander', contractor: 'Consorcio Alumbrado Público San José de Cúcuta', startDate: '2018-11-15', endDate: '2019-11-27', executionPct: 100 },
  { id: 'A02', category: 'alumbrado', status: 'completed', description: 'Cambio de Luminarias sodio a LED en zonas residenciales', location: 'Facatativá', department: 'Cundinamarca', contractor: 'American Lighting SAS', startDate: '2019-07-05', endDate: '2019-11-22', executionPct: 100 },
  { id: 'A03', category: 'alumbrado', status: 'completed', description: 'Expansión Alumbrado Público Av. 01 - Batallon - Anillo Vial', location: 'Cúcuta', department: 'Norte de Santander', contractor: 'Consorcio Alumbrado Público San José de Cúcuta', startDate: '2019-10-28', endDate: '2020-01-09', executionPct: 100 },
  { id: 'A04', category: 'alumbrado', status: 'completed', description: 'Instalación Alumbrado Público Cúcuta — Expansiones', location: 'Cúcuta', department: 'Norte de Santander', contractor: 'Consorcio Alumbrado Público San José de Cúcuta', startDate: '2019-11-17', endDate: '2021-09-10', executionPct: 100 },
  { id: 'A05', category: 'alumbrado', status: 'completed', description: 'Obra eléctrica Autopista Internacional San Antonio — Villa del Rosario', location: 'Villa del Rosario', department: 'Norte de Santander', contractor: 'American Lighting SAS', startDate: '2021-07-08', endDate: '2021-08-24', executionPct: 100 },
  { id: 'A06', category: 'alumbrado', status: 'completed', description: 'Modernización Alumbrado Público Villa del Rosario', location: 'Villa del Rosario', department: 'Norte de Santander', contractor: 'American Lighting SAS', startDate: '2021-09-01', endDate: '2021-10-30', executionPct: 100 },
  { id: 'A07', category: 'alumbrado', status: 'completed', description: 'Instalación Alumbrado Público Neiva', location: 'Neiva', department: 'Huila', contractor: 'American Lighting SAS', startDate: '2021-09-27', endDate: '2022-01-24', executionPct: 100 },
  { id: 'A08', category: 'alumbrado', status: 'completed', description: 'Instalación Alumbrado Público Ocaña', location: 'Ocaña', department: 'Norte de Santander', contractor: 'AGM Desarrollos SAS', startDate: '2022-10-21', endDate: '2023-04-21', executionPct: 100 },
  { id: 'A09', category: 'alumbrado', status: 'completed', description: 'Construcción y remodelación redes distribución Bolívar Sur', location: 'Magangué', department: 'Bolívar', contractor: 'Unión Redes Eléctricas de la Costa', startDate: '2023-09-01', endDate: '2024-03-01', executionPct: 100 },
  { id: 'A10', category: 'alumbrado', status: 'completed', description: 'Alumbrado Público Zona 2 Villa del Rosario', location: 'Villa del Rosario', department: 'Norte de Santander', contractor: 'American Lighting SAS', startDate: '2025-02-23', endDate: '2025-06-23', executionPct: 100 },
  { id: 'A11', category: 'alumbrado', status: 'active', description: 'Alumbrado Público — Expansiones Pereira', location: 'Pereira', department: 'Risaralda', contractor: 'Unión Temporal Ilumina Pereira', startDate: '2025-11-17', endDate: '2026-04-30', executionPct: 'active' },
  { id: 'A12', category: 'alumbrado', status: 'active', description: 'Instalación Alumbrado Público Cúcuta 2026', location: 'Cúcuta', department: 'Norte de Santander', contractor: 'Consorcio Alumbrado Público San José de Cúcuta', startDate: '2026-01-13', endDate: '2026-05-19', executionPct: 'active' },
  { id: 'P01', category: 'poda', status: 'completed', description: 'Poda Cono Lumínico Alumbrado Público Cúcuta', location: 'Cúcuta', department: 'Norte de Santander', contractor: 'Consorcio Alumbrado Público San José de Cúcuta', startDate: '2019-07-01', endDate: '2019-10-31', executionPct: 100 },
  { id: 'P02', category: 'poda', status: 'completed', description: 'Poda Cono Lumínico Alumbrado Público Cúcuta', location: 'Cúcuta', department: 'Norte de Santander', contractor: 'Consorcio Alumbrado Público San José de Cúcuta', startDate: '2020-10-15', endDate: '2021-01-15', executionPct: 100 },
  { id: 'P03', category: 'poda', status: 'completed', description: 'Poda Cono Lumínico Alumbrado Público Cúcuta', location: 'Cúcuta', department: 'Norte de Santander', contractor: 'Consorcio Alumbrado Público San José de Cúcuta', startDate: '2025-04-01', endDate: '2025-07-31', executionPct: 100 },
  { id: 'P04', category: 'poda', status: 'completed', description: 'Poda Cono Lumínico Alumbrado Público Cúcuta', location: 'Cúcuta', department: 'Norte de Santander', contractor: 'Consorcio Alumbrado Público San José de Cúcuta', startDate: '2025-09-17', endDate: '2025-11-29', executionPct: 100 },
  { id: 'Q01', category: 'pqr', status: 'completed', description: 'Servicio cuadrillas camión canasta 13m — Cúcuta', location: 'Cúcuta', department: 'Norte de Santander', contractor: 'Consorcio Alumbrado Público San José de Cúcuta', startDate: '2019-08-13', endDate: '2019-09-12', executionPct: 100 },
  { id: 'Q02', category: 'pqr', status: 'active', description: 'Suministro cuadrilla mantenimiento PQRs — Pereira', location: 'Pereira', department: 'Risaralda', contractor: 'Unión Temporal Ilumina Pereira', startDate: '2025-12-01', endDate: '2026-12-31', executionPct: 'active' },
  { id: 'R01', category: 'arriendo', status: 'completed', description: 'Alquiler flota 20 camiones canasta 13/16m', location: 'Bogotá D.C.', department: 'Cundinamarca', contractor: 'Cobra Instalaciones y Servicios SAS', startDate: '2019-06-27', endDate: '2022-06-27', executionPct: 100 },
  { id: 'R02', category: 'arriendo', status: 'completed', description: 'Alquiler camión canasta aislada — Proyecto FENOCO', location: 'Bucaramanga', department: 'Santander', contractor: '3Net Comunicaciones SAS', startDate: '2020-03-23', endDate: '2020-04-24', executionPct: 100 },
  { id: 'R03', category: 'arriendo', status: 'completed', description: 'Alquiler camión canasta 13m — Tibú', location: 'Tibú', department: 'Norte de Santander', contractor: 'Transporte Integral Nor Oriente SAS Zomac', startDate: '2020-05-23', endDate: '2021-02-05', executionPct: 100 },
  { id: 'R04', category: 'arriendo', status: 'completed', description: 'Alquiler camión canasta 13m — Semaforización Bogotá', location: 'Bogotá D.C.', department: 'Cundinamarca', contractor: 'Yunex SAS', startDate: '2022-08-05', endDate: '2023-04-20', executionPct: 100 },
  { id: 'R05', category: 'arriendo', status: 'completed', description: 'Alquiler camión canasta 13m y 18m', location: 'Bogotá D.C.', department: 'Cundinamarca', contractor: 'Micol SA', startDate: '2022-07-13', endDate: '2023-03-16', executionPct: 100 },
  { id: 'R06', category: 'arriendo', status: 'completed', description: 'Alquiler camión canasta 13m y 18m — Deltec', location: 'Bogotá D.C.', department: 'Cundinamarca', contractor: 'Deltec SA', startDate: '2024-01-01', endDate: '2025-12-31', executionPct: 100 },
  { id: 'R07', category: 'arriendo', status: 'active', description: 'Arrendamiento 4 grúas — Semaforización Bogotá Lote 2', location: 'Bogotá D.C.', department: 'Cundinamarca', contractor: 'EME Ingeniería S.A. BIC', startDate: '2024-03-06', endDate: '2026-05-24', executionPct: 'active' },
  { id: 'R08', category: 'arriendo', status: 'completed', description: 'Alquiler camión canasta 13m — Barranquilla', location: 'Barranquilla', department: 'Atlántico', contractor: 'Deltec SA', startDate: '2025-01-01', endDate: '2025-12-31', executionPct: 100 },
  { id: 'R09', category: 'arriendo', status: 'active', description: 'Alquiler camión canasta 13m — Santa Marta', location: 'Santa Marta', department: 'Magdalena', contractor: 'Dominion Colombia SAS', startDate: '2025-01-01', endDate: '2026-05-30', executionPct: 'active' },
  { id: 'R10', category: 'arriendo', status: 'completed', description: 'Alquiler camión canasta 13m — Barranquilla', location: 'Barranquilla', department: 'Atlántico', contractor: 'Inmel Ingeniería SAS', startDate: '2025-01-01', endDate: '2025-12-31', executionPct: 100 },
  { id: 'R11', category: 'arriendo', status: 'active', description: 'Alquiler camión canasta 13m — Semaforización Bogotá DC', location: 'Bogotá D.C.', department: 'Cundinamarca', contractor: 'Yunex SAS', startDate: '2023-05-04', endDate: '2026-03-31', executionPct: 'active' },
  { id: 'R12', category: 'arriendo', status: 'completed', description: 'Alquiler camión canasta 13m — Semaforización Medellín', location: 'Medellín', department: 'Antioquia', contractor: 'Yunex SAS', startDate: '2025-03-01', endDate: '2025-12-31', executionPct: 100 },
  { id: 'R13', category: 'arriendo', status: 'active', description: 'Alquiler camión canasta 13m y 16m — Bogotá', location: 'Bogotá D.C.', department: 'Cundinamarca', contractor: 'Sicte SAS', startDate: '2025-11-03', endDate: '2028-01-31', executionPct: 'active' },
]

export const contractStats = {
  total: contracts.length,
  active: contracts.filter((c) => c.status === 'active').length,
  completed: contracts.filter((c) => c.status === 'completed').length,
  byCategory: {
    alumbrado: contracts.filter((c) => c.category === 'alumbrado').length,
    poda: contracts.filter((c) => c.category === 'poda').length,
    pqr: contracts.filter((c) => c.category === 'pqr').length,
    arriendo: contracts.filter((c) => c.category === 'arriendo').length,
  },
}

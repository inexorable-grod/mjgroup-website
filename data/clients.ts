export interface Client {
  id: string
  name: string
  sector: string
  logoUrl: string
  website?: string
  contractCount: number
}

export const clients: Client[] = [
  { id: 'cobra', name: 'Cobra Grupo', sector: 'Infraestructura eléctrica', logoUrl: 'https://logo.clearbit.com/cobrainstalaciones.es', website: 'https://www.cobragrupo.com', contractCount: 1 },
  { id: 'cam-engie', name: 'CAM · ENGIE', sector: 'Energía renovable', logoUrl: 'https://logo.clearbit.com/engie.com', website: 'https://www.engie.com.co', contractCount: 1 },
  { id: 'deltec', name: 'Deltec S.A.', sector: 'Ingeniería eléctrica', logoUrl: 'https://ui-avatars.com/api/?name=Deltec+SA&background=003580&color=fff&size=128', website: 'https://www.deltec.com.co', contractCount: 3 },
  { id: 'agm', name: 'AGM Desarrollos', sector: 'Construcción eléctrica', logoUrl: 'https://ui-avatars.com/api/?name=AGM&background=1a3a6e&color=fff&size=128', contractCount: 1 },
  { id: 'american-lighting', name: 'American Lighting', sector: 'Alumbrado público', logoUrl: 'https://ui-avatars.com/api/?name=AL&background=1565C0&color=fff&size=128', website: 'https://www.americanlighting.com.co', contractCount: 5 },
  { id: 'cens', name: 'CENS · Grupo EPM', sector: 'Distribución eléctrica', logoUrl: 'https://logo.clearbit.com/epm.com.co', website: 'https://www.epm.com.co', contractCount: 1 },
  { id: 'sjc', name: 'SJC Alumbrado Público', sector: 'Alumbrado público', logoUrl: 'https://ui-avatars.com/api/?name=SJC&background=1565C0&color=fff&size=128', contractCount: 4 },
  { id: 'dominion', name: 'Dominion', sector: 'Servicios energéticos', logoUrl: 'https://logo.clearbit.com/dominion.es', website: 'https://www.dominion.es', contractCount: 1 },
  { id: 'inmel', name: 'Inmel Ingeniería', sector: 'Ingeniería eléctrica', logoUrl: 'https://ui-avatars.com/api/?name=Inmel&background=CC0000&color=fff&size=128', contractCount: 1 },
  { id: 'yunex', name: 'Yunex Traffic', sector: 'Sistemas de tráfico', logoUrl: 'https://ui-avatars.com/api/?name=Yunex&background=00246B&color=fff&size=128', website: 'https://www.yunextraffic.com', contractCount: 3 },
  { id: 'ecopetrol', name: 'Ecopetrol', sector: 'Petróleo y gas', logoUrl: 'https://logo.clearbit.com/ecopetrol.com.co', website: 'https://www.ecopetrol.com.co', contractCount: 1 },
]

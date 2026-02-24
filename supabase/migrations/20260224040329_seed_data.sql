-- ============================================================================
-- MJ Group SAS — Seed Data (from Phase 1 static arrays)
-- ============================================================================

-- CLIENTS (11)
INSERT INTO clients (id, name, sector, logo_url, website, contract_count) VALUES
  ('cobra', 'Cobra Grupo', 'Infraestructura eléctrica', 'https://logo.clearbit.com/cobrainstalaciones.es', 'https://www.cobragrupo.com', 1),
  ('cam-engie', 'CAM · ENGIE', 'Energía renovable', 'https://logo.clearbit.com/engie.com', 'https://www.engie.com.co', 1),
  ('deltec', 'Deltec S.A.', 'Ingeniería eléctrica', 'https://ui-avatars.com/api/?name=Deltec+SA&background=003580&color=fff&size=128', 'https://www.deltec.com.co', 3),
  ('agm', 'AGM Desarrollos', 'Construcción eléctrica', 'https://ui-avatars.com/api/?name=AGM&background=1a3a6e&color=fff&size=128', NULL, 1),
  ('american-lighting', 'American Lighting', 'Alumbrado público', 'https://ui-avatars.com/api/?name=AL&background=1565C0&color=fff&size=128', 'https://www.americanlighting.com.co', 5),
  ('cens', 'CENS · Grupo EPM', 'Distribución eléctrica', 'https://logo.clearbit.com/epm.com.co', 'https://www.epm.com.co', 1),
  ('sjc', 'SJC Alumbrado Público', 'Alumbrado público', 'https://ui-avatars.com/api/?name=SJC&background=1565C0&color=fff&size=128', NULL, 4),
  ('dominion', 'Dominion', 'Servicios energéticos', 'https://logo.clearbit.com/dominion.es', 'https://www.dominion.es', 1),
  ('inmel', 'Inmel Ingeniería', 'Ingeniería eléctrica', 'https://ui-avatars.com/api/?name=Inmel&background=CC0000&color=fff&size=128', NULL, 1),
  ('yunex', 'Yunex Traffic', 'Sistemas de tráfico', 'https://ui-avatars.com/api/?name=Yunex&background=00246B&color=fff&size=128', 'https://www.yunextraffic.com', 3),
  ('ecopetrol', 'Ecopetrol', 'Petróleo y gas', 'https://logo.clearbit.com/ecopetrol.com.co', 'https://www.ecopetrol.com.co', 1);

-- VEHICLES (9)
INSERT INTO vehicles (plate, status, assigned_to, truck_brand, truck_model, truck_year, truck_fuel, truck_color, basket_brand, basket_model, basket_series, basket_max_load_kg, basket_work_height_m, basket_hydraulic_pressure_psi, basket_voltage_kv, basket_stabilizers, basket_dielectric_arm, cert_dielectric, cert_hoisting) VALUES
  ('WDN510', 'active', NULL, 'Volkswagen', 'VW 9.160', 2018, 'Diesel', NULL, 'Hidro-Grubert', 'BL-13CA', '019', 240, 13, 2683, 46, 4, false, true, true),
  ('WOM029', 'rented', 'Deltec SA', 'Volkswagen', 'Delivery 9.170', 2020, 'Diesel', NULL, 'Altec', 'AT37G-2FS', '0908DE10056', 159, 11.5, 2400, 46, 4, false, true, true),
  ('WOL969', 'active', NULL, 'Volkswagen', 'Delivery 9.170', 2020, 'Diesel', NULL, 'Altec', 'AL32', '1298C00353', 136, 9.75, 2400, 46, 4, false, true, true),
  ('WOM310', 'rented', 'Yunex SAS', 'Volkswagen', 'Delivery 9.170', 2021, 'Diesel', 'Blanco', 'Palfinger', 'ETA 37 IH', NULL, NULL, 13, 2683, 46, 4, true, true, true),
  ('WOM127', 'rented', 'American Lighting SAS', 'Volkswagen', 'Delivery 9.170', 2020, 'Diesel', NULL, 'Hidro-Grubert', 'BL-13CA', '019064412-03', NULL, 13, 2683, 46, 4, true, true, true),
  ('WOM138', 'rented', 'Dominion Colombia SAS', 'Volkswagen', 'Delivery 9.170', 2020, 'Diesel', NULL, 'Altec', 'AT37G-2FS', '1298C00578', NULL, 13, 2400, 46, 4, true, true, true),
  ('GQV410', 'rented', 'Sicte SAS', 'Volkswagen', 'Delivery 9.170', 2022, 'Diesel', NULL, 'Altec', 'AT37G-2FS', '1298C00578', NULL, 13, 2400, 46, 4, true, true, true),
  ('LPK910', 'active', NULL, 'Volkswagen', 'Delivery 9.170', 2023, 'Diesel', NULL, 'Palfinger', 'ETA 37 IH', NULL, NULL, 13, 2683, 46, 4, true, true, true),
  ('WDP224', 'active', NULL, 'Chevrolet', 'NQR', 2025, 'Diesel', NULL, 'Tehiba', 'TL-13CA', '13TC-256', 200, 13, 2700, 46, 4, true, true, true);

-- CONTRACTS (49)
INSERT INTO contracts (id, category, status, description, location, department, contractor, start_date, end_date, execution_pct) VALUES
  ('A01', 'alumbrado', 'completed', 'Instalación y/o Montaje del Alumbrado Público en Cúcuta', 'Cúcuta', 'Norte de Santander', 'Consorcio Alumbrado Público San José de Cúcuta', '2018-11-15', '2019-11-27', 100),
  ('A02', 'alumbrado', 'completed', 'Cambio de Luminarias sodio a LED en zonas residenciales', 'Facatativá', 'Cundinamarca', 'American Lighting SAS', '2019-07-05', '2019-11-22', 100),
  ('A03', 'alumbrado', 'completed', 'Expansión Alumbrado Público Av. 01 - Batallon - Anillo Vial', 'Cúcuta', 'Norte de Santander', 'Consorcio Alumbrado Público San José de Cúcuta', '2019-10-28', '2020-01-09', 100),
  ('A04', 'alumbrado', 'completed', 'Instalación Alumbrado Público Cúcuta — Expansiones', 'Cúcuta', 'Norte de Santander', 'Consorcio Alumbrado Público San José de Cúcuta', '2019-11-17', '2021-09-10', 100),
  ('A05', 'alumbrado', 'completed', 'Obra eléctrica Autopista Internacional San Antonio — Villa del Rosario', 'Villa del Rosario', 'Norte de Santander', 'American Lighting SAS', '2021-07-08', '2021-08-24', 100),
  ('A06', 'alumbrado', 'completed', 'Modernización Alumbrado Público Villa del Rosario', 'Villa del Rosario', 'Norte de Santander', 'American Lighting SAS', '2021-09-01', '2021-10-30', 100),
  ('A07', 'alumbrado', 'completed', 'Instalación Alumbrado Público Neiva', 'Neiva', 'Huila', 'American Lighting SAS', '2021-09-27', '2022-01-24', 100),
  ('A08', 'alumbrado', 'completed', 'Instalación Alumbrado Público Ocaña', 'Ocaña', 'Norte de Santander', 'AGM Desarrollos SAS', '2022-10-21', '2023-04-21', 100),
  ('A09', 'alumbrado', 'completed', 'Construcción y remodelación redes distribución Bolívar Sur', 'Magangué', 'Bolívar', 'Unión Redes Eléctricas de la Costa', '2023-09-01', '2024-03-01', 100),
  ('A10', 'alumbrado', 'completed', 'Alumbrado Público Zona 2 Villa del Rosario', 'Villa del Rosario', 'Norte de Santander', 'American Lighting SAS', '2025-02-23', '2025-06-23', 100),
  ('A11', 'alumbrado', 'active', 'Alumbrado Público — Expansiones Pereira', 'Pereira', 'Risaralda', 'Unión Temporal Ilumina Pereira', '2025-11-17', '2026-04-30', NULL),
  ('A12', 'alumbrado', 'active', 'Instalación Alumbrado Público Cúcuta 2026', 'Cúcuta', 'Norte de Santander', 'Consorcio Alumbrado Público San José de Cúcuta', '2026-01-13', '2026-05-19', NULL),
  ('P01', 'poda', 'completed', 'Poda Cono Lumínico Alumbrado Público Cúcuta', 'Cúcuta', 'Norte de Santander', 'Consorcio Alumbrado Público San José de Cúcuta', '2019-07-01', '2019-10-31', 100),
  ('P02', 'poda', 'completed', 'Poda Cono Lumínico Alumbrado Público Cúcuta', 'Cúcuta', 'Norte de Santander', 'Consorcio Alumbrado Público San José de Cúcuta', '2020-10-15', '2021-01-15', 100),
  ('P03', 'poda', 'completed', 'Poda Cono Lumínico Alumbrado Público Cúcuta', 'Cúcuta', 'Norte de Santander', 'Consorcio Alumbrado Público San José de Cúcuta', '2025-04-01', '2025-07-31', 100),
  ('P04', 'poda', 'completed', 'Poda Cono Lumínico Alumbrado Público Cúcuta', 'Cúcuta', 'Norte de Santander', 'Consorcio Alumbrado Público San José de Cúcuta', '2025-09-17', '2025-11-29', 100),
  ('Q01', 'pqr', 'completed', 'Servicio cuadrillas camión canasta 13m — Cúcuta', 'Cúcuta', 'Norte de Santander', 'Consorcio Alumbrado Público San José de Cúcuta', '2019-08-13', '2019-09-12', 100),
  ('Q02', 'pqr', 'active', 'Suministro cuadrilla mantenimiento PQRs — Pereira', 'Pereira', 'Risaralda', 'Unión Temporal Ilumina Pereira', '2025-12-01', '2026-12-31', NULL),
  ('R01', 'arriendo', 'completed', 'Alquiler flota 20 camiones canasta 13/16m', 'Bogotá D.C.', 'Cundinamarca', 'Cobra Instalaciones y Servicios SAS', '2019-06-27', '2022-06-27', 100),
  ('R02', 'arriendo', 'completed', 'Alquiler camión canasta aislada — Proyecto FENOCO', 'Bucaramanga', 'Santander', '3Net Comunicaciones SAS', '2020-03-23', '2020-04-24', 100),
  ('R03', 'arriendo', 'completed', 'Alquiler camión canasta 13m — Tibú', 'Tibú', 'Norte de Santander', 'Transporte Integral Nor Oriente SAS Zomac', '2020-05-23', '2021-02-05', 100),
  ('R04', 'arriendo', 'completed', 'Alquiler camión canasta 13m — Semaforización Bogotá', 'Bogotá D.C.', 'Cundinamarca', 'Yunex SAS', '2022-08-05', '2023-04-20', 100),
  ('R05', 'arriendo', 'completed', 'Alquiler camión canasta 13m y 18m', 'Bogotá D.C.', 'Cundinamarca', 'Micol SA', '2022-07-13', '2023-03-16', 100),
  ('R06', 'arriendo', 'completed', 'Alquiler camión canasta 13m y 18m — Deltec', 'Bogotá D.C.', 'Cundinamarca', 'Deltec SA', '2024-01-01', '2025-12-31', 100),
  ('R07', 'arriendo', 'active', 'Arrendamiento 4 grúas — Semaforización Bogotá Lote 2', 'Bogotá D.C.', 'Cundinamarca', 'EME Ingeniería S.A. BIC', '2024-03-06', '2026-05-24', NULL),
  ('R08', 'arriendo', 'completed', 'Alquiler camión canasta 13m — Barranquilla', 'Barranquilla', 'Atlántico', 'Deltec SA', '2025-01-01', '2025-12-31', 100),
  ('R09', 'arriendo', 'active', 'Alquiler camión canasta 13m — Santa Marta', 'Santa Marta', 'Magdalena', 'Dominion Colombia SAS', '2025-01-01', '2026-05-30', NULL),
  ('R10', 'arriendo', 'completed', 'Alquiler camión canasta 13m — Barranquilla', 'Barranquilla', 'Atlántico', 'Inmel Ingeniería SAS', '2025-01-01', '2025-12-31', 100),
  ('R11', 'arriendo', 'active', 'Alquiler camión canasta 13m — Semaforización Bogotá DC', 'Bogotá D.C.', 'Cundinamarca', 'Yunex SAS', '2023-05-04', '2026-03-31', NULL),
  ('R12', 'arriendo', 'completed', 'Alquiler camión canasta 13m — Semaforización Medellín', 'Medellín', 'Antioquia', 'Yunex SAS', '2025-03-01', '2025-12-31', 100),
  ('R13', 'arriendo', 'active', 'Alquiler camión canasta 13m y 16m — Bogotá', 'Bogotá D.C.', 'Cundinamarca', 'Sicte SAS', '2025-11-03', '2028-01-31', NULL);

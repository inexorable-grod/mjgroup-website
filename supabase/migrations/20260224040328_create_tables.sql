-- ============================================================================
-- MJ Group SAS — Phase 2: Core Tables
-- ============================================================================

-- 1. CLIENTS
CREATE TABLE clients (
  id text PRIMARY KEY,
  name text NOT NULL,
  sector text NOT NULL,
  logo_url text NOT NULL,
  website text,
  contract_count int4 NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE clients ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access" ON clients
  FOR SELECT USING (true);

CREATE POLICY "Service role full access" ON clients
  FOR ALL USING (auth.role() = 'service_role');

-- 2. VEHICLES
CREATE TABLE vehicles (
  plate text PRIMARY KEY,
  status text NOT NULL CHECK (status IN ('active', 'rented', 'maintenance')),
  assigned_to text,
  truck_brand text NOT NULL,
  truck_model text NOT NULL,
  truck_year int4 NOT NULL,
  truck_fuel text NOT NULL,
  truck_color text,
  basket_brand text NOT NULL,
  basket_model text NOT NULL,
  basket_series text,
  basket_max_load_kg int4,
  basket_work_height_m numeric NOT NULL,
  basket_hydraulic_pressure_psi int4 NOT NULL,
  basket_voltage_kv int4 NOT NULL,
  basket_stabilizers int4 NOT NULL,
  basket_dielectric_arm boolean NOT NULL DEFAULT false,
  cert_dielectric boolean NOT NULL DEFAULT false,
  cert_hoisting boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE vehicles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access" ON vehicles
  FOR SELECT USING (true);

CREATE POLICY "Service role full access" ON vehicles
  FOR ALL USING (auth.role() = 'service_role');

-- 3. CONTRACTS
CREATE TABLE contracts (
  id text PRIMARY KEY,
  category text NOT NULL CHECK (category IN ('alumbrado', 'poda', 'pqr', 'arriendo')),
  status text NOT NULL CHECK (status IN ('completed', 'active', 'upcoming')),
  description text NOT NULL,
  location text NOT NULL,
  department text NOT NULL,
  contractor text NOT NULL,
  start_date date NOT NULL,
  end_date date NOT NULL,
  execution_pct int4,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contracts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access" ON contracts
  FOR SELECT USING (true);

CREATE POLICY "Service role full access" ON contracts
  FOR ALL USING (auth.role() = 'service_role');

-- 4. CONTACT SUBMISSIONS
CREATE TABLE contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service text NOT NULL CHECK (service IN ('infraestructura', 'servicios', 'arriendo')),
  message text NOT NULL,
  read boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anon can insert" ON contact_submissions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Service role full access" ON contact_submissions
  FOR ALL USING (auth.role() = 'service_role');

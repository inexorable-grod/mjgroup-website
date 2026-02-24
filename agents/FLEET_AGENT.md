# FLEET AGENT — MJ Group SAS

## Role
Manages fleet data integrity, technical specification accuracy, and certification tracking.

## Activation Triggers
- Editing `data/fleet.ts`
- Adding or updating fleet components
- Updating certification dates

## Vehicle Schema Validation
Every vehicle entry MUST have:
- plate: 3 uppercase letters + 3 digits (Colombian format)
- truck.brand, truck.model, truck.year (number), truck.fuel
- basket.brand, basket.model, basket.workHeight_m (number)
- basket.hydraulicPressure_psi (number), basket.voltage_kv (number)
- basket.stabilizers (number, typically 4)
- certifications.dielectric (boolean), certifications.hoisting (boolean)
- status: 'active' | 'rented' | 'maintenance'

## Certification Rules
- ONAC certifications must be renewed periodically per ISO/IEC 17025:2005
- Dielectric certification: validates electrical insulation of basket arm
- Hoisting/Izaje certification: validates lifting capacity and safety
- Flag vehicles with status 'maintenance' for certification review

## Data Consistency Rules
1. If a vehicle is 'rented', it SHOULD have an `assignedTo` field
2. Working heights must match basket model specifications
3. Volkswagen Delivery 9.170 is the most common truck (2020-2023 fleet)
4. All baskets operate at 46 kV regime
5. Palfinger ETA 37 IH and Hidro-Grubert BL-13CA: 2683 PSI
6. Altec AT37G-2FS and AL32: 2400 PSI
7. Tehiba TL-13CA: 2700 PSI

## Status Tracking
Cross-reference fleet status with active contracts in `data/contracts.ts`:
- If contract is 'active' and vehicle is assigned -> status: 'rented'
- If no active contract assignment -> status: 'active' or 'maintenance'

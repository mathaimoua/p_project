## Create Product Table
-- Create products table with manual ID
CREATE TABLE products (
    id BIGINT PRIMARY KEY,
    product_name TEXT NOT NULL,
    category TEXT NOT NULL,
    subcategory TEXT NOT NULL,
    unit_cost NUMERIC(10,2) NOT NULL,
    sale_price NUMERIC(10,2) NOT NULL,
    quantity_on_hand INT NOT NULL,
    reorder_threshold INT NOT NULL,
    last_restocked_date DATE NOT NULL,
    unit_of_measure TEXT NOT NULL,
    sku TEXT NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT TRUE
);

-- Seed 100 rows with randomized IDs between 1000-100000
INSERT INTO products (id, product_name, category, subcategory, unit_cost, sale_price, quantity_on_hand, reorder_threshold, last_restocked_date, unit_of_measure, sku, is_active) VALUES

-- DENTAL: Anesthetics (10)
(4823, 'LidoMax Dental Cartridge 2%', 'Dental', 'Anesthetics', 8.50, 18.99, 320, 100, '2025-12-01', 'box of 50', 'DEN-ANE-001', TRUE),
(17291, 'CaineShield Articaine 4%', 'Dental', 'Anesthetics', 9.25, 20.50, 275, 100, '2025-11-15', 'box of 50', 'DEN-ANE-002', TRUE),
(33847, 'NovaCaine Mepivacaine 3%', 'Dental', 'Anesthetics', 7.80, 17.25, 410, 150, '2026-01-10', 'box of 50', 'DEN-ANE-003', TRUE),
(52164, 'PrimoBlock Prilocaine 4%', 'Dental', 'Anesthetics', 8.90, 19.75, 190, 100, '2025-10-20', 'box of 50', 'DEN-ANE-004', TRUE),
(61738, 'BupiCaine Long-Acting 0.5%', 'Dental', 'Anesthetics', 11.40, 24.99, 145, 75, '2025-12-18', 'box of 50', 'DEN-ANE-005', TRUE),
(78425, 'EpiBlock Vasoconstrictor Blend', 'Dental', 'Anesthetics', 10.20, 22.50, 88, 75, '2025-09-30', 'box of 50', 'DEN-ANE-006', TRUE),
(89312, 'TopCaine Topical Gel 20%', 'Dental', 'Anesthetics', 5.60, 12.99, 500, 200, '2026-02-01', 'pack of 12', 'DEN-ANE-007', TRUE),
(94651, 'FreezeSeal Topical Spray', 'Dental', 'Anesthetics', 6.75, 14.50, 230, 100, '2025-11-05', 'each', 'DEN-ANE-008', TRUE),
(12983, 'DentoBlock Buffered Lidocaine', 'Dental', 'Anesthetics', 12.30, 26.75, 160, 75, '2026-01-22', 'box of 50', 'DEN-ANE-009', TRUE),
(27416, 'ArticShield Plain Cartridge', 'Dental', 'Anesthetics', 8.10, 17.99, 305, 100, '2025-12-10', 'box of 50', 'DEN-ANE-010', TRUE),

-- DENTAL: Restorative (10)
(38594, 'CompoBond Universal Composite A1', 'Dental', 'Restorative', 42.00, 89.99, 95, 30, '2025-11-20', 'pack of 4', 'DEN-RES-001', TRUE),
(45872, 'CompoBond Universal Composite A2', 'Dental', 'Restorative', 42.00, 89.99, 112, 30, '2025-11-20', 'pack of 4', 'DEN-RES-002', TRUE),
(53219, 'CompoBond Universal Composite A3', 'Dental', 'Restorative', 42.00, 89.99, 78, 30, '2025-12-05', 'pack of 4', 'DEN-RES-003', TRUE),
(67843, 'GlassCore GIC Restorative Powder', 'Dental', 'Restorative', 28.50, 62.00, 140, 50, '2026-01-15', 'each', 'DEN-RES-004', TRUE),
(71256, 'AmalCore Amalgam Capsules', 'Dental', 'Restorative', 35.00, 74.50, 200, 75, '2025-10-10', 'box of 50', 'DEN-RES-005', TRUE),
(82947, 'BondShield Universal Adhesive', 'Dental', 'Restorative', 55.00, 115.00, 65, 25, '2025-12-22', 'each', 'DEN-RES-006', TRUE),
(91384, 'FlowLine Flowable Composite', 'Dental', 'Restorative', 38.00, 80.00, 88, 30, '2026-02-10', 'pack of 4', 'DEN-RES-007', TRUE),
(16527, 'IonoCem RMGIC Liner', 'Dental', 'Restorative', 24.00, 52.00, 175, 60, '2025-11-01', 'each', 'DEN-RES-008', TRUE),
(29183, 'TempoSeal Temporary Cement', 'Dental', 'Restorative', 18.75, 40.00, 210, 75, '2026-01-08', 'pack of 12', 'DEN-RES-009', TRUE),
(43618, 'PolyBond Polycarboxylate Cement', 'Dental', 'Restorative', 22.00, 47.50, 130, 50, '2025-09-15', 'each', 'DEN-RES-010', TRUE),

-- DENTAL: Surgical (8)
(57293, 'OralCut Surgical Scalpel #15', 'Dental', 'Surgical', 14.00, 29.99, 300, 100, '2026-01-18', 'box of 10', 'DEN-SUR-001', TRUE),
(63841, 'ExtraPull Forceps Upper Molar', 'Dental', 'Surgical', 68.00, 145.00, 42, 15, '2025-10-05', 'each', 'DEN-SUR-002', TRUE),
(74529, 'ExtraPull Forceps Lower Bicuspid', 'Dental', 'Surgical', 65.00, 138.00, 38, 15, '2025-10-05', 'each', 'DEN-SUR-003', TRUE),
(85163, 'PerioLift Periosteal Elevator', 'Dental', 'Surgical', 45.00, 96.00, 55, 20, '2025-11-12', 'each', 'DEN-SUR-004', TRUE),
(93472, 'BoneGraft OsseoMatrix Particulate', 'Dental', 'Surgical', 120.00, 255.00, 30, 15, '2026-02-05', 'vial of 1', 'DEN-SUR-005', TRUE),
(18364, 'SutureMax Resorbable 4-0', 'Dental', 'Surgical', 22.50, 48.00, 180, 60, '2025-12-15', 'box of 12', 'DEN-SUR-006', TRUE),
(31847, 'SutureMax Non-Resorbable 3-0', 'Dental', 'Surgical', 20.00, 43.00, 155, 60, '2025-12-15', 'box of 12', 'DEN-SUR-007', TRUE),
(46293, 'MembroPatch Collagen Membrane', 'Dental', 'Surgical', 95.00, 200.00, 25, 10, '2026-01-30', 'each', 'DEN-SUR-008', TRUE),

-- DENTAL: Imaging (6)
(58471, 'ClearShot Dental X-Ray Film Size 2', 'Dental', 'Imaging', 32.00, 68.00, 220, 75, '2025-11-28', 'box of 150', 'DEN-IMG-001', TRUE),
(69382, 'SensorShield PSP Phosphor Plate Size 1', 'Dental', 'Imaging', 85.00, 179.00, 48, 20, '2025-10-18', 'each', 'DEN-IMG-002', TRUE),
(77914, 'SensorShield PSP Phosphor Plate Size 2', 'Dental', 'Imaging', 88.00, 185.00, 52, 20, '2025-10-18', 'each', 'DEN-IMG-003', TRUE),
(86253, 'LeadGuard Thyroid Collar', 'Dental', 'Imaging', 28.00, 59.00, 75, 25, '2025-09-22', 'each', 'DEN-IMG-004', TRUE),
(92741, 'LeadGuard Patient Apron', 'Dental', 'Imaging', 55.00, 115.00, 40, 15, '2025-09-22', 'each', 'DEN-IMG-005', TRUE),
(14836, 'PositionPro XCP Film Holder Kit', 'Dental', 'Imaging', 42.00, 89.00, 60, 20, '2026-01-05', 'each', 'DEN-IMG-006', TRUE),

-- DENTAL: Infection Control (6)
(23519, 'SafeGuard Nitrile Gloves Small', 'Dental', 'Infection Control', 7.20, 15.99, 600, 200, '2026-02-12', 'box of 100', 'DEN-INF-001', TRUE),
(37284, 'SafeGuard Nitrile Gloves Medium', 'Dental', 'Infection Control', 7.20, 15.99, 850, 200, '2026-02-12', 'box of 100', 'DEN-INF-002', TRUE),
(48163, 'SafeGuard Nitrile Gloves Large', 'Dental', 'Infection Control', 7.20, 15.99, 720, 200, '2026-02-12', 'box of 100', 'DEN-INF-003', TRUE),
(59427, 'MaskPro Level 3 Surgical Mask', 'Dental', 'Infection Control', 9.50, 20.00, 1200, 400, '2026-01-25', 'box of 50', 'DEN-INF-004', TRUE),
(68291, 'SterilePak Self-Sealing Pouches 3.5x10', 'Dental', 'Infection Control', 14.00, 29.99, 500, 150, '2025-12-20', 'box of 200', 'DEN-INF-005', TRUE),
(79318, 'DisinfectaShield Surface Wipes', 'Dental', 'Infection Control', 11.25, 24.00, 380, 120, '2026-02-08', 'pack of 160', 'DEN-INF-006', TRUE),

-- DENTAL: Orthodontics (5)
(87645, 'AlignBand Orthodontic Molar Band Sz 14', 'Dental', 'Orthodontics', 18.00, 38.50, 90, 30, '2025-11-10', 'pack of 10', 'DEN-ORT-001', TRUE),
(95231, 'AlignBand Orthodontic Molar Band Sz 16', 'Dental', 'Orthodontics', 18.00, 38.50, 75, 30, '2025-11-10', 'pack of 10', 'DEN-ORT-002', TRUE),
(11847, 'BracketPro Ceramic Bracket Kit', 'Dental', 'Orthodontics', 95.00, 199.00, 35, 15, '2026-01-12', 'pack of 20', 'DEN-ORT-003', TRUE),
(24693, 'WireForm NiTi Archwire .014 Upper', 'Dental', 'Orthodontics', 22.00, 47.00, 120, 40, '2025-10-28', 'pack of 10', 'DEN-ORT-004', TRUE),
(35872, 'OrthoLink Bonding Adhesive', 'Dental', 'Orthodontics', 38.00, 80.00, 65, 25, '2026-02-15', 'each', 'DEN-ORT-005', TRUE),

-- VETERINARY: Anesthetics (8)
(47193, 'VetoCaine Lidocaine 2% Injectable', 'Veterinary', 'Anesthetics', 12.50, 27.00, 200, 75, '2025-12-08', 'vial of 1', 'VET-ANE-001', TRUE),
(56284, 'KetaVet Ketamine 100mg/mL', 'Veterinary', 'Anesthetics', 28.00, 59.99, 110, 40, '2025-11-18', 'vial of 1', 'VET-ANE-002', TRUE),
(64937, 'MedaVet Medetomidine 1mg/mL', 'Veterinary', 'Anesthetics', 35.00, 74.00, 85, 30, '2026-01-20', 'vial of 1', 'VET-ANE-003', TRUE),
(73582, 'PropoVet Propofol 10mg/mL', 'Veterinary', 'Anesthetics', 42.00, 88.00, 70, 25, '2025-12-28', 'vial of 1', 'VET-ANE-004', TRUE),
(81264, 'IsoFlo Isoflurane Inhalant', 'Veterinary', 'Anesthetics', 65.00, 138.00, 55, 20, '2026-02-03', 'each', 'VET-ANE-005', TRUE),
(90437, 'AtipaVet Atipamezole Reversal', 'Veterinary', 'Anesthetics', 30.00, 64.00, 90, 35, '2025-10-15', 'vial of 1', 'VET-ANE-006', TRUE),
(19283, 'TorbuVet Butorphanol 10mg/mL', 'Veterinary', 'Anesthetics', 24.00, 51.00, 130, 50, '2025-11-25', 'vial of 1', 'VET-ANE-007', TRUE),
(28641, 'DexaVet Dexmedetomidine 0.5mg/mL', 'Veterinary', 'Anesthetics', 38.00, 80.00, 75, 30, '2026-01-14', 'vial of 1', 'VET-ANE-008', TRUE),

-- VETERINARY: Surgical (8)
(39175, 'VetBlade Surgical Scalpel #10', 'Veterinary', 'Surgical', 16.00, 34.00, 250, 80, '2026-01-28', 'box of 10', 'VET-SUR-001', TRUE),
(47826, 'TissueTie Absorbable Suture 2-0', 'Veterinary', 'Surgical', 18.50, 39.50, 180, 60, '2025-12-12', 'box of 12', 'VET-SUR-002', TRUE),
(55394, 'TissueTie Absorbable Suture 3-0', 'Veterinary', 'Surgical', 18.50, 39.50, 165, 60, '2025-12-12', 'box of 12', 'VET-SUR-003', TRUE),
(63817, 'StapleVet Skin Stapler 35W', 'Veterinary', 'Surgical', 22.00, 47.00, 120, 40, '2026-02-18', 'each', 'VET-SUR-004', TRUE),
(72493, 'RetractoPro Gelpi Retractor Small', 'Veterinary', 'Surgical', 55.00, 116.00, 38, 15, '2025-10-22', 'each', 'VET-SUR-005', TRUE),
(81627, 'RetractoPro Gelpi Retractor Large', 'Veterinary', 'Surgical', 62.00, 130.00, 30, 15, '2025-10-22', 'each', 'VET-SUR-006', TRUE),
(90284, 'HemoClamp Kelly Forceps 5.5in', 'Veterinary', 'Surgical', 38.00, 80.00, 65, 25, '2025-11-08', 'each', 'VET-SUR-007', TRUE),
(13748, 'LapSponge Laparotomy Pad 4x4', 'Veterinary', 'Surgical', 8.00, 17.50, 400, 120, '2026-01-30', 'pack of 10', 'VET-SUR-008', TRUE),

-- VETERINARY: Diagnostics (8)
(22391, 'HemaVet CBC Analyzer Reagent', 'Veterinary', 'Diagnostics', 75.00, 158.00, 45, 20, '2025-12-18', 'each', 'VET-DIA-001', TRUE),
(34826, 'ChemScreen Biochemistry Panel Strips', 'Veterinary', 'Diagnostics', 48.00, 102.00, 80, 30, '2026-01-08', 'box of 25', 'VET-DIA-002', TRUE),
(41573, 'ParaTest Fecal Float Solution', 'Veterinary', 'Diagnostics', 14.00, 30.00, 160, 50, '2025-11-22', 'each', 'VET-DIA-003', TRUE),
(53948, 'UriCheck Dipstick Urinalysis', 'Veterinary', 'Diagnostics', 22.00, 47.00, 110, 40, '2026-02-10', 'box of 100', 'VET-DIA-004', TRUE),
(62817, 'FIV-FeLV Rapid Test Kit', 'Veterinary', 'Diagnostics', 35.00, 74.00, 90, 35, '2025-12-05', 'box of 10', 'VET-DIA-005', TRUE),
(71394, 'HeartwormSnap 4Dx Test', 'Veterinary', 'Diagnostics', 40.00, 85.00, 75, 30, '2026-01-18', 'box of 10', 'VET-DIA-006', TRUE),
(83261, 'GlucoPet Blood Glucose Strips', 'Veterinary', 'Diagnostics', 18.00, 38.50, 200, 70, '2025-10-30', 'box of 50', 'VET-DIA-007', TRUE),
(92748, 'CytoPrep Cytology Collection Kit', 'Veterinary', 'Diagnostics', 28.00, 59.00, 55, 20, '2025-12-28', 'pack of 12', 'VET-DIA-008', TRUE),

-- VETERINARY: Vaccines (7)
(15384, 'CanineShield DA2PP Vaccine', 'Veterinary', 'Vaccines', 8.50, 18.99, 350, 120, '2026-02-20', 'vial of 1', 'VET-VAC-001', TRUE),
(26749, 'CanineShield Bordetella Intranasal', 'Veterinary', 'Vaccines', 9.00, 19.50, 280, 100, '2026-02-20', 'vial of 1', 'VET-VAC-002', TRUE),
(37419, 'CanineShield Rabies 1-Year', 'Veterinary', 'Vaccines', 6.50, 14.99, 420, 150, '2026-01-15', 'vial of 1', 'VET-VAC-003', TRUE),
(48263, 'FelineShield FVRCP Vaccine', 'Veterinary', 'Vaccines', 7.80, 17.25, 310, 110, '2026-01-15', 'vial of 1', 'VET-VAC-004', TRUE),
(57941, 'FelineShield Rabies 3-Year', 'Veterinary', 'Vaccines', 8.20, 18.00, 260, 100, '2026-02-05', 'vial of 1', 'VET-VAC-005', TRUE),
(69583, 'EquineShield West Nile Vaccine', 'Veterinary', 'Vaccines', 18.00, 38.50, 140, 50, '2025-11-30', 'vial of 1', 'VET-VAC-006', TRUE),
(78154, 'EquineShield EWT Combination', 'Veterinary', 'Vaccines', 20.00, 43.00, 115, 45, '2025-11-30', 'vial of 1', 'VET-VAC-007', TRUE),

-- VETERINARY: Wound Care (6)
(86739, 'VetWrap Self-Adherent Bandage 2in', 'Veterinary', 'Wound Care', 4.50, 9.99, 500, 150, '2026-02-15', 'each', 'VET-WND-001', TRUE),
(94317, 'VetWrap Self-Adherent Bandage 4in', 'Veterinary', 'Wound Care', 5.50, 11.99, 420, 150, '2026-02-15', 'each', 'VET-WND-002', TRUE),
(17293, 'SilverCoat Antimicrobial Wound Gel', 'Veterinary', 'Wound Care', 18.00, 38.00, 180, 60, '2025-12-10', 'each', 'VET-WND-003', TRUE),
(26841, 'FoamShield Non-Adherent Dressing 4x4', 'Veterinary', 'Wound Care', 12.00, 25.99, 300, 100, '2026-01-22', 'box of 10', 'VET-WND-004', TRUE),
(35627, 'SteriFlush Sterile Saline Wash', 'Veterinary', 'Wound Care', 6.00, 13.00, 240, 80, '2025-11-14', 'each', 'VET-WND-005', TRUE),
(44193, 'SkinSeal Tissue Adhesive 0.5mL', 'Veterinary', 'Wound Care', 24.00, 51.00, 120, 40, '2026-02-01', 'pack of 6', 'VET-WND-006', TRUE),

-- VETERINARY: Pharmacy (7)
(52876, 'AmoxiVet Amoxicillin 250mg Tabs', 'Veterinary', 'Pharmacy', 14.00, 30.00, 400, 120, '2026-01-10', 'box of 100', 'VET-PHA-001', TRUE),
(61439, 'MetroVet Metronidazole 500mg Tabs', 'Veterinary', 'Pharmacy', 16.00, 34.00, 320, 100, '2025-12-20', 'box of 100', 'VET-PHA-002', TRUE),
(73826, 'EnroVet Enrofloxacin 68mg Tabs', 'Veterinary', 'Pharmacy', 28.00, 59.00, 250, 80, '2026-01-28', 'box of 100', 'VET-PHA-003', TRUE),
(82514, 'CarproVet Carprofen 75mg Chewable', 'Veterinary', 'Pharmacy', 32.00, 68.00, 210, 70, '2025-11-05', 'box of 60', 'VET-PHA-004', TRUE),
(91273, 'FurosVet Furosemide 40mg Tabs', 'Veterinary', 'Pharmacy', 10.00, 22.00, 350, 100, '2026-02-10', 'box of 100', 'VET-PHA-005', TRUE),
(16849, 'PredniVet Prednisolone 5mg Tabs', 'Veterinary', 'Pharmacy', 12.00, 26.00, 300, 100, '2025-12-15', 'box of 100', 'VET-PHA-006', TRUE),
(25637, 'CephalVet Cephalexin 500mg Caps', 'Veterinary', 'Pharmacy', 18.00, 38.50, 275, 90, '2026-01-18', 'box of 100', 'VET-PHA-007', TRUE);

## Create Customers Table
-- Create customers table
CREATE TABLE customers (
    id BIGINT PRIMARY KEY,
    practice_name TEXT NOT NULL,
    contact_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    city TEXT NOT NULL,
    state TEXT NOT NULL,
    practice_type TEXT NOT NULL,
    created_at DATE NOT NULL
);

-- Seed 10 customers (5 Dental, 5 Veterinary)
INSERT INTO customers (id, practice_name, contact_name, email, phone, city, state, practice_type, created_at) VALUES

-- Dental Practices
(10482, 'Lakeside Family Dentistry', 'Dr. Sandra Kowalski', 'sandra.kowalski@lakesidedental.com', '612-555-0182', 'Minneapolis', 'MN', 'Dental', '2021-03-15'),
(23917, 'Elmwood Dental Group', 'Dr. James Patel', 'james.patel@elmwooddental.com', '651-555-0247', 'Saint Paul', 'MN', 'Dental', '2020-07-22'),
(35624, 'Riverfront Orthodontics', 'Dr. Michelle Tran', 'michelle.tran@riverfrontortho.com', '414-555-0391', 'Milwaukee', 'WI', 'Dental', '2022-01-10'),
(47839, 'Prairie Smile Center', 'Dr. Robert Engel', 'robert.engel@prairiesmile.com', '515-555-0164', 'Des Moines', 'IA', 'Dental', '2021-09-05'),
(59243, 'Northgate Dental Associates', 'Dr. Karen Sundberg', 'karen.sundberg@northgatedental.com', '763-555-0428', 'Brooklyn Park', 'MN', 'Dental', '2020-11-18'),

-- Veterinary Clinics
(61837, 'Paws & Claws Animal Hospital', 'Dr. Eric Hoffman', 'eric.hoffman@pawsandclaws.com', '612-555-0573', 'Bloomington', 'MN', 'Veterinary', '2021-05-30'),
(74291, 'Midwest Veterinary Clinic', 'Dr. Lisa Nguyen', 'lisa.nguyen@midwestvets.com', '608-555-0316', 'Madison', 'WI', 'Veterinary', '2020-08-14'),
(83654, 'Heartland Animal Care', 'Dr. Thomas Greer', 'thomas.greer@heartlandanimal.com', '319-555-0247', 'Cedar Rapids', 'IA', 'Veterinary', '2022-03-22'),
(92417, 'Twin Cities Pet Hospital', 'Dr. Angela Moua', 'angela.moua@tcpethospital.com', '952-555-0189', 'Eden Prairie', 'MN', 'Veterinary', '2021-12-01'),
(18563, 'Lakewood Equine & Pet Clinic', 'Dr. Brian Carlson', 'brian.carlson@lakewoodequine.com', '701-555-0362', 'Fargo', 'ND', 'Veterinary', '2020-06-09');

## Create Orders Table
-- Create orders table
CREATE TABLE orders (
    id BIGINT PRIMARY KEY,
    customer_id BIGINT NOT NULL REFERENCES customers(id),
    product_id BIGINT NOT NULL REFERENCES products(id),
    quantity INT NOT NULL,
    unit_price NUMERIC(10,2) NOT NULL,
    order_date DATE NOT NULL,
    status TEXT NOT NULL,
    notes TEXT
);

-- Seed 75 orders
-- Dental customers: 10482, 23917, 35624, 47839, 59243
-- Dental product IDs:
--   Anesthetics: 4823,17291,33847,52164,61738,78425,89312,94651,12983,27416
--   Restorative: 38594,45872,53219,67843,71256,82947,91384,16527,29183,43618
--   Surgical: 57293,63841,74529,85163,93472,18364,31847,46293
--   Imaging: 58471,69382,77914,86253,92741,14836
--   Infection Control: 23519,37284,48163,59427,68291,79318
--   Orthodontics: 87645,95231,11847,24693,35872

-- Veterinary customers: 61837, 74291, 83654, 92417, 18563
-- Veterinary product IDs:
--   Anesthetics: 47193,56284,64937,73582,81264,90437,19283,28641
--   Surgical: 39175,47826,55394,63817,72493,81627,90284,13748
--   Diagnostics: 22391,34826,41573,53948,62817,71394,83261,92748
--   Vaccines: 15384,26749,37419,48263,57941,69583,78154
--   Wound Care: 86739,94317,17293,26841,35627,44193
--   Pharmacy: 52876,61439,73826,82514,91273,16849,25637

INSERT INTO orders (id, customer_id, product_id, quantity, unit_price, order_date, status, notes) VALUES

-- Lakeside Family Dentistry (10482) - Dental
(100182, 10482, 4823, 5, 18.99, '2025-08-12', 'Delivered', NULL),
(100293, 10482, 17291, 3, 20.50, '2025-09-04', 'Delivered', NULL),
(100374, 10482, 38594, 2, 89.99, '2025-10-18', 'Delivered', 'Rush order'),
(100451, 10482, 23519, 10, 15.99, '2025-11-02', 'Delivered', NULL),
(100562, 10482, 82947, 4, 115.00, '2025-11-28', 'Shipped', NULL),
(100673, 10482, 89312, 6, 12.99, '2025-12-10', 'Shipped', NULL),
(100784, 10482, 57293, 3, 29.99, '2026-01-05', 'Pending', NULL),
(100895, 10482, 58471, 2, 68.00, '2026-01-22', 'Pending', 'Backorder confirmed'),

-- Elmwood Dental Group (23917) - Dental
(101182, 23917, 33847, 8, 17.25, '2025-07-15', 'Delivered', NULL),
(101293, 23917, 52164, 4, 19.75, '2025-08-20', 'Delivered', NULL),
(101374, 23917, 71256, 5, 74.50, '2025-09-11', 'Delivered', 'Monthly restock'),
(101451, 23917, 45872, 3, 89.99, '2025-10-05', 'Delivered', NULL),
(101562, 23917, 37284, 8, 15.99, '2025-10-28', 'Delivered', NULL),
(101673, 23917, 63841, 1, 145.00, '2025-11-14', 'Shipped', NULL),
(101784, 23917, 86253, 2, 59.00, '2025-12-03', 'Shipped', NULL),
(101895, 23917, 29183, 4, 40.00, '2026-01-18', 'Pending', NULL),

-- Riverfront Orthodontics (35624) - Dental
(102182, 35624, 87645, 6, 38.50, '2025-08-08', 'Delivered', NULL),
(102293, 35624, 95231, 6, 38.50, '2025-08-08', 'Delivered', NULL),
(102374, 35624, 11847, 2, 199.00, '2025-09-22', 'Delivered', 'New patient brackets'),
(102451, 35624, 24693, 4, 47.00, '2025-10-14', 'Delivered', NULL),
(102562, 35624, 35872, 3, 80.00, '2025-11-05', 'Delivered', NULL),
(102673, 35624, 61738, 4, 24.99, '2025-11-20', 'Shipped', NULL),
(102784, 35624, 48163, 5, 15.99, '2025-12-08', 'Shipped', NULL),
(102895, 35624, 92741, 1, 115.00, '2026-01-12', 'Pending', NULL),

-- Prairie Smile Center (47839) - Dental
(103182, 47839, 27416, 6, 17.99, '2025-07-22', 'Delivered', NULL),
(103293, 47839, 12983, 3, 26.75, '2025-08-15', 'Delivered', NULL),
(103374, 47839, 53219, 2, 89.99, '2025-09-30', 'Delivered', NULL),
(103451, 47839, 67843, 4, 62.00, '2025-10-22', 'Delivered', 'Quarterly order'),
(103562, 47839, 79318, 6, 24.00, '2025-11-10', 'Delivered', NULL),
(103673, 47839, 85163, 1, 96.00, '2025-12-01', 'Shipped', NULL),
(103784, 47839, 93472, 2, 255.00, '2025-12-20', 'Shipped', 'Surgical supplies'),
(103895, 47839, 14836, 2, 89.00, '2026-01-28', 'Pending', NULL),

-- Northgate Dental Associates (59243) - Dental
(104182, 59243, 78425, 5, 22.50, '2025-08-05', 'Delivered', NULL),
(104293, 59243, 94651, 4, 14.50, '2025-09-18', 'Delivered', NULL),
(104374, 59243, 91384, 3, 80.00, '2025-10-10', 'Delivered', NULL),
(104451, 59243, 59427, 10, 20.00, '2025-11-03', 'Delivered', 'Bulk masks order'),
(104562, 59243, 16527, 5, 52.00, '2025-11-25', 'Shipped', NULL),
(104673, 59243, 43618, 3, 47.50, '2025-12-15', 'Shipped', NULL),
(104784, 59243, 46293, 1, 200.00, '2026-01-08', 'Pending', NULL),
(104895, 59243, 69382, 1, 179.00, '2026-02-01', 'Pending', NULL),

-- Paws & Claws Animal Hospital (61837) - Veterinary
(105182, 61837, 47193, 4, 27.00, '2025-08-10', 'Delivered', NULL),
(105293, 61837, 56284, 2, 59.99, '2025-09-05', 'Delivered', NULL),
(105374, 61837, 15384, 10, 18.99, '2025-10-01', 'Delivered', 'Annual vaccine restock'),
(105451, 61837, 26749, 8, 19.50, '2025-10-01', 'Delivered', NULL),
(105562, 61837, 39175, 5, 34.00, '2025-11-08', 'Delivered', NULL),
(105673, 61837, 22391, 1, 158.00, '2025-11-22', 'Shipped', NULL),
(105784, 61837, 86739, 10, 9.99, '2025-12-12', 'Shipped', NULL),
(105895, 61837, 52876, 4, 30.00, '2026-01-15', 'Pending', NULL),

-- Midwest Veterinary Clinic (74291) - Veterinary
(106182, 74291, 64937, 3, 74.00, '2025-07-28', 'Delivered', NULL),
(106293, 74291, 73582, 2, 88.00, '2025-08-22', 'Delivered', NULL),
(106374, 74291, 37419, 12, 14.99, '2025-09-15', 'Delivered', 'Rabies clinic prep'),
(106451, 74291, 48263, 10, 17.25, '2025-10-08', 'Delivered', NULL),
(106562, 74291, 34826, 4, 102.00, '2025-11-01', 'Delivered', NULL),
(106673, 74291, 61439, 5, 34.00, '2025-11-18', 'Shipped', NULL),
(106784, 74291, 94317, 8, 11.99, '2025-12-05', 'Shipped', NULL),
(106895, 74291, 73826, 3, 59.00, '2026-01-20', 'Pending', NULL),

-- Heartland Animal Care (83654) - Veterinary
(107182, 83654, 81264, 2, 138.00, '2025-08-18', 'Delivered', NULL),
(107293, 83654, 90437, 3, 64.00, '2025-09-10', 'Delivered', NULL),
(107374, 83654, 57941, 8, 18.00, '2025-10-05', 'Delivered', NULL),
(107451, 83654, 69583, 6, 38.50, '2025-10-25', 'Delivered', 'Equine vaccine order'),
(107562, 83654, 41573, 4, 30.00, '2025-11-12', 'Delivered', NULL),
(107673, 83654, 17293, 6, 38.00, '2025-12-02', 'Shipped', NULL),
(107784, 83654, 82514, 3, 68.00, '2025-12-22', 'Shipped', NULL),
(107895, 83654, 91273, 5, 22.00, '2026-01-25', 'Pending', NULL),

-- Twin Cities Pet Hospital (92417) - Veterinary
(108182, 92417, 19283, 4, 51.00, '2025-08-03', 'Delivered', NULL),
(108293, 92417, 28641, 2, 80.00, '2025-09-14', 'Delivered', NULL),
(108374, 92417, 78154, 6, 43.00, '2025-10-18', 'Delivered', NULL),
(108451, 92417, 53948, 3, 47.00, '2025-11-06', 'Delivered', 'Urinalysis restock'),
(108562, 92417, 62817, 4, 74.00, '2025-11-28', 'Shipped', NULL),
(108673, 92417, 44193, 5, 51.00, '2025-12-18', 'Shipped', NULL),
(108784, 92417, 16849, 6, 26.00, '2026-01-10', 'Pending', NULL),

-- Lakewood Equine & Pet Clinic (18563) - Veterinary
(109182, 18563, 90437, 2, 64.00, '2025-07-30', 'Delivered', NULL),
(109293, 18563, 78154, 8, 43.00, '2025-09-08', 'Delivered', 'Equine EWT order'),
(109374, 18563, 69583, 10, 38.50, '2025-10-12', 'Delivered', NULL),
(109451, 18563, 55394, 4, 39.50, '2025-11-04', 'Delivered', NULL),
(109562, 18563, 71394, 3, 85.00, '2025-11-24', 'Shipped', NULL),
(109673, 18563, 26841, 5, 25.99, '2025-12-14', 'Shipped', NULL),
(109784, 18563, 25637, 4, 38.50, '2026-01-06', 'Pending', NULL),
(109895, 18563, 92748, 2, 59.00, '2026-02-03', 'Pending', NULL);

## Allow Custom SQL Statements from App
CREATE OR REPLACE FUNCTION run_sql(query text)
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE result json;
BEGIN
  EXECUTE 'SELECT json_agg(t) FROM (' || query || ') t' INTO result;
  RETURN result;
END;
$$;
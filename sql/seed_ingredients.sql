-- seed_ingredients.sql
-- Bulk insert/update for core, sweetener, flavor, and specialty ingredients

-- Check current ingredients (optional)
SELECT name, category, COUNT(*) as count
FROM ingredients 
WHERE name IN (
    'Sea Salt', 'Potassium Citrate', 'Magnesium Citrate',
    'Stevia Extract', 'Monk Fruit Extract',
    'Lemon Juice Powder', 'Orange Juice Powder', 'Lime Juice Powder',
    'Coconut Water Powder', 'Watermelon Juice Powder',
    'Tart Cherry Powder', 'Ginger Root Powder', 'Turmeric Root Powder'
)
GROUP BY name, category
ORDER BY name;

-- Core Electrolyte Minerals
INSERT INTO ingredients (name, category, description, nutritional_info, health_benefits, precautions)
SELECT 
    'Sea Salt',
    'electrolyte',
    'Pure fine-grain sea salt for optimal sodium delivery and quick dissolution. The foundation of every electrolyte recipe.',
    '{"sodium_mg_per_gram": 387, "trace_minerals": true, "solubility": "excellent", "purity": "99.5%"}'::jsonb,
    ARRAY['Essential for fluid balance', 'Supports nerve transmission', 'Prevents dehydration', 'Maintains blood pressure'],
    ARRAY['Monitor intake if hypertensive', 'Use measured amounts for consistency']
WHERE NOT EXISTS (
    SELECT 1 FROM ingredients WHERE name = 'Sea Salt' AND category = 'electrolyte'
);

INSERT INTO ingredients (name, category, description, nutritional_info, health_benefits, precautions)
SELECT 
    'Potassium Citrate',
    'electrolyte',
    'Pharmaceutical-grade potassium citrate with superior bioavailability. Essential for muscle function and heart health.',
    '{"potassium_mg_per_gram": 360, "bioavailability": "excellent", "ph_buffering": true, "absorption_rate": "fast"}'::jsonb,
    ARRAY['Supports muscle contractions', 'Heart rhythm regulation', 'Prevents cramping', 'pH balance maintenance'],
    ARRAY['Consult doctor if on heart medications', 'Maximum 300mg per serving', 'Start with smaller doses']
WHERE NOT EXISTS (
    SELECT 1 FROM ingredients WHERE name = 'Potassium Citrate' AND category = 'electrolyte'
);

INSERT INTO ingredients (name, category, description, nutritional_info, health_benefits, precautions)
SELECT 
    'Magnesium Citrate',
    'electrolyte',
    'Highly absorbable magnesium citrate for energy production, muscle relaxation, and recovery support.',
    '{"magnesium_mg_per_gram": 200, "absorption_rate": "superior", "chelated": true, "bioavailability": "90%"}'::jsonb,
    ARRAY['Prevents muscle cramps', 'Supports 300+ enzyme reactions', 'Promotes recovery', 'Calming nervous system'],
    ARRAY['May have mild laxative effect initially', 'Start with 1/4 recommended dose', 'Take with food if sensitive']
WHERE NOT EXISTS (
    SELECT 1 FROM ingredients WHERE name = 'Magnesium Citrate' AND category = 'electrolyte'
);

-- Premium Sweeteners
INSERT INTO ingredients (name, category, description, nutritional_info, health_benefits, precautions)
SELECT 
    'Stevia Extract',
    'sweetener',
    'Pure stevia extract powder - 300x sweeter than sugar with zero calories and no glycemic impact.',
    '{"calories_per_gram": 0, "sweetness_factor": 300, "glycemic_index": 0, "purity": "99%", "stevioside_content": "95%"}'::jsonb,
    ARRAY['Zero calories', 'No blood sugar impact', 'Keto-friendly', 'Natural origin'],
    ARRAY['Extremely potent - use tiny amounts', 'May have slight aftertaste', 'Start with less than recommended']
WHERE NOT EXISTS (
    SELECT 1 FROM ingredients WHERE name = 'Stevia Extract' AND category = 'sweetener'
);

INSERT INTO ingredients (name, category, description, nutritional_info, health_benefits, precautions)
SELECT 
    'Monk Fruit Extract',
    'sweetener',
    'Premium monk fruit extract with clean taste and powerful sweetness. Heat-stable and perfect for bulk mixing.',
    '{"calories_per_gram": 0, "sweetness_factor": 150, "glycemic_index": 0, "mogrosides_percent": 50, "heat_stable": true}'::jsonb,
    ARRAY['Zero calories', 'No aftertaste', 'Heat stable', 'Natural antioxidants'],
    ARRAY['Premium pricing', 'Very concentrated']
WHERE NOT EXISTS (
    SELECT 1 FROM ingredients WHERE name = 'Monk Fruit Extract' AND category = 'sweetener'
);

-- Flavor Powders
INSERT INTO ingredients (name, category, description, nutritional_info, health_benefits, precautions)
SELECT 
    'Lemon Juice Powder',
    'flavor',
    'Spray-dried lemon juice powder with natural vitamin C. Perfect for bulk mixing and consistent citrus flavor.',
    '{"vitamin_c_mg_per_gram": 45, "citric_acid_percent": 15, "natural_flavor": true, "spray_dried": true}'::jsonb,
    ARRAY['High vitamin C content', 'Natural citrus bioflavonoids', 'Antioxidant properties', 'Consistent flavor'],
    ARRAY['Store in dry conditions', 'May clump in humidity']
WHERE NOT EXISTS (
    SELECT 1 FROM ingredients WHERE name = 'Lemon Juice Powder' AND category = 'flavor'
);

INSERT INTO ingredients (name, category, description, nutritional_info, health_benefits, precautions)
SELECT 
    'Orange Juice Powder',
    'flavor',
    'Natural orange juice powder with bioflavonoids and natural sweetness. Adds complexity to citrus blends.',
    '{"vitamin_c_mg_per_gram": 38, "bioflavonoids_mg_per_gram": 12, "natural_sugars_g_per_gram": 0.65, "beta_carotene": true}'::jsonb,
    ARRAY['Vitamin C and bioflavonoids', 'Natural orange essence', 'Beta-carotene content', 'Immune support'],
    ARRAY['Contains natural sugars', 'Account for in carb calculations']
WHERE NOT EXISTS (
    SELECT 1 FROM ingredients WHERE name = 'Orange Juice Powder' AND category = 'flavor'
);

INSERT INTO ingredients (name, category, description, nutritional_info, health_benefits, precautions)
SELECT 
    'Lime Juice Powder',
    'flavor',
    'Concentrated lime juice powder for tropical blends. High in vitamin C with distinctive lime tartness.',
    '{"vitamin_c_mg_per_gram": 42, "citric_acid_percent": 18, "lime_oil_content": true}'::jsonb,
    ARRAY['Highest vitamin C of citrus powders', 'Natural lime oils', 'Digestive support', 'Tropical flavor base'],
    ARRAY['Very tart - use sparingly', 'Natural oils may separate']
WHERE NOT EXISTS (
    SELECT 1 FROM ingredients WHERE name = 'Lime Juice Powder' AND category = 'flavor'
);

INSERT INTO ingredients (name, category, description, nutritional_info, health_benefits, precautions)
SELECT 
    'Coconut Water Powder',
    'flavor',
    'Freeze-dried coconut water preserving natural electrolytes and enzymes. Premium tropical base.',
    '{"potassium_mg_per_gram": 18, "natural_electrolytes": true, "enzymes_preserved": true, "freeze_dried": true}'::jsonb,
    ARRAY['Natural electrolyte source', 'Preserved enzymes', 'Tropical flavor', 'Additional potassium'],
    ARRAY['Premium pricing', 'Natural sugar content']
WHERE NOT EXISTS (
    SELECT 1 FROM ingredients WHERE name = 'Coconut Water Powder' AND category = 'flavor'
);

INSERT INTO ingredients (name, category, description, nutritional_info, health_benefits, precautions)
SELECT 
    'Watermelon Juice Powder',
    'flavor',
    'Spray-dried watermelon juice powder rich in lycopene. Perfect for summer hydration blends.',
    '{"lycopene_mg_per_gram": 5, "natural_sugars_g_per_gram": 0.7, "citrulline_mg_per_gram": 2.5}'::jsonb,
    ARRAY['High lycopene content', 'Natural cooling effect', 'Citrulline for circulation', 'Summer hydration'],
    ARRAY['Contains natural sugars', 'Beautiful pink color']
WHERE NOT EXISTS (
    SELECT 1 FROM ingredients WHERE name = 'Watermelon Juice Powder' AND category = 'flavor'
);

-- Specialty Additions
INSERT INTO ingredients (name, category, description, nutritional_info, health_benefits, precautions)
SELECT 
    'Tart Cherry Powder',
    'add-on',
    'Concentrated tart cherry powder for recovery and sleep support. Rich in natural anti-inflammatories.',
    '{"anthocyanins_mg_per_gram": 12, "melatonin_precursors": true, "anti_inflammatory": true}'::jsonb,
    ARRAY['Powerful anti-inflammatory', 'Natural recovery support', 'Sleep aid properties', 'Antioxidant rich'],
    ARRAY['May interact with sleep medications', 'Consult doctor if on blood thinners']
WHERE NOT EXISTS (
    SELECT 1 FROM ingredients WHERE name = 'Tart Cherry Powder' AND category = 'add-on'
);

INSERT INTO ingredients (name, category, description, nutritional_info, health_benefits, precautions)
SELECT 
    'Ginger Root Powder',
    'add-on',
    'Organic ginger root powder for digestive support and anti-inflammatory benefits.',
    '{"gingerol_mg_per_gram": 5, "anti_inflammatory": true, "digestive_enzymes": true}'::jsonb,
    ARRAY['Digestive support', 'Anti-inflammatory', 'Nausea relief', 'Warming effect'],
    ARRAY['Potent flavor - use sparingly', 'May increase bleeding risk in large doses']
WHERE NOT EXISTS (
    SELECT 1 FROM ingredients WHERE name = 'Ginger Root Powder' AND category = 'add-on'
);

INSERT INTO ingredients (name, category, description, nutritional_info, health_benefits, precautions)
SELECT 
    'Turmeric Root Powder',
    'add-on',
    'Organic turmeric root powder with curcumin for powerful anti-inflammatory support.',
    '{"curcumin_mg_per_gram": 30, "anti_inflammatory": true, "absorption_enhanced": "with_black_pepper"}'::jsonb,
    ARRAY['Powerful anti-inflammatory', 'Joint health support', 'Antioxidant properties', 'Recovery enhancement'],
    ARRAY['Take with black pepper for absorption', 'May thin blood in large doses', 'Can stain surfaces']
WHERE NOT EXISTS (
    SELECT 1 FROM ingredients WHERE name = 'Turmeric Root Powder' AND category = 'add-on'
);

-- Verification (optional)
SELECT 
    name,
    category,
    description,
    created_at
FROM ingredients 
WHERE name IN (
    'Sea Salt', 'Potassium Citrate', 'Magnesium Citrate',
    'Stevia Extract', 'Monk Fruit Extract',
    'Lemon Juice Powder', 'Orange Juice Powder', 'Lime Juice Powder',
    'Coconut Water Powder', 'Watermelon Juice Powder',
    'Tart Cherry Powder', 'Ginger Root Powder', 'Turmeric Root Powder'
)
ORDER BY category, name;

SELECT 
    category,
    COUNT(*) as ingredient_count
FROM ingredients
GROUP BY category
ORDER BY ingredient_count DESC;

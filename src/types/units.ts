// Units and conversion utilities for electrolyte recipes

export type Unit = 
  | 'g' | 'mg' | 'oz' | 'lb'           // Weight
  | 'ml' | 'L' | 'cup' | 'fl oz'       // Volume (liquid)
  | 'tsp' | 'tbsp'                     // Volume (cooking)
  | 'pinch' | 'drop' | 'dash';         // Approximate measures

export type UnitCategory = 'weight' | 'volume' | 'approximate';

// List of common units for electrolyte recipes
export const UNITS: Unit[] = [
  // Weight units (most precise for electrolytes)
  'g',
  'mg', 
  'oz',
  'lb',
  
  // Volume units
  'ml',
  'L',
  'cup',
  'fl oz',
  'tsp',
  'tbsp',
  
  // Approximate measures
  'pinch',
  'drop',
  'dash',
];

// Unit categories for better organization
export const UNIT_CATEGORIES: Record<UnitCategory, Unit[]> = {
  weight: ['g', 'mg', 'oz', 'lb'],
  volume: ['ml', 'L', 'cup', 'fl oz', 'tsp', 'tbsp'],
  approximate: ['pinch', 'drop', 'dash'],
};

// Conversion factors to grams (for weight) or milliliters (for volume)
// Note: Volume conversions assume water density (1 ml = 1 g)
export const UNIT_CONVERSIONS: Record<Unit, number> = {
  // Weight units to grams
  'g': 1,
  'mg': 0.001,
  'oz': 28.3495,
  'lb': 453.592,
  
  // Volume units to milliliters (assuming water density)
  'ml': 1,
  'L': 1000,
  'cup': 236.588,      // US cup
  'fl oz': 29.5735,    // US fluid ounce
  'tsp': 4.92892,      // US teaspoon
  'tbsp': 14.7868,     // US tablespoon
  
  // Approximate measures (rough estimates)
  'pinch': 0.36,       // ~1/8 teaspoon
  'drop': 0.05,        // ~1/100 teaspoon
  'dash': 0.6,         // ~1/8 teaspoon, slightly more than pinch
};

// Unit display names for better UX
export const UNIT_DISPLAY_NAMES: Record<Unit, string> = {
  'g': 'grams',
  'mg': 'milligrams',
  'oz': 'ounces',
  'lb': 'pounds',
  'ml': 'milliliters',
  'L': 'liters',
  'cup': 'cups',
  'fl oz': 'fluid ounces',
  'tsp': 'teaspoons',
  'tbsp': 'tablespoons',
  'pinch': 'pinches',
  'drop': 'drops',
  'dash': 'dashes',
};

// Utility functions
export const getUnitCategory = (unit: Unit): UnitCategory => {
  for (const [category, units] of Object.entries(UNIT_CATEGORIES)) {
    if (units.includes(unit)) {
      return category as UnitCategory;
    }
  }
  return 'approximate'; // fallback
};

export const getUnitDisplayName = (unit: Unit): string => {
  return UNIT_DISPLAY_NAMES[unit] || unit;
};

export const convertUnit = (
  amount: number, 
  fromUnit: Unit, 
  toUnit: Unit
): number => {
  // Can't convert between different categories reliably
  const fromCategory = getUnitCategory(fromUnit);
  const toCategory = getUnitCategory(toUnit);
  
  if (fromCategory !== toCategory && 
      fromCategory !== 'approximate' && 
      toCategory !== 'approximate') {
    throw new Error(`Cannot convert between ${fromCategory} and ${toCategory} units`);
  }
  
  const fromFactor = UNIT_CONVERSIONS[fromUnit];
  const toFactor = UNIT_CONVERSIONS[toUnit];
  
  if (!fromFactor || !toFactor) {
    throw new Error(`Conversion factor not found for ${fromUnit} or ${toUnit}`);
  }
  
  // Convert to base unit (grams or ml) then to target unit
  const baseAmount = amount * fromFactor;
  return baseAmount / toFactor;
};

export const formatAmount = (amount: number, precision: number = 3): string => {
  return (Math.round(amount * Math.pow(10, precision)) / Math.pow(10, precision))
    .toFixed(precision)
    .replace(/\.?0+$/, '');
};

export const isValidUnit = (unit: string): unit is Unit => {
  return UNITS.includes(unit as Unit);
};

// Preferred units for different ingredient types
export const PREFERRED_UNITS: Record<string, Unit[]> = {
  // Common electrolyte salts - typically measured in grams/milligrams
  salt: ['g', 'mg', 'tsp'],
  sodium: ['g', 'mg'],
  potassium: ['g', 'mg'],
  magnesium: ['g', 'mg'],
  calcium: ['g', 'mg'],
  
  // Liquids
  water: ['ml', 'L', 'cup'],
  juice: ['ml', 'cup', 'fl oz'],
  
  // Sweeteners and flavorings
  sugar: ['g', 'tsp', 'tbsp'],
  honey: ['g', 'tsp', 'tbsp'],
  stevia: ['mg', 'drop', 'pinch'],
  
  // Default fallback
  default: ['g', 'mg', 'tsp', 'ml'],
};

export const getPreferredUnits = (ingredientName: string): Unit[] => {
  const name = ingredientName.toLowerCase();
  
  for (const [key, units] of Object.entries(PREFERRED_UNITS)) {
    if (name.includes(key)) {
      return units;
    }
  }
  
  return PREFERRED_UNITS.default;
};
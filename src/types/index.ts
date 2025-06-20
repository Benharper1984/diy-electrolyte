// Types for Supabase tables based on your schema

export interface Ingredient {
  id: number;
  name: string;
  description?: string;
  unit: string;
}

export interface Recipe {
  id: number;
  name: string;
  description?: string;
  instructions: string;
  created_by: string;
  created_at: string;
  // Optionally add cost_per_serving, prep_time, etc. if present in your schema
}

export interface RecipeIngredient {
  id: number;
  recipe_id: number;
  ingredient_id: number;
  amount: number;
  alternative_ingredient_id?: number; // for alternatives
}

export interface RecipeAddon {
  id: number;
  recipe_id: number;
  ingredient_id: number;
  benefit?: string;
}

export interface UserProfile {
  id: string;
  username: string;
  avatar_url?: string;
}

// Add more types as needed for other tables (tools, suppliers, etc.)

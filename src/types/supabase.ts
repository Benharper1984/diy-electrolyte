export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      affiliate_clicks: {
        Row: {
          clicked_at: string | null
          id: string
          ip_address: unknown | null
          referrer_url: string | null
          supplier_product_id: string | null
          tool_id: string | null
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          clicked_at?: string | null
          id?: string
          ip_address?: unknown | null
          referrer_url?: string | null
          supplier_product_id?: string | null
          tool_id?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          clicked_at?: string | null
          id?: string
          ip_address?: unknown | null
          referrer_url?: string | null
          supplier_product_id?: string | null
          tool_id?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "affiliate_clicks_supplier_product_id_fkey"
            columns: ["supplier_product_id"]
            isOneToOne: false
            referencedRelation: "supplier_products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "affiliate_clicks_tool_id_fkey"
            columns: ["tool_id"]
            isOneToOne: false
            referencedRelation: "tools"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "affiliate_clicks_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      educational_content: {
        Row: {
          author_id: string | null
          category: string | null
          content: string
          created_at: string | null
          id: string
          published_at: string | null
          slug: string
          title: string
          updated_at: string | null
          view_count: number | null
        }
        Insert: {
          author_id?: string | null
          category?: string | null
          content: string
          created_at?: string | null
          id?: string
          published_at?: string | null
          slug: string
          title: string
          updated_at?: string | null
          view_count?: number | null
        }
        Update: {
          author_id?: string | null
          category?: string | null
          content?: string
          created_at?: string | null
          id?: string
          published_at?: string | null
          slug?: string
          title?: string
          updated_at?: string | null
          view_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "educational_content_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      ingredients: {
        Row: {
          bulk_supplements_available: boolean | null
          category: string | null
          created_at: string | null
          description: string | null
          fresh_equivalent_available: boolean | null
          grocery_store_available: boolean | null
          growing_info: string | null
          health_benefits: string[] | null
          id: number
          name: string
          nutritional_info: Json | null
          precautions: string[] | null
          preparation_difficulty: string | null
          sourcing_type: string | null
          updated_at: string | null
        }
        Insert: {
          bulk_supplements_available?: boolean | null
          category?: string | null
          created_at?: string | null
          description?: string | null
          fresh_equivalent_available?: boolean | null
          grocery_store_available?: boolean | null
          growing_info?: string | null
          health_benefits?: string[] | null
          id?: number
          name: string
          nutritional_info?: Json | null
          precautions?: string[] | null
          preparation_difficulty?: string | null
          sourcing_type?: string | null
          updated_at?: string | null
        }
        Update: {
          bulk_supplements_available?: boolean | null
          category?: string | null
          created_at?: string | null
          description?: string | null
          fresh_equivalent_available?: boolean | null
          grocery_store_available?: boolean | null
          growing_info?: string | null
          health_benefits?: string[] | null
          id?: number
          name?: string
          nutritional_info?: Json | null
          precautions?: string[] | null
          preparation_difficulty?: string | null
          sourcing_type?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      price_history: {
        Row: {
          id: string
          price: number
          recorded_at: string | null
          supplier_product_id: string | null
        }
        Insert: {
          id?: string
          price: number
          recorded_at?: string | null
          supplier_product_id?: string | null
        }
        Update: {
          id?: string
          price?: number
          recorded_at?: string | null
          supplier_product_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "price_history_supplier_product_id_fkey"
            columns: ["supplier_product_id"]
            isOneToOne: false
            referencedRelation: "supplier_products"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          display_name: string | null
          email: string | null
          id: string
          preferences: Json | null
          updated_at: string | null
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          display_name?: string | null
          email?: string | null
          id: string
          preferences?: Json | null
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          display_name?: string | null
          email?: string | null
          id?: string
          preferences?: Json | null
          updated_at?: string | null
          username?: string | null
        }
        Relationships: []
      }
      recipe_addons: {
        Row: {
          amount: number
          benefit_description: string | null
          id: string
          ingredient_id: number | null
          recipe_id: string | null
          sort_order: number | null
          unit: string
        }
        Insert: {
          amount: number
          benefit_description?: string | null
          id?: string
          ingredient_id?: number | null
          recipe_id?: string | null
          sort_order?: number | null
          unit: string
        }
        Update: {
          amount?: number
          benefit_description?: string | null
          id?: string
          ingredient_id?: number | null
          recipe_id?: string | null
          sort_order?: number | null
          unit?: string
        }
        Relationships: [
          {
            foreignKeyName: "recipe_addons_ingredient_id_fkey"
            columns: ["ingredient_id"]
            isOneToOne: false
            referencedRelation: "ingredients"
            referencedColumns: ["id"]
          },
        ]
      }
      recipe_ingredients: {
        Row: {
          amount: number
          created_at: string | null
          id: number
          ingredient_id: number | null
          is_optional: boolean | null
          notes: string | null
          recipe_id: number | null
          sort_order: number | null
          unit: string
          updated_at: string | null
        }
        Insert: {
          amount: number
          created_at?: string | null
          id?: number
          ingredient_id?: number | null
          is_optional?: boolean | null
          notes?: string | null
          recipe_id?: number | null
          sort_order?: number | null
          unit: string
          updated_at?: string | null
        }
        Update: {
          amount?: number
          created_at?: string | null
          id?: number
          ingredient_id?: number | null
          is_optional?: boolean | null
          notes?: string | null
          recipe_id?: number | null
          sort_order?: number | null
          unit?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "recipe_ingredients_ingredient_id_fkey"
            columns: ["ingredient_id"]
            isOneToOne: false
            referencedRelation: "ingredients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recipe_ingredients_recipe_id_fkey"
            columns: ["recipe_id"]
            isOneToOne: false
            referencedRelation: "recipes"
            referencedColumns: ["id"]
          },
        ]
      }
      recipe_ratings: {
        Row: {
          created_at: string | null
          rating: number | null
          recipe_id: string
          review: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          rating?: number | null
          recipe_id: string
          review?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          rating?: number | null
          recipe_id?: string
          review?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "recipe_ratings_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      recipe_tools: {
        Row: {
          is_required: boolean | null
          notes: string | null
          recipe_id: string
          tool_id: string
        }
        Insert: {
          is_required?: boolean | null
          notes?: string | null
          recipe_id: string
          tool_id: string
        }
        Update: {
          is_required?: boolean | null
          notes?: string | null
          recipe_id?: string
          tool_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "recipe_tools_tool_id_fkey"
            columns: ["tool_id"]
            isOneToOne: false
            referencedRelation: "tools"
            referencedColumns: ["id"]
          },
        ]
      }
      recipes: {
        Row: {
          categories: string[] | null
          cost_per_serving: number | null
          created_at: string | null
          description: string | null
          difficulty_level: string | null
          flavor_profile: string | null
          id: number
          instructions: string[] | null
          is_public: boolean | null
          name: string
          nutritional_benefits: string[] | null
          parent_recipe_id: number | null
          prep_time_minutes: number | null
          rating_avg: number | null
          rating_count: number | null
          serving_size_ml: number | null
          slug: string | null
          updated_at: string | null
          user_id: string | null
          view_count: number | null
        }
        Insert: {
          categories?: string[] | null
          cost_per_serving?: number | null
          created_at?: string | null
          description?: string | null
          difficulty_level?: string | null
          flavor_profile?: string | null
          id?: number
          instructions?: string[] | null
          is_public?: boolean | null
          name: string
          nutritional_benefits?: string[] | null
          parent_recipe_id?: number | null
          prep_time_minutes?: number | null
          rating_avg?: number | null
          rating_count?: number | null
          serving_size_ml?: number | null
          slug?: string | null
          updated_at?: string | null
          user_id?: string | null
          view_count?: number | null
        }
        Update: {
          categories?: string[] | null
          cost_per_serving?: number | null
          created_at?: string | null
          description?: string | null
          difficulty_level?: string | null
          flavor_profile?: string | null
          id?: number
          instructions?: string[] | null
          is_public?: boolean | null
          name?: string
          nutritional_benefits?: string[] | null
          parent_recipe_id?: number | null
          prep_time_minutes?: number | null
          rating_avg?: number | null
          rating_count?: number | null
          serving_size_ml?: number | null
          slug?: string | null
          updated_at?: string | null
          user_id?: string | null
          view_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "recipes_parent_recipe_id_fkey"
            columns: ["parent_recipe_id"]
            isOneToOne: false
            referencedRelation: "recipes"
            referencedColumns: ["id"]
          },
        ]
      }
      shopping_list_items: {
        Row: {
          created_at: string | null
          id: string
          recipe_id: string | null
          servings_count: number | null
          shopping_list_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          recipe_id?: string | null
          servings_count?: number | null
          shopping_list_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          recipe_id?: string | null
          servings_count?: number | null
          shopping_list_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "shopping_list_items_shopping_list_id_fkey"
            columns: ["shopping_list_id"]
            isOneToOne: false
            referencedRelation: "shopping_lists"
            referencedColumns: ["id"]
          },
        ]
      }
      shopping_lists: {
        Row: {
          created_at: string | null
          id: string
          name: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          name?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "shopping_lists_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      supplier_products: {
        Row: {
          affiliate_url: string | null
          created_at: string | null
          currency: string | null
          id: string
          in_stock: boolean | null
          ingredient_id: number | null
          last_scraped: string | null
          price: number | null
          price_per_gram: number | null
          product_data: Json | null
          product_name: string | null
          product_url: string | null
          size_unit: string | null
          size_value: number | null
          supplier_id: string | null
          updated_at: string | null
        }
        Insert: {
          affiliate_url?: string | null
          created_at?: string | null
          currency?: string | null
          id?: string
          in_stock?: boolean | null
          ingredient_id?: number | null
          last_scraped?: string | null
          price?: number | null
          price_per_gram?: number | null
          product_data?: Json | null
          product_name?: string | null
          product_url?: string | null
          size_unit?: string | null
          size_value?: number | null
          supplier_id?: string | null
          updated_at?: string | null
        }
        Update: {
          affiliate_url?: string | null
          created_at?: string | null
          currency?: string | null
          id?: string
          in_stock?: boolean | null
          ingredient_id?: number | null
          last_scraped?: string | null
          price?: number | null
          price_per_gram?: number | null
          product_data?: Json | null
          product_name?: string | null
          product_url?: string | null
          size_unit?: string | null
          size_value?: number | null
          supplier_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "supplier_products_ingredient_id_fkey"
            columns: ["ingredient_id"]
            isOneToOne: false
            referencedRelation: "ingredients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "supplier_products_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "suppliers"
            referencedColumns: ["id"]
          },
        ]
      }
      suppliers: {
        Row: {
          affiliate_base_url: string | null
          api_endpoint: string | null
          created_at: string | null
          id: string
          name: string
          scraping_config: Json | null
          website_url: string | null
        }
        Insert: {
          affiliate_base_url?: string | null
          api_endpoint?: string | null
          created_at?: string | null
          id?: string
          name: string
          scraping_config?: Json | null
          website_url?: string | null
        }
        Update: {
          affiliate_base_url?: string | null
          api_endpoint?: string | null
          created_at?: string | null
          id?: string
          name?: string
          scraping_config?: Json | null
          website_url?: string | null
        }
        Relationships: []
      }
      tools: {
        Row: {
          affiliate_url: string | null
          category: string | null
          created_at: string | null
          description: string | null
          id: string
          is_essential: boolean | null
          name: string
          price_range: string | null
        }
        Insert: {
          affiliate_url?: string | null
          category?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          is_essential?: boolean | null
          name: string
          price_range?: string | null
        }
        Update: {
          affiliate_url?: string | null
          category?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          is_essential?: boolean | null
          name?: string
          price_range?: string | null
        }
        Relationships: []
      }
      user_saved_recipes: {
        Row: {
          notes: string | null
          recipe_id: string
          saved_at: string | null
          user_id: string
        }
        Insert: {
          notes?: string | null
          recipe_id: string
          saved_at?: string | null
          user_id: string
        }
        Update: {
          notes?: string | null
          recipe_id?: string
          saved_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_saved_recipes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          created_at: string | null
          email: string
          id: string
          is_active: boolean | null
          preferences: Json | null
          updated_at: string | null
          username: string
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          is_active?: boolean | null
          preferences?: Json | null
          updated_at?: string | null
          username: string
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          is_active?: boolean | null
          preferences?: Json | null
          updated_at?: string | null
          username?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const

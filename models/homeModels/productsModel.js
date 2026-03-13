import supabase from "../../config/supabaseClient.js";

/**
 * Get Products Section (single row)
 */
export const getProductsSection = async () => {
  const { data, error } = await supabase
    .from("home_products_section")
    .select("*")
    .eq("id", 1)
    .single();

  return { data, error };
};

/**
 * Update Products Section (upsert id=1)
 * @param {Object} payload - { heading, description, categories }
 */
export const updateProductsSection = async (payload) => {
  const { data, error } = await supabase
    .from("home_products_section")
    .upsert([{ id: 1, ...payload }]);

  return { data, error };
};
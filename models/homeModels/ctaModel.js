import supabase from "../../config/supabaseClient.js";

/**
 * Get CTA Section (single row)
 */
export const getCtaSection = async () => {
  const { data, error } = await supabase
    .from("home_cta_section")
    .select("*")
    .eq("id", 1)
    .single();

  return { data, error };
};

/**
 * Update CTA Section (upsert id=1)
 * @param {Object} payload - { heading, subheading, description }
 */
export const updateCtaSection = async (payload) => {
  const { data, error } = await supabase
    .from("home_cta_section")
    .upsert([{ id: 1, ...payload }]);

  return { data, error };
};
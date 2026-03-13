import supabase from "../../config/supabaseClient.js";
/**
 * Get About Section
 */
export const getAbout = async () => {
  return await supabase
    .from("home_about_section")
    .select("*")
    .eq("id", 1)
    .single();
};

/**
 * Update About Section
 */
export const updateAbout = async (data) => {
  return await supabase
    .from("home_about_section")
    .upsert([{ id: 1, ...data }]);
};
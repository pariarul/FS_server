import supabase from "../../config/supabaseClient.js";

// Fetch the company section (single row)
export const getCompany = async () => {
  return await supabase
    .from("company_section")
    .select("*")
    .eq("id", 1)
    .single();
};

// Update the company section
export const updateCompany = async (data) => {
  return await supabase
    .from("company_section")
    .upsert([{ id: 1, ...data }]);
};

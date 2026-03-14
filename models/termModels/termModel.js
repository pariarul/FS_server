import supabase from "../../config/supabaseClient.js";

export const getTerms = async () => {
  return await supabase
    .from("terms_section")
    .select("*")
    .eq("id", 1)
    .single();
};

export const updateTerms = async (data) => {
  return await supabase
    .from("terms_section")
    .upsert([{ id: 1, ...data }]);
};
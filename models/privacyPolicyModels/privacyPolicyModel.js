import supabase from "../../config/supabaseClient.js";


export const getPrivacyPolicy = async () => {
  return await supabase
    .from("privacy_policy_section")
    .select("*")
    .eq("id", 1)
    .single();
};


export const updatePrivacyPolicy = async (data) => {
  return await supabase
    .from("privacy_policy_section")
    .upsert([{ id: 1, ...data }]);
};
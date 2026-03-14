import supabase from "../../config/supabaseClient.js";

export const getHistory = async () => {
  return await supabase
    .from("history_section")
    .select("*")
    .eq("id", 1)
    .single();
};


export const updateHistory = async (data) => {
  return await supabase
    .from("history_section")
    .upsert([{ id: 1, ...data }]);
};
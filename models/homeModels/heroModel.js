import supabase from "../../config/supabaseClient.js";


export const getHero = async () => {
  return await supabase
    .from("home_hero_section")
    .select("*")
    .eq("id", 1)
    .single();
};

export const updateHero = async (data) => {
  return await supabase
    .from("home_hero_section")
    .upsert([{ id: 1, ...data }]);
};
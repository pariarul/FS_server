import supabase from "../../config/supabaseClient.js";

/* ──────────────────────── Fetch Leadership Section ──────────────────────── */
export const getLeadership = async () => {
  return await supabase
    .from("leadership_section")
    .select("*")
    .eq("id", 1)
    .single();
};

/* ──────────────────────── Update Leadership Section ──────────────────────── */
export const updateLeadership = async (data) => {
  return await supabase
    .from("leadership_section")
    .upsert([{ id: 1, ...data }]);
};

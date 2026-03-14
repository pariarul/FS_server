import supabase from "../../config/supabaseClient.js";

export const getSupplier = async () => {
  return await supabase
    .from("supplier_section")
    .select("*")
    .eq("id", 1)
    .single();
};

export const updateSupplier = async (data) => {
  return await supabase
    .from("supplier_section")
    .upsert([{ id: 1, ...data }]);
};

import supabase from "../../config/supabaseClient.js";

export const getSupplierSection = async () => {
  return await supabase
    .from("home_supplier_section")
    .select("*")
    .eq("id", 1)
    .single();
};

export const updateSupplierSection = async (data) => {
  return await supabase
    .from("home_supplier_section")
    .upsert([{ id: 1, ...data }]);
};
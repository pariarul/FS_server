import { getSupplierSection, updateSupplierSection } from "../../models/homeModels/supplierModel.js";

// GET Supplier Section
export const getSupplierSectionController = async (req, res) => {
  try {
    const { data, error } = await getSupplierSection();
    if (error) {
      return res.status(500).json({ success: false, error: error.message });
    }

    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// UPDATE Supplier Section
export const updateSupplierSectionController = async (req, res) => {
  try {
    const { data, error } = await updateSupplierSection(req.body);
    if (error) {
      return res.status(500).json({ success: false, error: error.message });
    }

    res.json({ success: true, message: "Supplier section updated successfully", data });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
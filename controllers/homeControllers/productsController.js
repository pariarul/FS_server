import { getProductsSection, updateProductsSection } from "../../models/homeModels/productsModel.js";

// GET Products Section
export const getProductsSectionController = async (req, res) => {
  try {
    const { data, error } = await getProductsSection();
    if (error) {
      return res.status(500).json({ success: false, error: error.message });
    }

    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// UPDATE Products Section
export const updateProductsSectionController = async (req, res) => {
  try {
    const { data, error } = await updateProductsSection(req.body);
    if (error) {
      return res.status(500).json({ success: false, error: error.message });
    }

    res.json({
      success: true,
      message: "Products section updated successfully",
      data
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
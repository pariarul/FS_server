import { getSupplier, updateSupplier } from "../../models/SupplierModel/supplierModel.js";

// GET Supplier Section
export const getSupplierSection = async (req, res) => {
  try {
    const { data, error } = await getSupplier();

    if (error) {
      return res.status(500).json({
        success: false,
        message: "Failed to fetch supplier section",
        error: error.message
      });
    }

    res.status(200).json({
      success: true,
      data
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message
    });
  }
};


// UPDATE Supplier Section
export const updateSupplierSection = async (req, res) => {
  try {

    const {
      suppliers_heading,
      suppliers_manager,
      supplier_map,
      reviews_heading,
      reviews_description,
      reviews
    } = req.body;

    const { data, error } = await updateSupplier({
      suppliers_heading,
      suppliers_manager,
      supplier_map,
      reviews_heading,
      reviews_description,
      reviews
    });

    if (error) {
      return res.status(500).json({
        success: false,
        message: "Failed to update supplier section",
        error: error.message
      });
    }

    res.status(200).json({
      success: true,
      message: "Supplier section updated successfully",
      data
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message
    });
  }
};

import { getSupplier, updateSupplier } from "../../models/SupplierModel/supplierModel.js";

// GET Supplier Section
export const getSupplierSection = async (req, res) => {
  try {
    const { data, error } = await getSupplier();

    if (error) {
      return res.status(500).json({
        success: false,
        message: error.message
      });
    }

    if (data) {
      const row = data;
      const formattedData = {
        heading: row.suppliers_heading,
        manager: row.suppliers_manager,
        supplierMap: row.supplier_map,
        reviews_heading: row.reviews_heading,
        reviews_description: row.reviews_description,
        reviews: row.reviews,
        supplierForm: row.supplier_form // Ensure this matches the model field
      };

      return res.status(200).json({
        success: true,
        data: formattedData,
      });
    }

    res.status(200).json({
      success: true,
      data: null
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};


// UPDATE Supplier Section
export const updateSupplierSection = async (req, res) => {
  try {

    const { suppliers, reviews: reviewsData } = req.body;

    const payload = {};
    if (suppliers) {
      if (suppliers.heading) payload.suppliers_heading = suppliers.heading;
      if (suppliers.manager) payload.suppliers_manager = suppliers.manager;
      if (suppliers.supplierMap) payload.supplier_map = suppliers.supplierMap;
    }
    if (reviewsData) {
      if (reviewsData.heading) payload.reviews_heading = reviewsData.heading;
      if (reviewsData.description) payload.reviews_description = reviewsData.description;
      if (reviewsData.reviews) payload.reviews = reviewsData.reviews;
    }

    const { data, error } = await updateSupplier(payload);

    if (error) {
      return res.status(500).json({
        success: false,
        message: error.message
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
      message: err.message
    });
  }
};

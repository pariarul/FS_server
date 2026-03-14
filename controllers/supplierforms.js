// controllers/supplierFormController.js
import {
  getSupplierForms,
  getSupplierFormById,
  createSupplierForm,
  updateSupplierForm,
  deleteSupplierForm,
  getSupplierFormHeading,
  updateSupplierFormHeading
} from "../models/supplierformModel.js";

/** -------------------------------
 * GET all supplier forms
 * ------------------------------- */
export const fetchAllSupplierForms = async (req, res) => {
  try {
    const data = await getSupplierForms();

    res.status(200).json({
      success: true,
      data,
      message: "Supplier forms fetched successfully ✅",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch supplier forms ❌",
      error: err.message,
    });
  }
};

/** -------------------------------
 * GET single supplier form by ID
 * ------------------------------- */
export const fetchSupplierFormById = async (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid supplier form ID ❌",
    });
  }

  try {
    const data = await getSupplierFormById(id);
    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Supplier form not found ❌",
      });
    }

    res.status(200).json({
      success: true,
      data,
      message: "Supplier form fetched successfully ✅",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch supplier form ❌",
      error: err.message,
    });
  }
};

/** -------------------------------
 * POST / Create new supplier form
 * ------------------------------- */
export const addSupplierForm = async (req, res) => {
  const { formData, date, time } = req.body;

  if (!formData || !date || !time) {
    return res.status(400).json({
      success: false,
      message: "formData, date, and time are required ❌",
    });
  }

  try {
    const data = await createSupplierForm(formData, date, time);

    res.status(201).json({
      success: true,
      message: "Supplier form created successfully ✅",
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to create supplier form ❌",
      error: err.message,
    });
  }
};

/** -------------------------------
 * PUT / Update a supplier form by ID
 * ------------------------------- */
export const modifySupplierForm = async (req, res) => {
  const id = Number(req.params.id);
  const { formData } = req.body;

  if (isNaN(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid supplier form ID ❌",
    });
  }
  if (!formData) {
    return res.status(400).json({
      success: false,
      message: "formData is required for update ❌",
    });
  }

  try {
    const data = await updateSupplierForm(id, formData);

    res.status(200).json({
      success: true,
      message: "Supplier form updated successfully ✅",
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: `Failed to update supplier form ❌`,
      error: err.message,
    });
  }
};

/** -------------------------------
 * DELETE a supplier form by ID
 * ------------------------------- */
export const removeSupplierForm = async (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid supplier form ID ❌",
    });
  }

  try {
    await deleteSupplierForm(id);

    res.status(200).json({
      success: true,
      message: "Supplier form deleted successfully ✅",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: `Failed to delete supplier form ❌`,
      error: err.message,
    });
  }
};

/** -------------------------------
 * GET Heading & Description
 * ------------------------------- */
export const fetchSupplierFormHeading = async (req, res) => {
  try {
    const data = await getSupplierFormHeading();
    res.status(200).json({
      success: true,
      heading: data.heading,
      description: data.description
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch heading",
      error: err.message,
    });
  }
};

/** -------------------------------
 * PUT Update Form Heading
 * ------------------------------- */
export const modifySupplierFormHeading = async (req, res) => {
  const { heading, description } = req.body;
  if (!heading || !description) {
      return res.status(400).json({ success: false, message: 'Heading and description required' });
  }

  try {
    const data = await updateSupplierFormHeading(heading, description);
    res.status(200).json({
      success: true,
      heading: data.heading,
      description: data.description,
      message: "Updated successfully"
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update heading",
      error: err.message,
    });
  }
};
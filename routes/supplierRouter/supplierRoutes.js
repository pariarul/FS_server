import express from "express";
import {
  getSupplierSection,
  updateSupplierSection
} from "../../controllers/supplierControllers/supplierController.js";

const router = express.Router();

// Get Supplier Section
router.get("/get-suppliers-section", getSupplierSection);

// Update Supplier Section
router.put("/update-supplier-section", updateSupplierSection);

export default router;

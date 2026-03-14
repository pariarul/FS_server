// routes/supplierFormRoutes.js
import express from "express";
import {
  fetchAllSupplierForms,
  fetchSupplierFormById,
  addSupplierForm,
  modifySupplierForm,
  removeSupplierForm,
  fetchSupplierFormHeading,
  modifySupplierFormHeading
} from "../controllers/supplierforms.js";

const router = express.Router();

/** -------------------------------
 * Supplier Form Routes
 * ------------------------------- */

router.get("/get-supplierform", fetchAllSupplierForms);
router.get("/get-supplierform/:id", fetchSupplierFormById);
router.post("/create-supplierform", addSupplierForm);
router.put("/update-supplierform/:id", modifySupplierForm);
router.delete("/delete-supplierform/:id", removeSupplierForm);

/** -------------------------------
 * Heading Routes
 * ------------------------------- */
router.get("/get-supplierform-heading", fetchSupplierFormHeading);
router.put("/update-supplierform-heading", modifySupplierFormHeading);

export default router;
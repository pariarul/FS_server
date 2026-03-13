import express from "express";
import {
  getSupplierSectionController,
  updateSupplierSectionController
} from "../../controllers/homeControllers/supplierController.js";

const router = express.Router();

router.get("/get-supplier-section", getSupplierSectionController);
router.put("/update-supplier-section", updateSupplierSectionController);

export default router;
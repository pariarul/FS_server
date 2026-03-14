import express from "express";
import {
    getImportProducts, addImportProduct, updateImportProduct, deleteImportProduct,
    getExportProducts, addExportProduct, updateExportProduct, deleteExportProduct
} from "../../controllers/productsControllers/catalogController.js";

const router = express.Router();

// Import Routes
router.get("/get-import-products", getImportProducts);
router.post("/add-import-product", addImportProduct);
router.put("/update-import-product", updateImportProduct);
router.post("/delete-import-product", deleteImportProduct);

// Export Routes
router.get("/get-export-products", getExportProducts);
router.post("/add-export-product", addExportProduct);
router.put("/update-export-product", updateExportProduct);
router.post("/delete-export-product", deleteExportProduct);

export default router;

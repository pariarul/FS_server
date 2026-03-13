import express from "express";
import {
  getProductsSectionController,
  updateProductsSectionController
} from "../../controllers/homeControllers/productsController.js";

const router = express.Router();

// GET /home/products-section
router.get("/get-product-section", getProductsSectionController);

// PUT /home/products-section
router.put("/update-products-section", updateProductsSectionController);

export default router;
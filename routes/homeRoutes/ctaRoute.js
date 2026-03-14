import express from "express";
import {
  getCtaSectionController,
  updateCtaSectionController
} from "../../controllers/homeControllers/ctaController.js";

const router = express.Router();

// GET /home/cta-section
router.get("/get-cta-section", getCtaSectionController);

// PUT /home/cta-section
router.put("/update-cta-section", updateCtaSectionController);

export default router;
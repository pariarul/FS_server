import express from "express";
import {
  getCtaSectionController,
  updateCtaSectionController
} from "../../controllers/homeControllers/ctaController.js";

const router = express.Router();

// GET /home/cta-section
router.get("/", getCtaSectionController);

// PUT /home/cta-section
router.put("/", updateCtaSectionController);

export default router;
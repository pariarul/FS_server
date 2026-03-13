import express from "express";
import {
  getAboutSection,
  updateAboutSection
} from "../../controllers/homeControllers/aboutController.js";

const router = express.Router();

router.get("/get-about-section", getAboutSection);

router.put("/update-about-section", updateAboutSection);

export default router;
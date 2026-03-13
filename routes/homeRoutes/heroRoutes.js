import express from "express";
import { getHeroSection, updateHeroSection } from "../../controllers/homeControllers/heroController.js";

const router = express.Router();

router.get("/get-hero-section", getHeroSection);

router.put("/update-hero-section", updateHeroSection);

export default router;
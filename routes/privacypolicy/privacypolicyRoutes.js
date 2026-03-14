// routes/privacyPolicyRoutes.js
import express from "express";
import { fetchPrivacyPolicy, editPrivacyPolicy } from "../../controllers/privacypolicy/privacyolicyController.js";

const router = express.Router();

// GET Privacy Policy Section
router.get("/get-privacy", fetchPrivacyPolicy);

// POST to update Privacy Policy Section
router.put("/update-privacy", editPrivacyPolicy);

export default router;
// routes/termsRoutes.js
import express from "express";
import { fetchTerms, editTerms } from "../../controllers/terms/termController.js";

const router = express.Router();

// GET Terms Section
router.get("/get-terms-conditions", fetchTerms);

// POST to update Terms Section
router.post("/update-terms-conditions", editTerms);

export default router;
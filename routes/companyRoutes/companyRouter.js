import express from "express";
import { fetchCompany, editCompany } from "../../controllers/companyControllers/companyController.js";

const router = express.Router();

router.get("/get-company", fetchCompany);   // GET /api/company
router.put("/update-company", editCompany);    // PUT /api/company

export default router;

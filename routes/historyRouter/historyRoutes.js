import express from "express";
import { fetchHistory, editHistory } from "../../controllers/historyControllers/historyController.js";

const router = express.Router();

router.get("/get-history", fetchHistory);   // GET /api/company
router.put("/update-history", editHistory);    // PUT /api/company

export default router;
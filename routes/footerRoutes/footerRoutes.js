import express from "express";
import { getFooterController, updateFooterController } from "../../controllers/footerControllers/footerController.js";

const router = express.Router();

router.get("/get-footer", getFooterController);
router.put("/update-footer", updateFooterController);

export default router;

import express from "express";
import {
  getLeadershipSection,
  updateLeadershipSection
} from "../../controllers/homeControllers/leadershipController.js";

const router = express.Router();

router.get("/get-leadership-section", getLeadershipSection);
router.put("/update-leadership-section", updateLeadershipSection);

export default router;
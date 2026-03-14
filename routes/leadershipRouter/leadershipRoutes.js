import express from "express";
import { getLeadershipController, updateLeadershipController } from "../../controllers/leadershipControllers/leadershipController.js";

const router = express.Router();

router.get("/get-leadership", getLeadershipController);
router.put("/update-leadership", updateLeadershipController);

export default router;

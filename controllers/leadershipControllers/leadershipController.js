import { getLeadership, updateLeadership } from "../../models/leadershipModels/leadershipModel.js";

/* ──────────────────────── GET Leadership Section ──────────────────────── */
export const getLeadershipController = async (req, res) => {
  try {
    const { data, error } = await getLeadership();

    if (error) {
      return res.status(500).json({ success: false, message: error.message });
    }

    res.status(200).json({ success: true, data });
  } catch (err) {
    console.error("Error fetching leadership data:", err);
    res.status(500).json({ success: false, message: err.message });
  }
};

/* ──────────────────────── UPDATE Leadership Section ──────────────────────── */
export const updateLeadershipController = async (req, res) => {
  try {
    const updatedData = req.body; // Expecting Leadership object
    const { data, error } = await updateLeadership(updatedData);

    if (error) {
      return res.status(500).json({ success: false, message: error.message });
    }

    res.status(200).json({ success: true, data });
  } catch (err) {
    console.error("Error updating leadership data:", err);
    res.status(500).json({ success: false, message: err.message });
  }
};

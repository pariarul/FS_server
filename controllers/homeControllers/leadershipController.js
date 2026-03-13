import { getLeadership, updateLeadership } from "../../models/homeModels/leadershipModel.js";

// GET Leadership Section
export const getLeadershipSection = async (req, res) => {
  try {
    const { data, error } = await getLeadership();

    if (error) {
      return res.status(500).json({ error: error.message });
    }

       res.json({
      success: true,
      data
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// UPDATE Leadership Section
export const updateLeadershipSection = async (req, res) => {
  try {
    const { data, error } = await updateLeadership(req.body);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.json({
      success: true,
      message: "Leadership section updated successfully",
      data,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
import { getHistory, updateHistory } from "../../models/historyModels/historyModel.js"; // adjust path as needed

// Controller to fetch history section
export const fetchHistory = async (req, res) => {
  try {
    const { data, error } = await getHistory();

    if (error) {
      return res.status(500).json({
        message: "Failed to fetch history section ❌",
        error: error.message || error,
      });
    }

    res.status(200).json({
      success: true,
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server error ❌",
      error: err.message,
    });
  }
};

// Controller to update history section
export const editHistory = async (req, res) => {
  try {
    const updateData = req.body; // expecting JSON body matching your History interface

    const { data, error } = await updateHistory(updateData);

    if (error) {
      return res.status(500).json({
        message: "Failed to update history section ❌",
        error: error.message || error,
      });
    }

    res.status(200).json({
      success: true,
      message: "History section updated successfully ✅",
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server error ❌",
      error: err.message,
    });
  }
};
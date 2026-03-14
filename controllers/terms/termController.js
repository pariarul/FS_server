import { getTerms, updateTerms } from "../../models/termModels/termModel.js"; // adjust path as needed

// Controller to fetch Terms section
export const fetchTerms = async (req, res) => {
  try {
    const { data, error } = await getTerms();

    if (error) {
      return res.status(500).json({
        message: "Failed to fetch Terms section ❌",
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

// Controller to update Terms section
export const editTerms = async (req, res) => {
  try {
    const updateData = req.body; // expecting JSON body matching your Terms interface

    const { data, error } = await updateTerms(updateData);

    if (error) {
      return res.status(500).json({
        message: "Failed to update Terms section ❌",
        error: error.message || error,
      });
    }

    res.status(200).json({
      success: true,
      message: "Terms section updated successfully ✅",
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
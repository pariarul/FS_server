// controllers/aboutController.js
import { getAbout, updateAbout } from "../../models/homeModels/aboutModel.js";

/**
 * GET /api/home/get-about-section
 */
export const getAboutSection = async (req, res) => {
  try {
    const { data, error } = await getAbout();

    if (error) throw error;

    return res.status(200).json({
      success: true,
      data
    });

  } catch (error) {
    console.error("Error fetching About section:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error"
    });
  }
};

/**
 * PUT /api/home/update-about-section
 */
export const updateAboutSection = async (req, res) => {
  try {
    const aboutData = req.body;

    const { data, error } = await updateAbout(aboutData);

    if (error) throw error;

    return res.json({
      success: true,
      message: "About section updated successfully",
      data
    });

  } catch (error) {
    console.error("Error updating About section:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error"
    });
  }
};
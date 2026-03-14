import { getPrivacyPolicy, updatePrivacyPolicy } from "../../models/privacyPolicyModels/privacyPolicyModel.js"; // adjust path as needed

// Controller to fetch Privacy Policy section
export const fetchPrivacyPolicy = async (req, res) => {
  try {
    const { data, error } = await getPrivacyPolicy();

    if (error) {
      return res.status(500).json({
        message: "Failed to fetch Privacy Policy section ❌",
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

// Controller to update Privacy Policy section
export const editPrivacyPolicy = async (req, res) => {
  try {
    const updateData = req.body; // expecting JSON body matching your PrivacyPolicy interface

    const { data, error } = await updatePrivacyPolicy(updateData);

    if (error) {
      return res.status(500).json({
        message: "Failed to update Privacy Policy section ❌",
        error: error.message || error,
      });
    }

    res.status(200).json({
      success: true,
      message: "Privacy Policy section updated successfully ✅",
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
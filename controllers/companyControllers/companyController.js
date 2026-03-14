import { getCompany, updateCompany } from "../../models/companyModels/companyModel.js"; // adjust path as needed

// Controller to fetch company section
export const fetchCompany = async (req, res) => {
  try {
    const { data, error } = await getCompany();

    if (error) {
      return res.status(500).json({
        message: "Failed to fetch company section ❌",
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

// Controller to update company section
export const editCompany = async (req, res) => {
  try {
    const updateData = req.body; // expecting JSON body matching your CompanyData shape

    const { data, error } = await updateCompany(updateData);

    if (error) {
      return res.status(500).json({
        message: "Failed to update company section ❌",
        error: error.message || error,
      });
    }

    res.status(200).json({
      success: true,
      message: "Company section updated successfully ✅",
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

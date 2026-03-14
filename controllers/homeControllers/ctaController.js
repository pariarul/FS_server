import { getCtaSection, updateCtaSection } from "../../models/homeModels/ctaModel.js";

// GET CTA Section
export const getCtaSectionController = async (req, res) => {
  try {
    const { data, error } = await getCtaSection();
    if (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// UPDATE CTA Section
export const updateCtaSectionController = async (req, res) => {
  try {
    const { data, error } = await updateCtaSection(req.body);
    if (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
    res.json({ success: true, message: "CTA section updated successfully", data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
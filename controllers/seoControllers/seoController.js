import { getSeo, updateSeo } from "../../models/seoModels/seoModel.js";

export const getSeoController = (tableName) => async (req, res) => {
  try {
    const { data, error } = await getSeo(tableName);
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateSeoController = (tableName) => async (req, res) => {
  try {
    const { metadata } = req.body;
    const { data, error } = await updateSeo(tableName, metadata);
    if (error) throw error;
    res.json({ success: true, metadata: data.metadata });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

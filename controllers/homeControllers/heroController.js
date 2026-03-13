import { getHero, updateHero } from "../../models/homeModels/heroModel.js";

export const getHeroSection = async (req, res) => {
  try {
    const { data, error } = await getHero();

    if (error) throw error;

    res.json({
      success: true,
      data
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const updateHeroSection = async (req, res) => {

  try {

    const heroData = req.body;
    const { data, error } = await updateHero(heroData);

    if (error) throw error;

    res.json({
      success: true,
      message: "Hero section updated",
      data
    });

    return;

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};
const Food = require("../models/foodModel");

exports.fetchAllFoods = async (req, res) => {
  try {
    let foods = await Food.find();
    if (foods) {
      return res.status(200).json({
        message: "fetched all food items",
        foods,
      });
    } else {
      return res
        .status(404)
        .json({ message: "Something wrong, failed to fetch food items" });
    }
  } catch (error) {
    throw error;
  }
};

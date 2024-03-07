const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  imageUrl: String,
  name: String,
  rating: Number,
  votes: Number,
  price: Number,
  vegOrNonVeg: String,
  cuisine: String,
  description: String,
});

const Food = mongoose.model("food", foodSchema);

module.exports = Food;

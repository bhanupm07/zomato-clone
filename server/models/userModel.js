const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    imageUrl: String,
    description: String,
    phone: Number,
    cart: [
      {
        foodId: { type: mongoose.Schema.Types.ObjectId, ref: "food" },
        quantity: Number,
      },
    ],
    bookmarks: [
      {
        restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: "delivery" },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;

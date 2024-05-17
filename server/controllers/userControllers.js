const User = require("../models/userModel");

exports.getUserDetails = async (req, res) => {
  try {
    const userId = req.userId;
    // Fetch user details from the database
    console.log(userId);
    const user = await User.findById(userId)
      .populate("cart.foodId")
      .populate("bookmarks.restaurantId");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.json({ user });
  } catch (error) {
    console.error("Error fetching user details:", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};

exports.updateUserDetails = async (req, res) => {
  try {
    const userId = req.userId;
    const updatedDetails = req.body;

    // Update user details in the database
    const user = await User.findByIdAndUpdate(userId, updatedDetails, {
      new: true,
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.json({ user });
  } catch (error) {
    console.error("Error updating user details:", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};

exports.addToCart = async (req, res) => {
  const { userId, foodId, quantity } = req.body;

  try {
    let user = await User.findById(userId);

    if (user) {
      let itemIndex = user.cart.findIndex(
        (item) => item.foodId.toString() === foodId
      );

      if (itemIndex > -1) {
        // If product exists in the cart, update the quantity
        user.cart[itemIndex].quantity += quantity;
      } else {
        // If product does not exist in the cart, add new item
        user.cart.push({ foodId, quantity });
      }
      user = await user.save();
      const newUser = await user.populate("cart.foodId");
      return res.status(200).json(newUser.cart);
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.removeFromCart = async (req, res) => {
  const { userId, foodId, quantity } = req.body;

  try {
    let user = await User.findById(userId);

    if (user) {
      let itemIndex = user.cart.findIndex(
        (item) => item.foodId.toString() === foodId
      );

      if (user.cart[itemIndex].quantity > 1) {
        user.cart[itemIndex].quantity -= quantity;
      } else {
        user.cart = user.cart.filter(
          (item) => item.foodId.toString() !== foodId
        );
      }
      user = await user.save();
      const newUser = await user.populate("cart.foodId");
      return res.status(200).json(newUser.cart);
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.getUserCart = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId).populate("cart.foodId");
    if (user) {
      return res.status(200).json(user.cart);
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.addToBookmarks = async (req, res) => {
  const { userId, restaurantId } = req.body;

  try {
    let user = await User.findById(userId);

    if (user) {
      user.bookmarks.push({ restaurantId });
      user = await user.save();
      const newUser = await user.populate("bookmarks.restaurantId");
      return res.status(200).json(newUser.bookmarks);
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.getBookmarks = async (req, res) => {
  const { userId } = req.body;

  try {
    const user = await User.findById(userId).populate("bookmarks.restaurantId");
    if (user) {
      return res.status(200).json(user.bookmarks);
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.removeFromBookmarks = async (req, res) => {
  const { userId, restaurantId } = req.body;

  try {
    let user = await User.findById(userId);
    if (user) {
      user.bookmarks = user.bookmarks.filter(
        (restaurant) => restaurant.restaurantId.toString() !== restaurantId
      );
      user = await user.save();
      const newUser = await user.populate("bookmarks.restaurantId");
      return res.status(200).json(newUser.bookmarks);
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

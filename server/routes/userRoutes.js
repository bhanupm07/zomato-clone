const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers");

const {
  getUserDetails,
  updateUserDetails,
  addToBookmarks,
  addToCart,
  getUserCart,
  removeFromCart,
  removeFromBookmarks,
  getBookmarks,
} = userControllers;

router.route("/details").get(getUserDetails);
router.route("/update-details").put(updateUserDetails);
router.route("/add-to-cart").post(addToCart);
router.route("/get-cart/:userId").get(getUserCart);
router.route("/remove-from-cart").delete(removeFromCart);
router.route("/add-to-bookmarks").post(addToBookmarks);
router.route("/get-bookmarks").get(getBookmarks);
router.route("/remove-from-bookmarks").delete(removeFromBookmarks);

module.exports = router;

const express = require("express");
const foodControllers = require("../controllers/foodControllers");
const router = express.Router();

router.route("/").get(foodControllers.fetchAllFoods);

module.exports = router;

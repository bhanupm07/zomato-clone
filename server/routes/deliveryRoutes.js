const express = require("express");
const deliveryControllers = require("../controllers/deliveryControllers");
const router = express.Router();

router.route("/").get(deliveryControllers.fetchAllDeliveryRestaurants);

module.exports = router;

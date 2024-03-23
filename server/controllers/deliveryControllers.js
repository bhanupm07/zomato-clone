const Delivery = require("../models/deliveryModel");

exports.fetchAllDeliveryRestaurants = async (req, res) => {
  try {
    let deliveryRestaurants = await Delivery.find();
    if (deliveryRestaurants) {
      return res.status(200).json({
        message: "fetched online delivery restaurants",
        deliveryRestaurants,
      });
    } else {
      return res.status(404).json({ message: "something wrong" });
    }
  } catch (err) {
    throw err;
  }
};

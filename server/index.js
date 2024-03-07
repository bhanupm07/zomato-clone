const express = require("express");
const cors = require("cors");
require("./db/config");
const dotenv = require("dotenv");
dotenv.config({});

const jwt = require("jsonwebtoken");

const User = require("./models/userModel");
const Delivery = require("./models/deliveryModel");
const Food = require("./models/foodModel");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  try {
    res.send("Hello express!");
  } catch (err) {
    throw err;
  }
});

app.post("/register", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  jwt.sign({ result }, process.env.jwtKey, (err, token) => {
    if (err) res.send(err);
    res.send({ result, auth: token });
  });
});

app.post("/login", async (req, res) => {
  try {
    if (req.body.password && req.body.email) {
      let user = await User.findOne(req.body).select("-password");
      if (user) {
        jwt.sign({ user }, process.env.jwtKey, (err, token) => {
          if (err) res.send(err);
          res.send({ user, auth: token });
        });
      } else {
        res.send("User not found");
      }
    } else {
      res.send("Enter every credential");
    }
  } catch (err) {
    throw err;
  }
});

app.get("/api/delivery", async (req, res) => {
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
});

app.listen(4000);

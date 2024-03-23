const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({});

exports.signup = async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  jwt.sign({ userId: result._id }, process.env.jwtKey, (err, token) => {
    if (err) res.send(err);
    res.send({ result, auth: token });
  });
};

exports.loginExistingUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const currentUser = await User.findOne({ email });

      if (!currentUser) {
        return res
          .status(400)
          .json({ message: "user does not exist. Please register" });
      }
      const isPasswordValid = currentUser.password === password;

      if (!isPasswordValid) {
        return res.status(401).json({ message: "Incorrect password" });
      }

      // Generate a JWT token

      const token = jwt.sign({ userId: currentUser._id }, process.env.jwtKey);
      res.status(200).json({
        message: `Welcome ${currentUser.name}`,
        user: currentUser,
        token,
      });
    } else {
      res.send("Enter every credential");
    }
  } catch (err) {
    throw err;
  }
};

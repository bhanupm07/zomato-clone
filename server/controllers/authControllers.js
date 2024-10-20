const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
dotenv.config({});

// exports.signup = async (req, res) => {
//   let user = new User(req.body);
//   let result = await user.save();
//   jwt.sign({ userId: result._id }, process.env.jwtKey, (err, token) => {
//     if (err) res.send(err);
//     res.send({ result, auth: token });
//   });
// };

exports.signup = async (req, res) => {
  try {
    const { password, ...otherDetails } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    let user = new User({ ...otherDetails, password: hashedPassword });

    let result = await user.save();
    result.password = undefined;

    jwt.sign({ userId: result._id }, process.env.jwtKey, (err, token) => {
      if (err) return res.status(500).send(err);

      // Sending user details and auth token
      res.send({ result, auth: token });
    });
  } catch (error) {
    res.status(500).send("Error during signup: " + error.message);
  }
};

// exports.loginExistingUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     if (email && password) {
//       const currentUser = await User.findOne({ email });

//       if (!currentUser) {
//         return res
//           .status(400)
//           .json({ message: "user does not exist. Please register" });
//       }
//       const isPasswordValid = currentUser.password === password;

//       if (!isPasswordValid) {
//         return res.status(401).json({ message: "Incorrect password" });
//       }

//       // Generate a JWT token

//       const token = jwt.sign({ userId: currentUser._id }, process.env.jwtKey);
//       res.status(200).json({
//         message: `Welcome ${currentUser.name}`,
//         user: currentUser,
//         token,
//       });
//     } else {
//       res.send("Enter every credential");
//     }
//   } catch (err) {
//     throw err;
//   }
// };

exports.loginExistingUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email && password) {
      // Find the user by email
      const currentUser = await User.findOne({ email });

      if (!currentUser) {
        return res
          .status(400)
          .json({ message: "User does not exist. Please register." });
      }

      // Compare the password with the hashed password
      const isPasswordValid = await bcrypt.compare(
        password,
        currentUser.password
      );

      if (!isPasswordValid) {
        return res.status(401).json({ message: "Incorrect password" });
      }

      // Generate a JWT token
      const token = jwt.sign({ userId: currentUser._id }, process.env.jwtKey);

      // Remove the password before sending the user details
      currentUser.password = undefined;

      res.status(200).json({
        message: `Welcome ${currentUser.name}`,
        user: currentUser,
        token,
      });
    } else {
      res.status(400).send("Enter every credential.");
    }
  } catch (err) {
    res.status(500).send("Error during login: " + err.message);
  }
};

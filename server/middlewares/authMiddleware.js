const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({});

const authMiddleware = (req, res, next) => {
  try {
    let token = req.headeres["authorization"];
    if (token) {
      jwt.verify(token, process.env.jwtKey, (err, valid) => {
        if (err) {
          res.status(401).send("Please provide valid token");
        } else {
          next();
        }
      });
    } else {
      res.status(403).send("Please add token with header");
    }
  } catch (err) {
    throw err;
  }
};

module.exports = authMiddleware;

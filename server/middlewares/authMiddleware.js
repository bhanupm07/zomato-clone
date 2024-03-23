const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({});

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (token) {
      const decodedToken = jwt.verify(token, process.env.jwtKey);
      // console.log(decodedToken);
      const userId = decodedToken.userId;
      req.userId = userId;
      next();
    } else {
      res.status(403).send("Please add token with header");
    }
  } catch (err) {
    throw err;
  }
};

module.exports = authMiddleware;

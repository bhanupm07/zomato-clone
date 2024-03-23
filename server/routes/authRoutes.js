const express = require("express");
const authControllers = require("../controllers/authControllers");
const router = express.Router();

router.route("/signup").post(authControllers.signup);
router.route("/login").post(authControllers.loginExistingUser);

module.exports = router;

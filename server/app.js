const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const authRouter = require("./routes/authRoutes");
const deliveryRouter = require("./routes/deliveryRoutes");
const userRouter = require("./routes/userRoutes");
const authMiddleware = require("./middlewares/authMiddleware");

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/delivery", deliveryRouter);
app.use("/api/v1/user", authMiddleware, userRouter);

// app.get("/", async (req, res) => {
//   try {
//     res.send("Hello express!");
//   } catch (err) {
//     throw err;
//   }
// });

app.all("*", (req, res) => {
  res.status(404).json("Hi your api is working.");
});

module.exports = app;

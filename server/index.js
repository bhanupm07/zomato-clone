require("./db/config");
const app = require("./app");
const cors = require("cors");
app.use(cors());

const Food = require("./models/foodModel");

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

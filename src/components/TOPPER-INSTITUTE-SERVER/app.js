const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./v1/models/db");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Expose-Headers", "x-token");
  next();
});

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Topper Server");
});

app.use("/api/v1/users", require("./v1/routes/user.route"));
app.use("/api/v1/auth", require("./v1/routes/auth.route"));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

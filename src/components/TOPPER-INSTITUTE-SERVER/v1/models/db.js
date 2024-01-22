const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/topperinstitute";

mongoose.connect(url, (err) => {
  if (err) console.log(`Could not connetcted to DB`, err);
  else console.log(`Connected to DB`);
});

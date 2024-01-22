const mongoose = require("mongoose");
const autoIncrement = require("mongoose-sequence")(mongoose);

const userSchema = new mongoose.Schema({
  userId: { type: Number, min: 1 },
  name: {
    first: { type: String, minlength: 3, maxlength: 45 },
    last: { type: String, minlength: 3, maxlength: 45 },
  },
  mobile: { type: String, minlength: 10, maxlength: 15, unique: true },
  email: { type: String, minlength: 5, maxlength: 100, unique: true },
  password: { type: String, minlength: 5, maxlength: 100 },
  gender: String,
  status: Number,
  role: String,
  avatar: String,
  dob: { type: Date },
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: mongoose.SchemaTypes.ObjectId },
});

userSchema.plugin(autoIncrement, { inc_field: "userId" });
const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;

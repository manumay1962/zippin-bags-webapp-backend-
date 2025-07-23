const mongoose = require("mongoose");

mongoose.connect("mongoose://127.0.0.1:27017/zippin");

const userSchema = mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
  cart: {
    type: Array,
    default: [],
  },
  isadmin: Boolean,
  orders: {
    type: Array,
    default: [],
  },
  contact: Number,
  picture: String,
});

model.exports = mongoose.model("user", userSchema);

const mongoose = require("mongoose");

const usersFournis = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  confirmePass: String,
});

module.exports = mongoose.model("UsersFournis", usersFournis);

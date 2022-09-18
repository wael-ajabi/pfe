const mongoose = require("mongoose");

const usersAdmin = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  confirmePass: String,
});

module.exports = mongoose.model("UsersAdmin", usersAdmin);

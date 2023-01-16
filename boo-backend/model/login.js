const mongoose = require("mongoose");

const Login = new mongoose.Schema({
  password: {
    type: String,
    required: true,
    minlength: [8, "Password must be at least 8 characters"],
    maxlength: [20, "Password must be contains from 8 to 20 characters"],
  },
  email: { type: String, required: true },
  admin: { type: Boolean },
});

const LoginModel = mongoose.model("Login", Login);

module.exports = LoginModel;

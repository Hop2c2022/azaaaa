const express = require("express");
const {
  LoginGetController,
  LoginLogin,
} = require("../controller/LoginController");
const { TokenCheckerMiddleware } = require("../middleware");
const { authorizer } = require("../model/authorizer");
const LoginRouter = express.Router();

LoginRouter.get("/Login/:email", LoginGetController).post("/Login", LoginLogin);

module.exports = LoginRouter;

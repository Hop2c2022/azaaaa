const express = require("express");
const {
  SignUpGetController,
  SignUpGetControllerById,
  SignUpPostController,
  SignUpDeleteController,
  SignUpPutController,
  SignUpsDeleteController,
} = require("../controller/SignUpController");
const { TokenCheckerMiddleware } = require("../middleware");

const SignUpRouter = express.Router();

SignUpRouter
      .get("/SignUp", SignUpGetController)
  //   .get("/signup/:id", SignUpGetControllerById)
  .post("/SignUp", SignUpPostController);
//   .delete("/SignUp/:id", SignUpDeleteController)
//   .delete("/SignUps", SignUpsDeleteController)
//   .put("/SignUp/:id", SignUpPutController);
// .post("/SignUp", SignUp)

module.exports = SignUpRouter;

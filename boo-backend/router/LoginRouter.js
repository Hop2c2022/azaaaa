
const express = require("express")
const { LoginGetController, LoginGetControllerById, LoginPostController, LoginDeleteController, LoginPutController, LoginsDeleteController, LoginLogin } = require("../controller/LoginController")
const { TokenCheckerMiddleware } = require("../middleware")
const {authorizer} = require("../model/authorizer")
const LoginRouter = express.Router()

LoginRouter
    .get("/Login", TokenCheckerMiddleware,  LoginGetController )
    .get("/Login/:id", TokenCheckerMiddleware ,LoginGetControllerById )
    .post("/Login", LoginPostController )
    .delete("/Login/:id", LoginDeleteController )
    .delete("/Logins", LoginsDeleteController)
    .put("/Login/:id", LoginPutController )
    .post("/login", LoginLogin)

module.exports = LoginRouter
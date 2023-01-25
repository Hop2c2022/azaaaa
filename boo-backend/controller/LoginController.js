const { response } = require("express");
const mongoose = require("mongoose");
const Login = require("../model/signUp");
const { createLoginQuery } = require("../query/LoginQuery");
const { TokenGenerator } = require("../helper/helper");

exports.LoginGetController = async (req, res) => {
  const { email } = req.params;
  const result = await Login.findOne({ email: email });
  res.send({ data: result });
};
exports.LoginLogin = async (req, res) => {
  const { password, email } = req.body;
  const login = await Login.findOne({ email: email });
  if (!login) res.send(" You don't have any login account, please sign up ");

  if (login.password === password && login.email === email) {
    const token = await TokenGenerator({ uid: login._id, expires: 1200 });
    res.send({ token: token });
    return;
  } else {
    res.send("Invalid password or email");
    return;
  }
};

// exports.LoginGetControllerById = async (req, res) => {
//   const { id } = req.params;
//   const objId = new mongoose.Types.ObjecId(id);
//   const result = await Login.findById({ _id: objId });
//   res.send({ data: result });
// };
// exports.LoginPostController = async (req, res) => {
//   try {
//     await createLoginQuery(req);
//     res.status(201).send(" Successfully created new Login ");
//   } catch (err) {
//     res.send(err.message);
//   }
// };

// exports.LoginsDeleteController = (req, res) => {
//   const { ids } = req.body;
//   // const newDatabse = database.filter((el, index) => el.id != ids.map(item => item)[index])
//   // res.status(200).send(newDatabse)
// };

// exports.LoginDeleteController = (req, res) => {
//   const { id } = req.params;
//   // const newDatabse = database.filter((el) => el.id != id)
//   // res.status(200).send(newDatabse)
// };

// exports.LoginPutController = (req, res) => {
//   const { id } = req.params;
//   const { name } = req.body;
//   // const newDatabse = database.map((el) => el.id == id ? el.name = name : el.name)
//   // res.status(200).send(newDatabse)
// };

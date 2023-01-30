const { response } = require("express");
const mongoose = require("mongoose");
const UserSchema = require("../model/signUp");
const { createLoginQuery } = require("../query/LoginQuery");
const { TokenGenerator } = require("../helper/helper");
const bcrypt = require("bcrypt");

exports.LoginGetController = async (req, res) => {
  const { email } = req.params;
  const result = await UserSchema.findOne({ email: email });
  res.send({ data: result });
};
exports.LoginLogin = async (req, res) => {
  const { password, email } = req.body;
  console.log(email, password);
  const user = await UserSchema.findOne({ email: email });
  if (!user) res.send(" You don't have any user account, please sign up ");
  const deck = await bcrypt.compare(password, user.password);

  if (deck === true) {
    const token = await TokenGenerator({ uid: user._id, expires: "1d" });
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

const { response } = require("express");
const mongoose = require("mongoose");
const SignUp = require("../model/signUp");
const { SignUpQuery } = require("../query/SignUpQuery");
const { TokenGenerator } = require("../helper/helper");

exports.SignUpGetController = async (req, res) => {
  try {
    const result = await SignUp.find();
    res.send({ data: result });
  } catch (error) {
    console.log(error.message);
  }
};

// exports.SignUpGetControllerById = async (req, res) => {
//   const { id } = req.params;
//   const objId = new mongoose.Types.ObjectId(id);
//   const result = await SignUp.findById({ _id: objId });
//   res.send({ data: result });
// };

exports.SignUpPostController = async (req, res) => {
  try {
    await SignUpQuery(req, res);
    res.status(201).send(" Successfully created new SignUp ");
  } catch (err) {
    res.send(err.message);
  }
};

// exports.SignUpsDeleteController = (req, res) => {
//   const { ids } = req.body;
//   // const newDatabse = database.filter((el, index) => el.id != ids.map(item => item)[index])
//   // res.status(200).send(newDatabse)
// };

// exports.SignUpDeleteController = (req, res) => {
//   const { id } = req.params;
//   // const newDatabse = database.filter((el) => el.id != id)
//   // res.status(200).send(newDatabse)
// };

// exports.SignUpPutController = (req, res) => {
//   const { id } = req.params;
//   const { name } = req.body;
//   // const newDatabse = database.map((el) => el.id == id ? el.name = name : el.name)
//   // res.status(200).send(newDatabse)
// };

// exports.SignUp = async (req, res) => {
//   const { password, email } = req.body;
//   const SignUp = await SignUp.findOne({ email: email });
//   if (!SignUp) res.send(" You don't have any SignUp account, please sign up ");

//   if (SignUp.password === password && SignUp.email === email) {
//     const token = await TokenGenerator({ uid: SignUp._id, expires: 1200 });
//     res.send({ token: token });
//     return;
//   } else {
//     res.send("Invalid password or email");
//     return;
//   }
// };

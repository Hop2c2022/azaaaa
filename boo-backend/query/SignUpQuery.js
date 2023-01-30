const mongoose = require("mongoose");
const SignUpSchema = require("../model/signUp");
const bcrypt = require("bcrypt")

exports.SignUpQuery = async (req, res) => {
  const { password, email } = req.body;
  const salt = bcrypt.genSaltSync(1);
  const hash = bcrypt.hashSync(password, salt);
  const result = await new SignUpSchema({
    password: hash,
    email: email,
  }).save();

  return result;
};

// exports.SignUpPutQuery = async (req) => {
//   const { id } = req.params;
//   const objId = new mongoose.Types.ObjectId(id);
//   const { password, email } = req.body;
//   const result = await new SignUpSchema.findByIdAndUpdate(
//     { _id: objId },
//     {
//       password: password,
//       email: email,
//     }
//   ).save();
//   return result;
// };

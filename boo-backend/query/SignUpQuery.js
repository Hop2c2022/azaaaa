const mongoose = require("mongoose");
const SignUpSchema = require("../model/signUp");

exports.SignUpQuery = async (req, res) => {
  const { password, email } = req.body;

  const result = await SignUpSchema({
    password: password,
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

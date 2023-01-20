const { default: mongoose } = require("mongoose");
const LoginSchema = require("../model/signUp");

exports.LoginQuery = async (req) => {
  const {  password, email } = req.body;
  const result1 = await new LoginSchema({
    password: password,
    email: email,
  }).save();
  return result1;
};

exports.LoginPutQuery = async (req) => {
  const { id } = req.params;
  const objId = new mongoose.Types.ObjectId(id);
  const { password, email} = req.body;
  const result2 = await new UserSchema.findByIdAndUpdate(
    { _id: objId },
    {
      password: password,
      email: email,
    }
  ).save();
  return result2;
};

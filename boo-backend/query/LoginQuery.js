const { default: mongoose } = require("mongoose");
const LoginSchema = require("../model/login");

exports.LoginQuery = async (req) => {
  const {  password, email } = req.body;
  const result = await new LoginSchema({
    password: password,
    email: email,
  }).save();
  return result;
};

exports.LoginPutQuery = async (req) => {
  const { id } = req.params;
  const objId = new mongoose.Types.ObjectId(id);
  const { username, password, email, gender } = req.body;
  const result = await new UserSchema.findByIdAndUpdate(
    { _id: objId },
    {
      password: password,
      email: email,
    }
  ).save();
  return result;
};

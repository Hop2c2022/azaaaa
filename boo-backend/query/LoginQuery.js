const { default: mongoose } = require("mongoose");
const User = require("../model/signUp");

exports.LoginPutQuery = async (req, res) => {
  const { email, password } = req.body;
  const result2 = await User.findOne({ email: email });

  if (password === result2.password && email === result2.email) {
    const token = await TokenGenerator({ uid: result2._id, expires: "1d" });
    res.status(200).send({ token: token });
  } else {
    res.status(400).send({ token: "" });
  }
};

// exports.TokenGenerator = async ({ uid, expires }) => {
//   const payload = { uid: uid }
//   const token = await jwt.sign(payload, process.env.JWT || "lol123", { expiresIn: expires })
//   return token
// }

// exports.TokenChecker = async ({ token, secret }) => {
//   const result = await jwt.verify(token, secret, (err, decoded) => {
//       if(err && err.message === "jwt expired"){
//           return "Expired Token"
//       }else if(err){
//           return "Invalid Token"
//       }
//       return decoded
//   })
//   return result
// }

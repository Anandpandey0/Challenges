import connectDb from "../../../middleware/mongoose";

import User from "../../../Models/User";
var CryptoJS = require("crypto-js");

// connectDb.catch((error) => console.error(error));

export default async function searchuser(req, res) {
  await connectDb();
  const { email } = req.body;
  let user = await User.findOne({ email });
  const bytes = CryptoJS.AES.decrypt(user.password, "akoaskoasdkokopkaskasopk");
  const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
  console.log(originalPassword);
  console.log(req.body.password);

  console.log("Connected");

  try {
    if (user) {
      if (
        user.email === req.body.email &&
        req.body.password === originalPassword
      ) {
        res.status(200).json({
          email: user.email,
          name: user.name,
          phone: user.phone,
          success: true,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "Invalid Credentails",
        });
      }
    } else {
      res.status(404).json({
        success: false,
        message: "Not found",
      });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

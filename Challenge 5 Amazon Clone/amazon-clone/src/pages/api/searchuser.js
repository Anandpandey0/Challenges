import connectDb from "../../../middleware/mongoose";
import mongoose from "mongoose";
import User from "../../../Models/User";
var CryptoJS = require("crypto-js");

// connectDb.catch((error) => console.error(error));

export default async function searchuser(req, res) {
  const { email } = req.body;

  await connectDb();
  // console.log("Connected");

  try {
    const user = await User.findOne({ email });
    if (user) {
      res.status(200).json({
        message: "Email found",
        exists: true,
      });
    } else {
      res.status(200).json({
        message: "Email not found",
        exists: false,
      });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

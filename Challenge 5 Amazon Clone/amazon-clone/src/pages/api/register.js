import connectDb from "../../../middleware/mongoose";
import mongoose from "mongoose";
import User from "../../../Models/User";
var CryptoJS = require("crypto-js");

// connectDb.catch((error) => console.error(error));

export default async function RegisterUser(req, res) {
  const { name, email, phone } = req.body;

  await connectDb();

  try {
    const user = new User({
      name,
      email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        "akoaskoasdkokopkaskasopk"
      ).toString(),
      phone,
    });
    await user.save();
    res.status(201).json({
      name: user.name,
      email: user.email,
      phone: user.phone,
      message: "User Created",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

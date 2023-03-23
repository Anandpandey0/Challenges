// pages/api/stats.js
import dbConnect from "../../../middleware/mongoose";
import User from "../../../Models/User";

import Cart from "../../../Models/CartProduct";

export default async function handler(req, res) {
  try {
    await dbConnect();

    const userCount = await User.countDocuments();
    const orderCount = await Cart.countDocuments();

    res.status(200).json({ userCount, orderCount });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong." });
  }
}

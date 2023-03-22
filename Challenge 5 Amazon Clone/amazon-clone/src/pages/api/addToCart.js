import dbConnect from "../../../middleware/mongoose";
import Cart from "../../../Models/CartProduct";

export default async function addToCart(req, res) {
  const { userEmail, cartItems } = req.body;

  try {
    await dbConnect();
    const existingCart = await Cart.findOne({ userEmail });
    if (existingCart) {
      existingCart.cartItems = existingCart.cartItems.concat(cartItems);
      await existingCart.save();
      res.status(200).json({ cartItems: existingCart.cartItems });
    } else {
      const newCart = new Cart({ userEmail, cartItems });
      await newCart.save();
      res
        .status(200)
        .json({ success: true, message: "Cart added successfully!" });
    }
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
}

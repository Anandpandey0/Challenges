import dbConnect from "../../../middleware/mongoose";
import Cart from "../../../Models/CartProduct";

export default async function getCartItemsByEmail(req, res) {
  const { userEmail } = req.query;
  if (req.method === "GET") {
    try {
      await dbConnect();

      //   const item = await Cart.find({ userEmail: email });
      // const cart = await db.collection("carts").findOne({ userEmail });
      const existingCart = await Cart.findOne({ userEmail });
      if (existingCart) {
        const data = existingCart.cartItems;
        // console.log(existingCart);
        res.status(200).json({ data });
      } else {
        const data = [{ message: "No order Placed" }];
        res.status(400).json({ data });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

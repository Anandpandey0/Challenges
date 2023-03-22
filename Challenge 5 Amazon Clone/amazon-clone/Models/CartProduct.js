const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const cartSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true,
  },
  cartItems: [cartItemSchema],
});
mongoose.models = {};
const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;

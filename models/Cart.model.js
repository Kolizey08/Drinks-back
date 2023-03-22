const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  items: [
    {
      item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      count: Number,
    },
  ],
  totalPrice: Number,
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;

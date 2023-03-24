const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  number: Number,
  items: [
    {
      item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    },
  ],
  date: String,
  address: String,
  phone: String,
  status: String,
  totalPrice: Number,
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;

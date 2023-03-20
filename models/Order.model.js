const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  number: Number,
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  date: {
    type: mongoose.SchemaTypes.Date,
  },
  address: String,
  totalPrice: Number,
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;

const Order = require("../models/Order.model");

module.exports.orderController = {
  addOrder: async (req, res) => {
    try {
      const addedOrder = await Order.create({
        number: req.body.number,
        items: req.body.items,
        date: req.body.date,
        address: req.body.address,
        totalPrice: req.body.totalPrice,
      });
      return res.json(addedOrder);
    } catch (err) {
      return res.json(err);
    }
  },
  getAllOrders: async (req, res) => {
    try {
      const allOrders = await Order.find();
      return res.json(allOrders);
    } catch (err) {
      return res.json(err);
    }
  },
  getOrderById: async (req, res) => {
    try {
      const orderById = await Order.findById(req.params.id);
      return res.json(orderById);
    } catch (err) {
      return res.json(err);
    }
  },
  getOrdersByUsername: async (req, res) => {
    try {
      const ordersByUsername = await Order.find({
        username: req.params.username,
      });
      return res.json(ordersByUsername);
    } catch (err) {
      return res.json(err);
    }
  },
  patchOrderById: async (req, res) => {
    try {
      const patchedOrder = await Order.findByIdAndUpdate(
        req.params.id,
        {
          number: req.body.number,
          items: req.body.items,
          date: req.body.date,
          address: req.body.address,
          totalPrice: req.body.totalPrice,
        },
        { new: true }
      );
      return res.json(patchedOrder);
    } catch (err) {
      return res.json(err);
    }
  },
  deleteOrderById: async (req, res) => {
    try {
      const deletedOrder = await Order.findByIdAndDelete(req.params.id);
      return res.json(deletedOrder);
    } catch (err) {
      return res.json(err);
    }
  },
};

const Cart = require("../models/Cart.model");
const Product = require("../models/Product.model");

module.exports.cartController = {
  createCart: async (req, res) => {
    try {
      const addedCart = await Cart.create({
        user: req.body.user,
        items: [],
        count: 0,
        totalPrice: 0,
      });
      return res.json(addedCart);
    } catch (err) {
      return res.json(err);
    }
  },
  getCartById: async (req, res) => {
    try {
      const cartById = await Cart.findOne({ user: req.params.user }).populate(
        "items.item"
      );
      return res.json(cartById);
    } catch (err) {
      return res.json(err);
    }
  },
  getAllCarts: async (req, res) => {
    try {
      const allCarts = await Cart.find();
      return res.json(allCarts);
    } catch (err) {
      return res.json(err);
    }
  },
  patchCartById: async (req, res) => {
    try {
      const patchedCart = await Cart.findByIdAndUpdate(
        req.params.id,
        {
          items: req.body.items,
        },
        { new: true }
      );
      return res.json(patchedCart);
    } catch (err) {
      return res.json(err);
    }
  },
  addProductToBasket: async (req, res) => {
    try {
      const product = await Product.findById(req.body.item);
      const cart = await Cart.findById(req.params.id);

      const addedProduct = await Cart.findByIdAndUpdate(
        req.params.id,
        {
          $push: {
            items: { item: req.body.item, count: req.body.count },
          },
          totalPrice: cart.totalPrice + product.price * req.body.count,
        },
        { new: true }
      );
      return res.json(addedProduct);
    } catch (err) {
      return res.json(err);
    }
  },
  deleteProductFromBasket: async (req, res) => {
    try {
      const cart = await Cart.findOne({ user: req.params.id });
      const deletetItem = cart.items.find((item) => item._id.toString() === req.body.itemId);
      const product = await Product.findById(deletetItem.item.toString());

      console.log(deletetItem.count);

      const deletedProduct = await Cart.findOneAndUpdate(
        { user: req.params.id },
        {
          $pull: {
            items: {
              _id: req.body.itemId,
            },
          },
          totalPrice: cart.totalPrice - product.price * deletetItem.count,
        },
        { new: true }
      );
      return res.json(deletedProduct);
    } catch (err) {
      return res.json(err);
    }
  },
  deleteCartById: async (req, res) => {
    try {
      const deletedCart = await Cart.findByIdAndDelete(req.params.id);
      return res.json(deletedCart);
    } catch (err) {
      return res.json(err);
    }
  },
};

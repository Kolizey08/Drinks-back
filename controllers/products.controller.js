const Product = require("../models/Product.model");

module.exports.ProductController = {
  addProduct: async (req, res) => {
    try {
      const product = await Product.create({
        image: req.body.image,
        name: req.body.name,
        price: req.body.price,
        expo: req.body.expo,
        weight: req.body.weight,
        category: req.body.category
      });
      res.json(product);
    } catch (error) {
      res.json(error.message);
    }
  },

  changeProduct: async (req, res) => {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, {
        image: req.body.image,
        name: req.body.name,
        price: req.body.price,
        expo: req.body.expo,
        weight: req.body.weight,
        category: req.body.category
      });
      res.json(product);
    } catch (error) {
      res.json(error.message);
    }
  },
  delProduct: async (req, res) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      res.json("Удален");
    } catch (error) {
      res.json(error);
    }
  },
  getProduct: async (req, res) => {
    try {
      const product = await Product.find().populate('category')
      res.json(product)
    } catch (error) {
      res.json(error.message)
    }
  },
  getProductId: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.json(product);
    } catch (error) {}
  },
};

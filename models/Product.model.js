const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    image: String,
    name: String,
    price: Number,
    expo: String,
    weight: Number
});

const Product = mongoose.model('Product', ProductSchema)
module.exports = Product;
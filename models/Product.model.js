const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    image: String,
    name: String,
    price: Number,
    expo: String,
    weight: Number,
    category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Category'
    }
});

const Product = mongoose.model('Product', ProductSchema)
module.exports = Product;
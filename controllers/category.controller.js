const Category = require("../models/Category.model")

module.exports.categoryController = {
    addCategory: async (req, res) => {
        try {
            const category = await Category.create({
                name: req.body.name
            })
            res.json(category)
        } catch (error) {
            res.json(error.message)
        }
    },
    updateCategory: async (req, res) => {
        try {
            const category = await Category.findByIdAndUpdate(req.params.id, {
                name: req.body.name
            })
            res.json(category)
        } catch (error) {
            res.json(error.message)
        }
    },
    deleteCategory: async (req, res) => {
        try {
            const category = await Category.findByIdAndDelete(req.params.id)
            res.json(category)
        } catch (error) {
            res.json(error.message)
        }
    },
    getCategory: async (req, res) => {
        try {
            const category = await Category.find()
            res.json(category)
        } catch (error) {
            res.json(error.message)
        }
    },
    getCategoryId: async (req, res) => {
        try {
            const category = await Category.findById(req.params.id)
            res.json(category)
        } catch (error) {
            res.json(error.message)
        }
    }
}
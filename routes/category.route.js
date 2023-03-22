const { Router } = require("express");
const { categoryController } = require("../controllers/category.controller");

const router = Router()

router.post("/category", categoryController.addCategory)
router.get('/category', categoryController.getCategory)
router.get("/category/:id", categoryController.getCategoryId)
router.patch("/category/:id", categoryController.updateCategory)
router.delete("/category/:id", categoryController.deleteCategory)

module.exports = router
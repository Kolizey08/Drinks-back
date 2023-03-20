const { Router } = require("express");
const { ProductController } = require("../controllers/products.controller");


const router = Router()

router.post("/product", ProductController.addProduct)
router.get("/product/:id", ProductController.getProduct)
router.patch("/product/:id", ProductController.changeProduct)
router.delete("/product/:id", ProductController.delProduct)

module.exports = router
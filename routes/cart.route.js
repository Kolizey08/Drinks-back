const { Router } = require("express");

const { cartController } = require("../controllers/cart.controller");

const router = Router();

router.post("/cart", cartController.createCart);
router.get("/carts", cartController.getAllCarts);
router.get("/cart/:id", cartController.getCartById);
router.patch("/cart/:id", cartController.patchCartById);
router.patch("/cart/addToBasket/:id", cartController.addProductToBasket);
router.patch("/cartdeleteFromBasket//:id", cartController.deleteProductFromBasket);
router.delete("/cart/:id", cartController.deleteCartById);

module.exports = router;
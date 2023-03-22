const { Router } = require("express");

const { cartController } = require("../controllers/cart.controller");

const router = Router();

router.post("/cart", cartController.createCart);
router.get("/carts", cartController.getAllCarts);
router.get("/cart/:user", cartController.getCartById);
router.patch("/cart/update/:id", cartController.patchCartById);
router.patch("/cart/addToBasket/:id", cartController.addProductToBasket);
router.patch(
  "/cart/deleteFromBasket/:id",
  cartController.deleteProductFromBasket
);
router.delete("/cart/delete/:id", cartController.deleteCartById);

module.exports = router;

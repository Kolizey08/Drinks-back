const { Router } = require("express");

const { orderController } = require("../controllers/order.controller");

const router = Router();

router.post("/order/:user", orderController.addOrder);
router.get("/orders", orderController.getAllOrders);
router.get("/orders/:user", orderController.getOrdersById);
router.get("/order/:username", orderController.getOrdersByUsername);
router.patch("/order/update/:id", orderController.patchOrderById);
router.delete("/order/delete/:id", orderController.deleteOrderById);

module.exports = router;

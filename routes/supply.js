const express = require("express");
const router = express.Router();
const supplyController = require("../controllers/supply");

router.get("/", supplyController.index);
router.post("/create", supplyController.create);
router.get("/delete/:id", supplyController.delete);
router.post("/supply_drug/create", supplyController.supply_drug_create);
router.get("/supply_drug/delete/:id", supplyController.supply_drug_delete);
router.post("/order/create", supplyController.order_create);
router.get("/order/delete/:id", supplyController.order_delete);

module.exports = router;

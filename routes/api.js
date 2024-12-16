const express = require("express");
const router = express.Router();
const apiController = require("../controllers/api");

router.post("/login", apiController.login);
router.get(
    "/number_of_sales_process_by_months",
    apiController.number_of_sales_process_by_months
);
router.get(
    "/number_of_sales_revenue_by_months",
    apiController.number_of_sales_revenue_by_months
);
router.get(
    "/number_of_sales_amount_by_months",
    apiController.number_of_sales_amount_by_months
);
router.get(
    "/number_of_orders_placed_from_suppliers",
    apiController.number_of_orders_placed_from_suppliers
);
router.get(
    "/number_of_drugs_sold_by_months",
    apiController.number_of_drugs_sold_by_months
);
router.get("/revenue_by_drugs", apiController.revenue_by_drugs);
router.get("/distribution_of_drugs", apiController.distribution_of_drugs);
router.get("/distribution_of_customer", apiController.distribution_of_customer);

module.exports = router;

const express = require("express");
const router = express.Router();
const apiController = require("../controllers/api");

router.post("/login", apiController.login);
router.get(
    "/number_of_drugs_sold_by_months",
    apiController.number_of_drugs_sold_by_months
);

module.exports = router;

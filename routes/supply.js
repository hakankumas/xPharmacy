const express = require("express");
const router = express.Router();
const supplyController = require("../controllers/supply");

router.get("/", supplyController.index);

module.exports = router;

const express = require("express");
const router = express.Router();
const drugController = require("../controllers/drug");

router.get("/", drugController.index);

module.exports = router;

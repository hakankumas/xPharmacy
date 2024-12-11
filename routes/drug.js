const express = require("express");
const router = express.Router();
const drugController = require("../controllers/drug");

router.get("/", drugController.index);
router.post("/create", drugController.create_drug);
router.get("/delete/:id", drugController.delete_drug);

module.exports = router;

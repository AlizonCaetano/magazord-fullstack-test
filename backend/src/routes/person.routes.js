const express = require("express");
const router = express.Router();
const PersonController = require("../controllers/PersonController");

router.get("/", PersonController.findAll);

module.exports = router;

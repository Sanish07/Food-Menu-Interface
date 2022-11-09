const express = require("express");
const router = express.Router();

const MainController = require("../controllers/MainController");

router.get("/", MainController.controllers.home);

module.exports = router;
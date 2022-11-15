const express = require("express");
const router = express.Router();

const MainController = require("../controllers/MainController");

router.get("/", MainController.controllers.home);
router.get("/food/:foodId", MainController.controllers.foodPage);
router.get("/shop/:shopId", MainController.controllers.shopPage);

module.exports = router;
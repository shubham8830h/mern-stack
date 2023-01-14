const express = require("express");
const router = express.Router();
const controller = require("../controller/controller");

router.post("/insrt", controller.postMethod);
router.get("/read", controller.readData);


module.exports = router;

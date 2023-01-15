const express = require("express");
const router = express.Router();
const controller = require("../controller/controller");

router.post("/insrt", controller.postMethod);
router.get("/read", controller.readData);
router.put("/update", controller.updateData);
router.delete("/delete/:id", controller.deleteData);

module.exports = router;

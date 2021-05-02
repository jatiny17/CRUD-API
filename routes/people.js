const express = require("express");
const router = express.Router();
const dataFunction = require("../controller/people")

router.get("/", dataFunction.getData);
router.post("/", dataFunction.addData);
router.put("/:id", dataFunction.updateData);
router.delete("/:id", dataFunction.deleteData);

module.exports = router;
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.index);
router.get("/new", userController.new);
router.post("/", userController.create);
router.get("/:id", userController.show);
router.get("/:id/edit", userController.edit);
router.post("/:id", userController.update);
router.post("/:id/delete", userController.destroy);

module.exports = router;

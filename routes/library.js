const express = require("express");
const router = express.Router();
const libraryController = require("../controllers/libraryController");

router.get("/", libraryController.index);
router.get("/new", libraryController.new);
router.post("/", libraryController.create);
router.get("/:id", libraryController.show);
router.get("/:id/edit", libraryController.edit);
router.post("/:id", libraryController.update);
router.post("/:id/delete", libraryController.destroy);

module.exports = router;

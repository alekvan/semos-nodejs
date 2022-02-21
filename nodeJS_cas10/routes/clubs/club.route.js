const express = require("express");
const router = express.Router();
const controller = require("./club.controller");

router
  .get("/", controller.getAll)
  .get("/create", controller.getAddClub)
  .get("/:id/view", controller.getPdfView)
  .post("/", controller.addClub)
  .get("/:id", controller.getPatchClubId)
  .post("/:id", controller.patchClubById)
  .delete("/:id", controller.deleteClubById);

module.exports = router;

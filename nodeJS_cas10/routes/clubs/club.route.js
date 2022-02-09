const express = require("express");
const router = express.Router();
const controller = require("./club.controller");

router
  .get("/", controller.getAll)
  .get("/create", controller.getAddClub)
  .post("/", controller.addClub)
  .get("/:id/update", controller.getPatchClubId)
  .post("/:id/update", controller.patchClubById)
  .get("/:id", controller.deleteClubById);

module.exports = router;

const express = require("express");
const router = express.Router();
const controller = require("./club.api.controller");

router
  .get("/", controller.getAllClubs)
  .post("/", controller.addNewClub)
  .patch("/:id", controller.modifyClubById)
  .delete("/:id", controller.removeClubById);

module.exports = router;

const express = require("express");
const clubsRouter = express.Router();
const controller = require("./club.controller");

clubsRouter
  .get("/", controller.getAllClubs)
  .post("/", controller.addNewClub)
  .patch("/:id", controller.modifyClubById)
  .delete("/:id", controller.removeClubById);

module.exports = clubsRouter;

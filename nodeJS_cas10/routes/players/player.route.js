const express = require("express");
const playersRouter = express.Router();
const controller = require("./player.controller");

playersRouter
  .get("/", controller.getAllPlayers)
  .post("/", controller.addNewPlayer)
  .delete("/:id", controller.removePlayerById)
  .patch("/:id", controller.modifyPlayerById)
  .get("/:id", controller.getPlayerById);

module.exports = playersRouter;

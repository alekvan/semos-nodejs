const express = require("express");
const playersRouter = express.Router();
const controller = require("./player.controller");

playersRouter
  .get("/", controller.getAll)
  .get("/create", controller.getAddPlayer)
  .post("/", controller.addPlayer)
  .get("/:id/delete", controller.deletePlayerById)
  .post("/:id/update", controller.patchPlayerById)
  .get("/:id", controller.getPlayer);

module.exports = playersRouter;

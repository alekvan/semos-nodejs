const express = require("express");
const playersRouter = express.Router();
const controller = require("./player.controller");

playersRouter
  .get("/", controller.getAll)
  .get("/create", controller.getAddPlayer)
  .post("/", controller.addPlayer)
  .delete("/:id", controller.deletePlayerById)
  .get("/:id", controller.getPatchPlayerById)
  .post("/:id", controller.patchPlayerById)
  .get("/:id", controller.getPlayer);

module.exports = playersRouter;

const express = require("express");
const router = express.Router();
const controller = require("./player.api.controller");

router
  .get("/", controller.getAllPlayers)
  .post("/", controller.addNewPlayer)
  .delete("/:id", controller.removePlayerById)
  .patch("/:id", controller.modifyPlayerById)
  .get("/:id", controller.getPlayerById);

module.exports = router;

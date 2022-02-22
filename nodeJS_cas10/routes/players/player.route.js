const express = require("express");
const playersRouter = express.Router();
const controller = require("./player.controller");

playersRouter
  .get("/", controller.getAll)
  .get("/create", controller.getAddPlayer)
  .get("/:id", controller.getPatchPlayerById)
  .get("/:id/view", controller.getPdfView)
  .get("/:id/print", controller.generatePdf)
  .get("/:id/download", controller.getDownloadPdf)
  .get("/:id/email", controller.writeEmail)
  .post("/:id/email", controller.sendMail)
  .post("/", controller.addPlayer)
  .post("/:id", controller.patchPlayerById)
  .delete("/:id", controller.deletePlayerById);

module.exports = playersRouter;

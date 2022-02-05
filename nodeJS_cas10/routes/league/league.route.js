const express = require("express");
const leagueRouter = express.Router();
const controller = require("./league.controller");

leagueRouter
  .get("/", controller.getAllLeagues)
  .get("/:id", controller.getLeagueById)
  .post("/", controller.addLeague)
  .patch("/:id", controller.modifyLeagueById)
  .delete("/:id", controller.removeLeagueById);

module.exports = leagueRouter;

const express = require("express");
const coachRouter = express.Router();
const controller = require("./coach.controller");

coachRouter
  .get("/", controller.getAllCoaches)
  // .post("/", controller.addNewCoach)
  .delete("/:id", controller.removeCoachById)
  .patch("/:id", controller.modifyCoachById)
  .get("/:id", controller.getCoachById);

module.exports = coachRouter;

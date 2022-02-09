const express = require("express");
const coachRouter = express.Router();
const controller = require("./coach.controller");

coachRouter
  .get("/", controller.getAllCoaches)
  .get("/create", controller.getAddCoach)
  .post("/", controller.addCoach)
  .get("/:id", controller.removeCoachById)
  .get("/:id/update", controller.getModifyCoach)
  .post("/:id/update", controller.modifyCoachById)
  .get("/:id", controller.getCoachById);

module.exports = coachRouter;

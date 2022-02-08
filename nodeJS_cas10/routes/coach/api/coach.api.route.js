const express = require("express");
const router = express.Router();
const controller = require("./coach.api.controller");

router
  .get("/", controller.getAllCoaches)
  .post("/", controller.addNewCoach)
  .delete("/:id", controller.removeCoachById)
  .patch("/:id", controller.modifyCoachById)
  .get("/:id", controller.getCoachById);

module.exports = router;

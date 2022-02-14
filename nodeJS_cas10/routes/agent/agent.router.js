const express = require("express");
const router = express.Router();
const controller = require("./agent.controller");

router
  .get("/", controller.getAll)
  .get("/create", controller.getCreateAgent)
  .post("/", controller.createAgent)
  .get("/:id", controller.getUpdateAgentById)
  .delete("/:id", controller.deleteAgent)
  .post("/:id", controller.updateAgentById);

module.exports = router;

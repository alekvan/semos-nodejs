const express = require("express");
const userRouter = express.Router();
const controller = require("../../controllers/user.controller");

userRouter
  .get("/", controller.allUsers)
  .post("/", controller.createUser)
  .delete("/:id", controller.deleteUser);

module.exports = userRouter;

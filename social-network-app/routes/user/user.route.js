const express = require("express");
const userRouter = express.Router();
const controller = require("../../controllers/user.controller");

userRouter.get("/", controller.allUsers).post("/", controller.createUser);

module.exports = userRouter;

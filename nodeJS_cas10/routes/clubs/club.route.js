const express = require("express");
const router = express.Router();
const controller = require("./club.controller");

router
  .get("/", controller.getAllClubs)
  .post("/", controller.addNewClub)
  .patch("/:id", controller.modifyClubById)
  .delete("/:id", controller.removeClubById);

const express = require("express");

const studentsController = require("../controllers/students.controller");

const studentsRouter = express.Router();

studentsRouter.get("/", studentsController.listAllStudents);
studentsRouter.get("/:course", studentsController.sameCourseStudents);
studentsRouter.get("/year/:year", studentsController.sameYearStudents);
studentsRouter.post("/", studentsController.addNewStudents);

module.exports = studentsRouter;

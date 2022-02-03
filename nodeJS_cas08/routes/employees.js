var express = require("express");
var router = express.Router();
const controller = require("../controller/employees");

// CRUD operations: Create Read Update Delete

router
  .get("/", controller.getAllEmployees)
  .get("/:id", controller.getEmployeeById)
  .post("/", controller.createNewEmployee)
  .patch("/:id", controller.modifyEmployeeById)
  .delete("/:id", controller.deleteEmployeeById);

module.exports = router;

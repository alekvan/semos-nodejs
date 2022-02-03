const express = require("express");
const router = express.Router();
const controller = require("../controller/company-controller");

router
  .get("/", controller.getAllCompanies)
  .post("/", controller.addNewCompany)
  .delete("/:id", controller.removeCompanyById)
  .patch("/:id", controller.modifyCompanyById);

module.exports = router;

const Company = require("../models/company");

const getAllCompanies = async (req, res) => {
  const company = await Company.find();

  res.send({
    error: false,
    message: "All companies from the database",
    company: company,
  });
};

const addNewCompany = async (req, res) => {
  const company = Company.create(req.body);

  res.send({
    error: false,
    message: "Added new company to database",
    company: company,
  });
};

const modifyCompanyById = async (req, res) => {
  await Company.findByIdAndUpdate(req.params.id, req.body);
  const company = await Company.findById(req.params.id);

  res.send({
    error: false,
    message: `Successfully modified company with id ${company._id}`,
    company: company,
  });
};

const removeCompanyById = async (req, res) => {
  await Company.findByIdAndDelete(req.params.id);

  res.send({
    error: false,
    message: `Successfully removed company with id ${company._id}`,
    company: company,
  });
};

module.exports = {
  getAllCompanies,
  modifyCompanyById,
  removeCompanyById,
  addNewCompany,
};

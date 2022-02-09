const Coach = require("../../models/coach.model");
const Country = require("../../models/countries.model");

const getAllCoaches = async (req, res) => {
  const coaches = await Coach.find();

  res.render("coaches/index", { coaches });
};

const getAddCoach = async (req, res) => {
  const country = await Country.find();

  res.render("coaches/create", { country });
};

const addCoach = async (req, res) => {
  const coach = await Coach.create(req.body);

  res.redirect("/coaches");
};

const removeCoachById = async (req, res) => {
  await Coach.findByIdAndDelete(req.params.id);

  res.redirect("/coaches");
};

const getModifyCoach = async (req, res) => {
  const coach = await Coach.findById(req.params.id);
  const country = await Country.find();
  res.render("coaches/edit", { coach, country });
};

const modifyCoachById = async (req, res) => {
  await Coach.findByIdAndUpdate(req.params.id, req.body);

  res.redirect("/coaches");
};

const getCoachById = async (req, res) => {
  const coach = await Coach.findById(req.params.id);

  res.send({
    error: false,
    message: `Coach with id ${coach._id} has been fetched`,
    coach: coach,
  });
};

module.exports = {
  getAllCoaches,
  getAddCoach,
  removeCoachById,
  modifyCoachById,
  getCoachById,
  getModifyCoach,
  addCoach,
};

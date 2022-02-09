const Club = require("../../models/club.model");
const Country = require("../../models/countries.model");

const getAll = async (req, res) => {
  const clubs = await Club.find();

  res.render("clubs/index", { clubs });
};

const getAddClub = async (req, res) => {
  const country = await Country.find();

  res.render("clubs/create", { country });
};

const addClub = async (req, res) => {
  await Club.create(req.body);

  res.redirect("/clubs");
};

const getPatchClubId = async (req, res) => {
  const clubUpdate = await Club.findById(req.params.id);
  const country = await Country.find();
  res.render("clubs/edit", { club: clubUpdate, country });
};

const patchClubById = async (req, res) => {
  await Club.findByIdAndUpdate(req.params.id, req.body);

  res.redirect("/clubs");
};

const deleteClubById = async (req, res) => {
  await Club.findByIdAndDelete(req.params.id);

  res.redirect("/clubs");
};

module.exports = {
  getAll,
  getAddClub,
  addClub,
  deleteClubById,
  patchClubById,
  getPatchClubId,
};

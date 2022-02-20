const Club = require("../../models/club.model");
const Country = require("../../models/countries.model");
const Player = require("../../models/player.model");

const getAll = async (req, res) => {
  const clubs = await Club.find().populate("country");
  const players = await Player.find();
  res.render("clubs/index", { clubs, players });
};

const getAddClub = async (req, res) => {
  const countries = await Country.find();

  res.render("clubs/create", { countries });
};

const addClub = async (req, res) => {
  await Club.create(req.body);

  res.redirect("/clubs");
};

const getPatchClubId = async (req, res) => {
  const countries = await Country.find();
  const club = await Club.findById(req.params.id);

  res.render("clubs/edit", { club, countries });
};

const patchClubById = async (req, res) => {
  await Club.findByIdAndUpdate(req.params.id, req.body);

  res.redirect("/clubs");
};

const deleteClubById = async (req, res) => {
  await Club.findByIdAndDelete(req.params.id);

  res.status(200).send({});
};

module.exports = {
  getAll,
  getAddClub,
  addClub,
  deleteClubById,
  patchClubById,
  getPatchClubId,
};

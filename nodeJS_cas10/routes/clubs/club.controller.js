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
  const club = await Club.create(req.body);

  res.send({
    error: false,
    message: "New club has been created",
    club: club,
  });
};

const patchClubById = async (req, res) => {
  await Club.findByIdAndUpdate(req.params.id, req.body);
  const modifiedClub = await Club.findById(req.params.id);

  res.send({
    error: false,
    message: `Club with id ${modifiedClub._id} has been updated`,
    club: modifiedClub,
  });
};

const deleteClubById = async (req, res) => {
  await Club.findByIdAndDelete(req.params.id);

  res.send({
    error: false,
    message: `Club with id #${req.params.id} has been deleted`,
  });
};

module.exports = {
  getAll,
  getAddClub,
  addClub,
  deleteClubById,
  patchClubById,
};

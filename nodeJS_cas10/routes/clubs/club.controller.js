const Club = require("../../models/club.model");

const getAllClubs = async (req, res) => {
  const club = await Club.find();

  res.send({
    error: false,
    message: "All club from the database",
    club: club,
  });
};

const addNewClub = async (req, res) => {
  const club = await Club.create(req.body);

  res.send({
    error: false,
    message: "New club has been created",
    club: club,
  });
};

const modifyClubById = async (req, res) => {
  await Club.findByIdAndUpdate(req.params.id, req.body);
  const modifiedClub = await Club.findById(req.params.id);

  res.send({
    error: false,
    message: `Club with id ${modifiedClub._id} has been updated`,
    club: modifiedClub,
  });
};

const removeClubById = async (req, res) => {
  await Club.findByIdAndDelete(req.params.id);

  res.send({
    error: false,
    message: `Club with id #${req.params.id} has been deleted`,
  });
};

module.exports = {
  getAllClubs,
  addNewClub,
  removeClubById,
  modifyClubById,
};

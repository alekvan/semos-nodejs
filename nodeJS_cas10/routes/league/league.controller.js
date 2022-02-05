const { sendStatus } = require("express/lib/response");
const League = require("../../models/league.model");

const getAllLeagues = async (req, res) => {
  const league = await League.find();

  res.send({
    error: false,
    message: `All leagues`,
    league: league,
  });
};

const getLeagueById = async (req, res) => {
  const requestedLeagueWithId = await League.findById(req.params.id);

  res.send({
    error: false,
    message: `League with id ${req.body._id} has been fetched`,
    league: requestedLeagueWithId,
  });
};

const addLeague = async (req, res) => {
  const createdLeague = await League.create(req.body);

  res.send({
    error: sendStatus(200),
    message: `New league has been added`,
    league: createdLeague,
  });
};

const modifyLeagueById = async (req, res) => {
  await League.findByIdAndUpdate(req.params.id, req.body);
  const league = await League.findById(req.params.id);

  res.send({
    error: false,
    message: `League with id ${req.body._id} has been modified`,
    league: league,
  });
};

const removeLeagueById = async (req, res) => {
  await League.findByIdAndRemove(req.params.id);

  res.send({
    error: false,
    message: `League with id ${req.body._id} has been deleted`,
  });
};

module.exports = {
  getAllLeagues,
  getLeagueById,
  addLeague,
  removeLeagueById,
  modifyLeagueById,
};

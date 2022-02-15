const Player = require("../../models/player.model");
const Club = require("../../models/club.model");
const Agent = require("../../models/agent.model");
const res = require("express/lib/response");

const getAll = async (req, res) => {
  const players = await Player.find().populate("club", "name");

  res.render("players/index", { players });
};

const addPlayer = async (req, res) => {
  const players = await Player.create(req.body);

  if (req.body.agent) {
    await Agent.findByIdAndUpdate(req.body.agent, {
      $push: { players: players },
    });
  }

  res.redirect("players");
};

const getAddPlayer = async (req, res) => {
  const clubs = await Club.find();
  const agents = await Agent.find();
  res.render("players/create", { clubs, agents });
};

const deletePlayerById = async (req, res) => {
  await Player.findByIdAndDelete(req.params.id);

  res.end();
};

const getPatchPlayerById = async (req, res) => {
  const clubs = await Club.find();
  const agents = await Agent.find();
  const player = await Player.findById(req.params.id).populate("club", "name");

  res.render("players/edit", { player, clubs, agents });
};

const patchPlayerById = async (req, res) => {
  await Player.findByIdAndUpdate(req.params.id, req.body);

  res.redirect("players");
};

const getPlayer = async (req, res) => {
  const player = await Player.findById(req.params.id);

  res.send({
    error: false,
    message: `Player with id ${player._id} has been fetched`,
    player: player,
  });
};

module.exports = {
  getAll,
  addPlayer,
  deletePlayerById,
  patchPlayerById,
  getPlayer,
  getAddPlayer,
  getPatchPlayerById,
};

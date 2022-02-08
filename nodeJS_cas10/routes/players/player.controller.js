const Player = require("../../models/player.model");
const Club = require("../../models/club.model");

const getAll = async (req, res) => {
  const players = await Player.find();

  res.render("players/index", { players });
};

const addPlayer = async (req, res) => {
  const players = await Player.create(req.body);

  Club.updateOne(
    { _id: req.body.club }, // query matching , refId should be "ObjectId" type
    { $push: { players: players } } //single object will be pushed to players
  ).exec(function (err) {
    console.log(err);
  });

  res.redirect("players");
};

const getAddPlayer = (req, res) => {
  res.render("players/create", { country });
};

const deletePlayerById = async (req, res) => {
  const player = await Player.findById(req.params.id);
  await Player.findByIdAndDelete(req.params.id);

  res.send({
    error: false,
    message: `Player with id #${req.params.id} has been deleted`,
    player: player,
  });
};

const patchPlayerById = async (req, res) => {
  await Player.findByIdAndUpdate(req.params.id, req.body);
  const player = await Player.findById(req.params.id);
  res.send({
    error: false,
    message: `Player with id #${req.params.id} has been modified`,
    player: player,
  });
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
};

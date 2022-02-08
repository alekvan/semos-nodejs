const Player = require("../../../models/player.model");
const Club = require("../../../models/club.model");

const getAllPlayers = async (req, res) => {
  if (req.query.first_name && req.query.last_name) {
    const players = await Player.find({
      first_name: req.query.first_name,
      last_name: req.query.last_name,
    });

    res.send({
      error: false,
      message: `All players with first name ${req.query.first_name} and last name ${req.query.last_name}`,
      players: players,
    });
    return;
  }

  const players = await Player.find().populate("club", "name");

  res.send({
    error: false,
    message: "All players from the database",
    players: players,
  });
};

const addNewPlayer = async (req, res) => {
  const players = await Player.create(req.body);
  // Club.updateOne({ _id: req.body.club })
  //   .populate("players")
  //   .exec(function (err, club) {
  //     if (err) return handleError(err);
  //     console.log("The player name is %s", club);
  //     console.log(err);
  //   });
  // Club.findOne(req.body.club).exec(function (err, club) {
  //   club.players.push(players);
  //   club.save(function (err) {
  //     // something here
  //   });
  // });
  await Club.updateOne(
    { _id: req.body.club }, // query matching , refId should be "ObjectId" type
    { $push: { players: players } } //single object will be pushed to attachemnts
  )
    .exec(function (err) {
      console.log(err);
    })
    .populate("players");
  res.send({
    error: false,
    message: "New players has been created",
    player: players,
  });
};

const removePlayerById = async (req, res) => {
  const player = await Player.findById(req.params.id);
  await Player.findByIdAndDelete(req.params.id);

  res.send({
    error: false,
    message: `Player with id #${req.params.id} has been deleted`,
    player: player,
  });
};

const modifyPlayerById = async (req, res) => {
  await Player.findByIdAndUpdate(req.params.id, req.body);
  const player = await Player.findById(req.params.id);
  res.send({
    error: false,
    message: `Player with id #${req.params.id} has been modified`,
    player: player,
  });
};

const getPlayerById = async (req, res) => {
  const player = await Player.findById(req.params.id);

  res.send({
    error: false,
    message: `Player with id ${player._id} has been fetched`,
    player: player,
  });
};

module.exports = {
  getAllPlayers,
  addNewPlayer,
  removePlayerById,
  modifyPlayerById,
  getPlayerById,
};

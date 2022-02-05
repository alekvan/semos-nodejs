const Player = require("../../models/player.model");

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

  const players = await Player.find();

  res.send({
    error: false,
    message: "All players from the database",
    players: players,
  });
};

const addNewPlayer = async (req, res) => {
  const players = await Player.create(req.body);

  res.send({
    error: false,
    message: "New players has been created",
    player: players,
  });
};

const removePlayerById = async (req, res) => {
  await Player.findByIdAndDelete(req.params.id);

  res.send({
    error: false,
    message: `Player with id #${req.params.id} has been deleted`,
  });
};

const modifyPlayerById = async (req, res) => {
  await Player.findByIdAndUpdate(req.params.id, req.body);

  res.send({
    error: false,
    message: `Player with id #${req.params.id} has been modified`,
  });
};

module.exports = {
  getAllPlayers,
  addNewPlayer,
  removePlayerById,
  modifyPlayerById,
};

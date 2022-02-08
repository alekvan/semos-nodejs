const Coach = require("../../../models/coach.model");

const getAllCoaches = async (req, res) => {
  const coaches = await Coach.find();

  res.send({
    error: false,
    message: "All coaches from the database",
    coaches: coaches,
  });
};

const addNewCoach = async (req, res) => {
  const coaches = await Coach.create(req.body);

  res.send({
    error: false,
    message: "New coaches has been created",
    player: coaches,
  });
};

const removeCoachById = async (req, res) => {
  const player = await Coach.findById(req.params.id);
  await Coach.findByIdAndDelete(req.params.id);

  res.send({
    error: false,
    message: `Coach with id #${req.params.id} has been deleted`,
    player: player,
  });
};

const modifyCoachById = async (req, res) => {
  await Coach.findByIdAndUpdate(req.params.id, req.body);
  const player = await Coach.findById(req.params.id);
  res.send({
    error: false,
    message: `Coach with id #${req.params.id} has been modified`,
    player: player,
  });
};

const getCoachById = async (req, res) => {
  const player = await Coach.findById(req.params.id);

  res.send({
    error: false,
    message: `Coach with id ${player._id} has been fetched`,
    player: player,
  });
};

module.exports = {
  getAllCoaches,
  addNewCoach,
  removeCoachById,
  modifyCoachById,
  getCoachById,
};

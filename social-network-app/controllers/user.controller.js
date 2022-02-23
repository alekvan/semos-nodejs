const User = require("../models/user.model");

const allUsers = async (req, res) => {
  const listUsers = await User.find();
  console.log(listUsers);

  res.send(listUsers);
};

const createUser = async (req, res) => {
  await User.create(req.body);

  res.send({ message: "User created" });
};

const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);

  res.send(`User with ID#${req.params.id} has been deleted!`);
};

module.exports = {
  allUsers,
  createUser,
  deleteUser,
};

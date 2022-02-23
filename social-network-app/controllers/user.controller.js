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

module.exports = {
  allUsers,
  createUser,
};

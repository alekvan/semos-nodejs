const Agent = require("../../models/agent.model");

const getAll = async (req, res) => {
  const agents = await Agent.find();

  res.render("agents/index", { agents });
};

const createAgent = async (req, res) => {
  await Agent.create(req.body);

  res.redirect("/agents");
};

const getCreateAgent = async (req, res) => {
  const agents = await Agent.findById(req.params.id);

  res.render("agents/create");
};

const updateAgentById = async (req, res) => {
  await Agent.findByIdAndUpdate(req.params.id, req.body);

  res.redirect("/agents");
};

const getUpdateAgentById = async (req, res) => {
  const agents = await Agent.findById(req.params.id);

  res.render("agents/edit", { agents });
};

const deleteAgent = async (req, res) => {
  await Agent.findByIdAndDelete(req.params.id);

  res.redirect("/agents");
};

module.exports = {
  getAll,
  getCreateAgent,
  getUpdateAgentById,
  createAgent,
  deleteAgent,
  updateAgentById,
};

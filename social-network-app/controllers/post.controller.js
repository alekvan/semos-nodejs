const Post = require("../models/post.model");

const allPosts = async (req, res) => {
  const listPosts = await Post.find();
  console.log(listPosts);

  res.send(listPosts);
};

const createPost = async (req, res) => {
  await Post.create(req.body);

  res.send({ message: "Post created" });
};

const getPostById = async (req, res) => {
  const postById = await Post.findById(req.params.id);
};

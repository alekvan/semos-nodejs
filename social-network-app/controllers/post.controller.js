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

  res.send(postById);
};

const updatePost = async (req, res) => {
  const beforeUpdatePost = await Post.findById(req.params.id);
  await Post.findByIdAndUpdate(req.params.id, req.body);
  const afterUpdatePost = await Post.findById(req.params.id);

  res.send({
    message: `Post with ID#${req.params.id} has been updated!`,
    oldPost: `Before update ${beforeUpdatePost}`,
    newPost: `After update ${afterUpdatePost}`,
  });
};

const deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);

  res.send({ message: `Post with ID#${req.params.id} has been deleted!` });
};

module.exports = {
  allPosts,
  createPost,
  getPostById,
  updatePost,
  deletePost,
};

const express = require("express");
const postRouter = express.Router();
const controller = require("../../controllers/post.controller");

postRouter
  .get("/", controller.allPosts)
  .post("/", controller.createPost)
  .get("/:id", controller.getPostById)
  .post("/:id", controller.updatePost)
  .delete("/:id", controller.deletePost);

module.exports = postRouter;

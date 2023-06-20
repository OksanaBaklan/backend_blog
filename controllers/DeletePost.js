/** @format */

import Post from "../models/PostsModel.js";

export const deletePost = async (req, res) => {
  const postId = req.params.postId;

  await Post.findOneAndDelete({ _id: postId, owner: req.userId });
  res.status(201).json("delete POST");
};

/** @format */
import mongoose from "mongoose";
import Post from "../models/PostsModel.js";

export const getAllPosts = async (req, res) => {
  const result = await Post.find().populate("owner");
  res.status(200).json(result);
};

export const singlePostDetails = async (req, res) => {
  const { postId } = req.params;

  if (!mongoose.isValidObjectId(postId)) {
    const err = new Error("Post id is not Valid");
    err.statusCode = 400;
    throw err;
  }

  const result = await Post.findById(postId);

  if (!result) {
    const err = new Error("Post not Found");
    err.statusCode = 404;
    throw err;
  }
  res.status(200).json(result);
};

export const createPost = async (req, res) => {
  const { title, description, content } = req.body;
  const owner = req.userId;
  const newPost = await Post.create({
    title,
    description,
    owner,
    content,
  });
  res.status(201).json(newPost);
};

export const updatePost = async (req, res) => {
  const { title, description, content, postId } = req.body;
  // console.log(title);
  const bodyOfRequest = {
    title,
    description,
    content,
  };
  const updateData = {};
  /* Looping through the newly created object bodyOfRequest to check which field need to be updated on database */
  for (const [key, value] of Object.entries(bodyOfRequest)) {
    if (value) {
      updateData[key] = value;
    }
  }
  // console.log(updateData);
  const result = await Post.findOneAndUpdate(
    { _id: postId, owner: req.userId },
    updateData
  );
  res.status(201).send("Post updated successfully");
};

/** @format */

import express from "express";
import { deletePost } from "../controllers/DeletePost.js";
import globalTryCatchHandler from "../controllers/errorControllers.js";

import {
  getAllPosts,
  singlePostDetails,
  createPost,
  updatePost,
} from "../controllers/PostControllers.js";
import { authorizationHandler } from "../utils/authorization.js";

const router = express.Router();

router.post(
  "/create-post",
  authorizationHandler,
  globalTryCatchHandler(createPost)
);
router.get("/all-posts", globalTryCatchHandler(getAllPosts));
router.get("/post-details/:postId", globalTryCatchHandler(singlePostDetails));
router.delete(
  "/delete-post/:postId",
  authorizationHandler,
  globalTryCatchHandler(deletePost)
);
router.put(
  "/update-post",
  authorizationHandler,
  globalTryCatchHandler(updatePost)
);

export default router;

import { Router } from "express";
import {
  getPosts,
  getPostId,
  createNewPost,
  updatePost,
  deletePost,
  likePost,
  allPost,
} from "../controllers/postControllers.js";

const router = Router();

router.get("/posts", getPosts);
router.get("/posts/:id", getPostId);
router.post("/posts", createNewPost);
router.put("/posts/:id", updatePost);
router.delete("/posts/:id", deletePost);
router.put("/posts/like/:id", likePost);
router.all("*", allPost);

export default router;

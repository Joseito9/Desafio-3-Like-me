import * as sql from "../server/models/post.dao.js";
import { errorHandler } from "../helpers/errorHandler.js";

export const getPosts = (_, res) => {
  sql
    .findPost()
    .then((result) => res.status(200).json(result))
    .catch((error) =>
      errorHandler(res, error, "An error occurred while fetching posts.")
    );
};
export const getPostId = (req, res) => {
  sql
    .findPostById(req.params.id)
    .then((result) =>
      res.status(200).json({ status: true, code: 200, message: result })
    )
    .catch((error) =>
      errorHandler(res, error, "An error occurred while fetching the post.")
    );
};

export const createNewPost = (req, res) => {
  sql
    .createPost(req.body.titulo, req.body.img, req.body.descripcion)
    .then((result) =>
      res.status(201).json({ status: true, code: 200, message: result })
    )
    .catch((error) =>
      errorHandler(res, error, "An error occurred while creating the post.")
    );
};

export const updatePost = (req, res) => {
  sql
    .updatePost(
      req.params.id,
      req.body.titulo,
      req.body.img,
      req.body.descripcion
    )
    .then((result) =>
      res.status(201).json({ status: true, code: 201, message: result })
    )
    .catch((error) =>
      errorHandler(res, error, "An error occurred while updating the post.")
    );
};

export const deletePost = (req, res) => {
  sql
    .deletePost(req.params.id)
    .then((result) =>
      res.status(201).json({ status: true, code: 201, message: result })
    )
    .catch((error) =>
      errorHandler(res, error, "An error occurred while deleting the post.")
    );
};

export const likePost = (req, res) => {
  sql
    .likePost(req.params.id)
    .then((result) => res.status(201).json(result))
    .catch((error) =>
      res.status(500).json({
        status: false,
        code: 404,
        message:
          "An internal server error occurred while trying to like the post. Please try again later.",
      })
    );
};

export const allPost = (_, res) =>
  res.status(404).json({
    status: false,
    code: 404,
    message:
      "The requested page could not be found. Please check the URL and try again.",
  });

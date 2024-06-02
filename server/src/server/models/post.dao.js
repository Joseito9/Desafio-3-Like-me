import db from "../database/db.js";

export const findPost = () => db("SELECT * FROM posts");

export const findPostById = (id) =>
  db("SELECT * FROM posts WHERE id = $1;", [id]);

export const createPost = (titulo, img, descripcion) =>
  db(
    "INSERT INTO posts (id, titulo, img, descripcion, likes) VALUES (DEFAULT, $1, $2,$3,0) RETURNING *",
    [titulo, img, descripcion]
  );

export const updatePost = (id, titulo, img, descripcion) =>
  db(
    "UPDATE posts SET titulo = $1, img = $2, descripcion = $3 WHERE id = $4 RETURNING *;",
    [titulo, img, descripcion, id]
  );

export const deletePost = (id) =>
  db("DELETE FROM posts WHERE id = $1 RETURNING *;", [id]);

export const likePost = (id) =>
  db("UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *;", [id]);

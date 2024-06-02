-- DROP DATABASE likeme;

CREATE DATABASE likeme;

\c likeme;

-- DROP TABLE posts; 

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(25),
    img VARCHAR(1000),
    descripcion VARCHAR(255),
    likes INT
);


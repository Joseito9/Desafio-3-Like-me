import cors from "cors";
import express from "express";
import router from "../routes/postRoutes.js";
import { logger } from "logger-express";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(cors());
app.use(express.json());
app.use(logger());
app.use("/", router);

app.listen(PORT, () =>
  console.log(` 
  Server UP on http://localhost:${PORT}`)
);

export default app;

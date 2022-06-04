import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose, { ConnectOptions } from "mongoose";
dotenv.config();

import { DB, PORT } from "./env";
//
// const { PORT, DB } = process.env;

const app = express();

app.use(cors());

mongoose
  .connect(DB!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log("Database connected");
    });
  })
  .catch((error) => console.log(error));

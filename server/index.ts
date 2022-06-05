import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose, { ConnectOptions } from "mongoose";
dotenv.config();
const app = express();

//env file importing
import { DB, PORT } from "./env";
// const { PORT, DB } = process.env;

// middle ware
app.use(cors());
app.use(express.json());

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

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { readdirSync } from "fs";
import mongoose, { ConnectOptions } from "mongoose";
import { v2 as cloudinary } from "cloudinary";
dotenv.config();
const app = express();

//env file importing
import { CLOUD_API, CLOUD_NAME, CLOUD_SECRET, DB, PORT } from "./env";

// middle ware
app.use(cors());
app.use(express.json());

// cloudinary config
cloudinary.config({
  api_key: CLOUD_API,
  api_secret: CLOUD_SECRET,
  cloud_name: CLOUD_NAME,
});

// calling all routes
const routesPath = path.join(__dirname, "./routes");
readdirSync(routesPath).forEach(async (filename) => {
  let routes = path.join(routesPath, filename);
  try {
    const item = await import(routes);
    app.use("/api", item.default);
  } catch (error) {
    console.log(error);
  }
});

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

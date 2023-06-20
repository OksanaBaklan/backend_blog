/** @format */

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRouter from "./routes/UserRoutes.js";
import postRouter from "./routes/PostRoutes.js";
import authRouter from "./routes/AuthRoutes.js";
import cloudinary from "cloudinary";
import multer from "multer";
import fs from "fs";
/* import {fileURLToPath} from 'url' */

import path,{dirname} from 'path'

/* const __dirname = dirname(fileURLToPath(import.meta.url))
const publicFolder = path.join(__dirname, "/images") 
console.log(publicFolder)
*/

const publicFolder = path.resolve()+'/images'

dotenv.config();


const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(publicFolder))


app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/auth", authRouter);


app.use((error, req, res, next) => {
  error.statusCode = error.statusCode || 500;
  error.message = error.message || "Something went wrong";

  res.status(error.statusCode).send(error.message);
});

connectDB();
app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});

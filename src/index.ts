import express, { Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();
/* MONGOOSE SETUP */
const PORT: string | number = process.env.PORT || 3002;
mongoose
  .connect(process.env.MONGO_URL!, {
  } as mongoose.ConnectOptions)
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error: any) => console.log(`${error} did not connect`));
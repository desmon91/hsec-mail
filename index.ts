import { Request, Response } from "express";
import mongoose from "mongoose";
import { app } from "./app";
import { checkExpiredSimper } from "./utils/checkExpiredSimper";
require("dotenv").config();

const start = async () => {
  console.log("Starting HSEC Mail Service. . .");

  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI must be defined");
  }

  if (!process.env.EMAIL_ID) {
    throw new Error("EMAIL_ID must be defined");
  }

  if (!process.env.EMAIL_PASSWORD) {
    throw new Error("EMAIL_PASSWORD must be defined");
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongodb");
  } catch (err) {
    console.log(err);
  }

  app.get("/", (req: Request, res: Response) => {
    res.send("HSEC Mail Service Online");
  });

  app.listen(process.env.PORT || 5000, () => {
    console.log("HSEC Mail Service Online!");
    console.log("Listening on port 5000!");
  });

  // Notification handler
  //////////// 3600000 = 1 jam ///////////////////
  //////////// 60000 = 1 menit ///////////////////
  //////////// 30000 = 30 detik ///////////////////
  //////////// 10000 = 10 detik ///////////////////
  setInterval(checkExpiredSimper, 3600000);
};

start();

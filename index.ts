import mongoose from "mongoose";
import { app } from "./app";
import { checkExpiredSimper } from "./utils/checkExpiredSimper";
require("dotenv").config();

const start = async () => {
  console.log("Starting HSEC Mail Service. . .");

  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI must be defined");
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongodb");
  } catch (err) {
    console.log(err);
  }

  app.listen(5000, () => {
    console.log("HSEC Mail Service Online!");
    console.log("Listening on port 5000!");
  });

  // Notification handler
  //////////// 60000 = 1 menit ///////////////////
  //////////// 30000 = 30 detik ///////////////////
  //////////// 10000 = 10 detik ///////////////////
  setInterval(checkExpiredSimper, 10000);
};

start();

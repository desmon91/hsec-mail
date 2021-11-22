import express, { json } from "express";
import { sendProgress } from "./routes/sendProgress";

var cors = require("cors");

const app = express();
app.use(cors());
app.set("trust proxy", true);
app.use(json());

app.use(sendProgress);

export { app };

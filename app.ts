import express, { json } from "express";
import { sendPengajuan } from "./routes/sendPengajuan";
import { sendProgress } from "./routes/sendProgress";

var cors = require("cors");

const app = express();
app.use(cors());
app.set("trust proxy", true);
app.use(json());

app.use(sendProgress);
app.use(sendPengajuan);

export { app };

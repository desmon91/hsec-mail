import express, { json } from "express";
import { sendMail } from "./routes/sendMail";

var cors = require("cors");

const app = express();
app.use(cors());
app.set("trust proxy", true);
app.use(json());

app.use(sendMail);

export { app };

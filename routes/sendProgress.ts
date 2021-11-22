import express, { Request, Response } from "express";
import { sendEmailProgress } from "../utils/sendEmailProgress";

const router = express.Router();

router.post("/api/sendProgress", async (req: Request, res: Response) => {
  const { nama, email, prevStatus, curStatus } = req.body;
  try {
    await sendEmailProgress(nama, email, prevStatus, curStatus);
    res.status(200).send({});
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

export { router as sendProgress };

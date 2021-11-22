import express, { Request, Response } from "express";
import { sendEmail } from "../utils/sendEmail";

const router = express.Router();

router.post("/api/sendMail", async (req: Request, res: Response) => {
  const { nama, email, prevStatus, curStatus } = req.body;
  try {
    await sendEmail(nama, email, prevStatus, curStatus);
    res.status(200).send({});
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

export { router as sendMail };

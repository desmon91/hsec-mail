import express, { Request, Response } from "express";
import { sendEmailPengajuan } from "../utils/sendEmailPengajuan";

const router = express.Router();

router.post("/api/sendPengajuan", async (req: Request, res: Response) => {
  const { nama, adminEmail, status } = req.body;
  try {
    await sendEmailPengajuan(nama, adminEmail, status);
    res.status(200).send({});
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

export { router as sendPengajuan };

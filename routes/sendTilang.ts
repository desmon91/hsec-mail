import express, { Request, Response } from "express";
import { sendEmailTilang } from "../utils/sendEmailTilang";

const router = express.Router();

router.post("/api/sendTilang", async (req: Request, res: Response) => {
  const { nama, email, pelanggaran } = req.body;
  try {
    await sendEmailTilang(nama, email, pelanggaran);
    res.status(200).send({});
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

export { router as sendProgress };

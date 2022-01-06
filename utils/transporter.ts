import nodemailer from "nodemailer";
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "internalmail.banpuindo.co.id", //lokal: internalmail.banpuindo.co.id docs: smtp.office365.com
  port: 25, //lokal: 25, docs: 587
  secure: false, // upgrade later with STARTTLS
  requireTLS: false,
  auth: {
    user: process.env.EMAIL_ID,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    ciphers: "SSLv3",
    // do not fail on invalid certs
    rejectUnauthorized: false,
  },
});

export default transporter;

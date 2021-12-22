import transporter from "./transporter";
const { tilang_email } = require("../email_template/tilang_template");

export const sendEmailTilang = async (
  nama: any,
  email: any,
  pelanggaran: any
) => {
  const message = {
    from: process.env.EMAIL_ID,
    to: email,
    subject: `ESIMPER NOTIFICATION: PENILANGAN SIMPER`,
    html: tilang_email(nama, pelanggaran, process.env.CLIENT_LINK),
  };

  console.log("Sending email tilang to " + email);

  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.error(err);
      throw new Error("email send failed");
    } else return info;
  });
};

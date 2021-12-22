import transporter from "./transporter";
const { progress_email } = require("../email_template/progress_template");

export const sendEmailProgress = async (
  nama: any,
  email: any,
  prevStatus: any,
  curStatus: any
) => {
  const message = {
    from: process.env.EMAIL_ID,
    to: email,
    subject: `ESIMPER NOTIFICATION: ${prevStatus.nama.toUpperCase()} SIMPER`,
    html: progress_email(nama, prevStatus, curStatus, process.env.CLIENT_LINK),
  };

  console.log(
    "Sending email to " +
      email +
      " change status from " +
      prevStatus.nama +
      " to " +
      curStatus.nama
  );

  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.error(err);
      throw new Error("email send failed");
    } else return info;
  });
};

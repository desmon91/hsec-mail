import moment from "moment";
import transporter from "./transporter";
const { reminder_email } = require("../email_template/reminder_template");

export const sendReminder = async (nama: any, email: any, validDate: any) => {
  const expiredDate = moment(validDate).format("DD MMM YYYY");
  const message = {
    from: process.env.EMAIL_ID,
    to: email,
    subject: "ESIMPER REMINDER: EXPIRED SIMPER",
    html: reminder_email(nama, expiredDate, process.env.CLIENT_LINK),
  };

  console.log("Sending reminder to " + email);

  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.error(err);
      throw new Error("email send failed");
    } else return info;
  });
};

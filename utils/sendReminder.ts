import moment from "moment";
import transporter from "./transporter";

export const sendReminder = async (nama: any, email: any, validDate: any) => {
  const expiredDate = moment(validDate).format("DD MMM YYYY");

  const messageParts = [
    `Dear <b>${nama}</b>,`,
    `<br><br>SIMPER anda yang terdaftar pada sistem eSimper,`,
    `<br><br>akan segera mencapai akhir masa berlakunya pada <b>${expiredDate}</b>`,
    `<br>`,
    "<br>Diharapkan untuk segera melakukan proses pembaharuan SIMPER.",
    `<br>`,
    "<br><br><br>Terimakasih.",
  ];
  const mailContent = messageParts.join("\n");
  const message = {
    from: process.env.EMAIL_ID,
    to: email,
    subject: "ESIMPER REMINDER: EXPIRED SIMPER",
    html: mailContent,
  };

  console.log("Sending reminder to " + email);

  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.error(err);
      throw new Error("email send failed");
    } else return info;
  });
};

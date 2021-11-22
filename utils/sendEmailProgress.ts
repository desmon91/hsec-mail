import transporter from "./transporter";

export const sendEmailProgress = async (
  nama: any,
  email: any,
  prevStatus: any,
  curStatus: any
) => {
  const messageParts = [
    `Dear <b>${nama}</b>,`,
    `<br><br>Proses <span style="text-transform: uppercase;font-weight:bold">${prevStatus.nama}</span> SIMPER anda telah berubah menjadi <span style="text-transform: uppercase;font-weight:bold">${curStatus.nama}</span>,`,
    `<br><br>Pesan Admin: ${curStatus.msg}`,
    `<br>`,
    `<br><br>Silahkan klik tautan ini untuk melihat proses terbaru SIMPER anda <a href="${process.env.CLIENT_LINK}">Link</a>`,
    `<br>`,
    "<br><br><br>Terimakasih.",
  ];
  const mailContent = messageParts.join("\n");
  const message = {
    from: process.env.EMAIL_ID,
    to: email,
    subject: `ESIMPER NOTIFICATION: ${prevStatus.nama.toUpperCase()} SIMPER`,
    html: mailContent,
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

import transporter from "./transporter";

export const sendEmailPengajuan = async (
  nama: any,
  adminEmail: any,
  status: any
) => {
  const messageParts = [
    `Dear <b>Admin</b>,`,
    `<br><br><b>${nama.toUpperCase()}</b> telah melakukan pengajuan <b>${status.toUpperCase()} SIMPER</b> melalui sistem eSimper ,`,
    `<br>`,
    `<br><br>Silahkan klik tautan ini untuk memproses pengajuan SIMPER <a href="${process.env.CLIENT_LINK}">Link</a>`,
    `<br>`,
    "<br><br><br>Terimakasih.",
  ];
  const mailContent = messageParts.join("\n");
  const message = {
    from: process.env.EMAIL_ID,
    to: adminEmail,
    subject: `ESIMPER ADMIN: PENGAJUAN ${status.toUpperCase()} / ${nama.toUpperCase()}`,
    html: mailContent,
  };

  console.log(
    `Sending email to admin, pengajuan ${status.toUpperCase()} ${nama.toUpperCase()}`
  );

  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.error(err);
      throw new Error("email send failed");
    } else return info;
  });
};

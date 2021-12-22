import transporter from "./transporter";
const { pengajuan_email } = require("../email_template/pengajuan_template");

export const sendEmailPengajuan = async (
  nama: any,
  adminEmail: any,
  status: any
) => {
  const message = {
    from: process.env.EMAIL_ID,
    to: adminEmail,
    subject: `ESIMPER ADMIN: PENGAJUAN ${status.toUpperCase()} / ${nama.toUpperCase()}`,
    html: pengajuan_email(nama, status, process.env.CLIENT_LINK),
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

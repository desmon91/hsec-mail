import transporter from "./transporter";

export const sendEmailTilang = async (
  nama: any,
  email: any,
  pelanggaran: any
) => {
  const messageParts = [
    `Dear <b>${nama}</b>,`,
    `<br><br>SIMPER anda telah ditilang dengan rincian sebagai berikut`,
    `<br><br>Tanggal Tilang: ${pelanggaran.tilangDari}`,
    `<br><br>Berlaku Hingga: ${pelanggaran.tilangSampai}`,
    `<br><br>Ditilang Oleh: ${pelanggaran.penilang}`,
    `<br><br>Keterangan Tilang: ${pelanggaran.alasan}`,
    `<br><br>Penilangan SIMPER anda akan otomatis membuat status SIMPER anda tidak bisa digunakan untuk sementara waktu.`,
    `<br>`,
    `<br><br>Silahkan klik tautan ini untuk melihat detail tilang SIMPER anda <a href="${process.env.CLIENT_LINK}/pelanggaran">Link</a>`,
    `<br>`,
    "<br><br><br>Terimakasih.",
  ];
  const mailContent = messageParts.join("\n");
  const message = {
    from: process.env.EMAIL_ID,
    to: email,
    subject: `ESIMPER NOTIFICATION: PENILANGAN SIMPER`,
    html: mailContent,
  };

  console.log("Sending email tilang to " + email);

  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.error(err);
      throw new Error("email send failed");
    } else return info;
  });
};

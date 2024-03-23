import nodemailer from 'nodemailer';

const emailTransport = async () => {
  return nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: process.env.ETHEREAL_MAIL_USER,
      pass: process.env.ETHEREAL_MAIL_PASSW
    }
  });
};

export default async function sendReportByEmail (report: string) {
  const transport = await emailTransport();
  await transport.sendMail({
    from: process.env.ETHEREAL_MAIL_USER,
    to: 'funcionario@email.com',
    subject: 'seu relatório de ponto',
    text: report
  });
};

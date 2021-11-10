import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: `${process.env.ETHEREAL_USERNAME}`,
    pass: `${process.env.ETHEREAL_PASSWORD}`,
  },
});

const notificationMail = async (recipientEmail: string) => {
  const salida = transporter.sendMail(
    {
      from: `${process.env.ETHERAL_USERNAME}`,
      to: recipientEmail,
      subject: `Conexión al servicio de productos experimental`,
      text: `Seguro fuiste vos quien se conecto`,
    },
    async (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    }
  );
  return salida;
};

export default notificationMail;

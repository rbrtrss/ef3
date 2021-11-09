import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: `${process.env.ETHEREAL_USERNAME}`,
    pass: `${process.env.ETHEREAL_PASSWORD}`,
  },
});

export default transporter;

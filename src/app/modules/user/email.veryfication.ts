// backend/emailService.js
import nodemailer from 'nodemailer';
import config from '../../config';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: config.NODE_ENV === 'production',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendVerificationEmail = (
  userEmail: string,
  verificationToken: string,
) => {
  const url = `https://my-kenakata-app.vercel.app/verify-email?token=${verificationToken}`;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: userEmail,
    subject: 'Verify Your Email',
    html: `Click <a href="${url}">here</a> to verify your email.`,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendVerificationEmail };

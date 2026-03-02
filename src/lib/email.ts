import nodemailer from 'nodemailer';
import type { Transporter } from 'nodemailer';

let transporter: Transporter | null = null;

function getTransporter(): Transporter {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });
  }
  return transporter;
}

export async function sendEmail(to: string, subject: string, html: string) {
  return getTransporter().sendMail({
    from: `"Validator.vn" <${process.env.GMAIL_USER}>`,
    to,
    subject,
    html,
  });
}

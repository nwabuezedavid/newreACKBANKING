"use server"

import { AccountActivation } from '@/mail/activate';
import nodemailer from 'nodemailer';

export async function SendWendmail(req) {
  console.log(req);

  const { to, subject, text,token } = req; // Added `htmlTemplate` for HTML content

  // Configure the transporter with your SMTP server details
  const transporter = nodemailer.createTransport({
    host: 'nexusinvestmenttrade.com', // Your SMTP host
    port: 465, // 465 for SSL
    secure: true, // Use SSL
    auth: {
      user: process.env.EMAIL_USER, // SMTP email address
      pass: process.env.EMAIL_PASS, // SMTP email password
    },
  });

  try {
    // Send the email
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // Sender's email address
      to, // Recipient's email address
      subject, // Subject of the email
      text, // Fallback plain-text content
      html: AccountActivation(token), // HTML content of the email
    });

    console.log('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

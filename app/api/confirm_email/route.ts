// pages/api/sendCodeByEmail.ts

import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, code } = req.body;

    try {
      // Create a Nodemailer transporter
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'your_gmail_address@gmail.com',
          pass: 'your_gmail_password',
        },
      });

      // Send mail with defined transport object
      const info = await transporter.sendMail({
        from: '"Your Name" <your_gmail_address@gmail.com>',
        to: email,
        subject: 'Verification Code',
        text: `Your verification code is: ${code}`,
      });

      console.log('Message sent: %s', info.messageId);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

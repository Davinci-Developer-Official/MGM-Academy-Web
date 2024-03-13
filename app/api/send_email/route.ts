
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
    function generateRandomNumber() {
        // Generate a random number between 100,000 (inclusive) and 999,999 (inclusive)
        return Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
      }
      
      // Example usage
      console.log(generateRandomNumber());
      

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "'to' and 'from' fields are required in the request body" });
  }

    const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "testsmtp611@gmail.com",
      pass: "pplx xhco cjug stbi",
    },
  });

  try {
    const info = await transporter.sendMail({
      from: "testsmtp611@gmail.com",
      to: `${email}`,
      subject: "Email confirmation",
      text: `your verification code is ${generateRandomNumber()}`,
      //html: "<b>The test is complete</b>",
    });

    console.log("Message sent: %s", info.messageId);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

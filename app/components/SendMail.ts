"use server";
import nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "testsmtp611@gmail.com",
    pass: "pplx xhco cjug stbi",
  },
});
export default async function Main({email,code}: any) {
    console.log("Email to:", email,code); // Add this line to check the value of email
    
    function generateRandomNumber() {
        // Generate a random number between 100,000 (inclusive) and 999,999 (inclusive)
        return Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
    }

    try {
        if(email!==""){
            const info = await transporter.sendMail({
                from: "testsmtp611@gmail.com",
                to: email,
                subject: "Email confirmation",
                text: `your verification code is ${code}`,
                //html: "<b>The test is complete</b>",
            });
            console.log("Message sent: %s", info.messageId,email);
            return code;
            
        }else if(email==""){
            const error = 'no email has been entered';
            return error ;
        }
        
    } catch (error) {
        console.error("Error occurred:", error);
        
    }
}



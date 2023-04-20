import nodemailer from 'nodemailer';
import emailjs from '@emailjs/browser';

let testAccount = await nodemailer.createTestAccount();

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  service: 'gmail',
  auth: {
    user: 'weatherapp643@gmail.com',
    pass: 'hawhvohouinihqss'
  }
});

function sendEmail(email, message) {
  
  const mailOptions = {
    from: 'weatherapp643@gmail.com',
    to: email,
    subject: 'Daily Weather Update',
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent to ${email}: ${info.response}`);
    }
  });
}

export default sendEmail;


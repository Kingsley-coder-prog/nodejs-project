const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  // 1) Create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,

    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // 2) Define the email options
  const mailOptions = {
    from: 'Chicaragua Kingsley <hello@jonas.io>',
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  // 3) Actually send the email
  await transporter.sendMail(mailOptions);
  console.log(process.env.EMAIL_HOST, 'hi');
};

module.exports = sendEmail;

// const nodemailer = require('nodemailer');

// const sendEmail = async (options) => {
//   // First create a transporter
//   const transporter = nodemailer.createTransport({
//     host: `${process.env.EMAIL_HOST}`,
//     port: process.env.EMAIL_PORT,
//     secure: false,
//     logger: true,
//     auth: {
//       user: `${process.env.EMAIL_USERNAME}`,
//       pass: `${process.env.EMAIL_PASSWORD}`,
//     },
//     tls: {
//       rejectUnauthorized: false,
//     },
//   });

//   // Define the email options
//   const mailOptions = {
//     from: 'Swayam Goswami <swayamgoswami989@gmail.com',
//     to: options.email,
//     subject: options.subject,
//     text: options.message,
//   };

//   // Send the email
//   await transporter.sendMail(mailOptions);
//   console.log(process.env.EMAIL_HOST, 'hi');
// };

// module.exports = sendEmail;

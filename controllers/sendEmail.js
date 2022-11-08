const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

const sendEmailEthereal = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'saul.ward96@ethereal.email',
      pass: process.env.EMAIL_SECRET,
    },
  });

  let info = await transporter.sendMail({
    from: '"Arthur Reimus" <arthurreimus1623@gmail.com>',
    to: 'bar@example.com, baz@example.com',
    subject: 'Hi! Backend Test',
    html: '<h2>Hello World! Sending email with NodeJS :)</h2>',
  });

  res.json(info);
};

const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'ardlechoncito@mymail.mapua.edu.ph', // Change to your recipient
    from: 'artrei.dev@gmail.com', // Change to your verified sender
    subject: 'Hello from NodeJS',
    text: 'Hello from NodeJS! -fullstackboi',
    html: '<h1>Hello from NodeJS! -fullstackboi</h1>',
  };
  const info = await sgMail.send(msg);
  res.json(info);
};

module.exports = sendEmail;

const nodemailer = require("nodemailer");

const sendEmail = (to, from, subject, textBody, htmlBody, callback) => {
  var transport = nodemailer.createTransport({
    host: "mail.topperskills.com",
    port: 465,
    auth: {
      user: "testing@topperskills.com",
      pass: "Topper@123",
    },
  });

  const mailOptions = {
    from: `"Toppers Skills" <${from}>`, //sender address
    to: to, //list of receivers
    subject: subject, //subject line
    text: textBody, //plain text body
    html: htmlBody, //html body
  };
  transport.sendMail(mailOptions, callback);
};

module.exports = sendEmail;

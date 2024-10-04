const nodemailer=require('nodemailer');


const transporter = nodemailer.createTransport({
  service: 'gmail',  // You can use other services like Yahoo, Outlook, etc.
  secure:true,
  port:465,
  auth: {
      user: 'priyanshuanand1425@gmail.com',
      pass: 'qumlsqcbobraenaw'
  }
});


const sendMail = (name, email, contact, query, callback) => {
  const mailOptions = {
      from: 'priyanshuanand1425@gmail.com',
      to: email,  // Your email address
      subject: 'New Query from Website',
      text: `You have received a new query.\n\nName: ${name}\nEmail: ${email}\nContact: ${contact}\nQuery: ${query}`
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return callback(error, null);
    }
    callback(null, info);
});
};

module.exports = sendMail;
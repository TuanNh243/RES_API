const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({

    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: 'tuannhps38109@fpt.edu.vn',
        pass: 'nnsivysuybjufmos'
    }
});


module.exports = { transporter };
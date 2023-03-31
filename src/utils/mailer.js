
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.USER_GMAIL,
        pass: process.env.PASSWORD_GMAIL
    }
})

module.exports = transporter


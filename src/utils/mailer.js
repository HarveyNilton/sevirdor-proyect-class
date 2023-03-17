
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "harveynilto@gmail.com",
        pass: "fvknqucpiohboinq"
    }
})

module.exports = transporter


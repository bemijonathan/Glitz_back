import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';
import chalk from 'chalk';

export default class Mailer {
    constructor() {
        this.user = process.env.EMAIL;
        this.pass = process.env.EMAIL_PASSWORD;
        this.transporter = nodemailer.createTransport(
            smtpTransport({
                service: 'gmail',
                host: 'smtp.gmail.com',
                auth: {
                    user: this.user,
                    pass: this.pass,
                },
            })
        );
    }
    sendEmail(mailOptions, callback) {
        return this.transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(chalk.blueBright(error));
                callback(false);
            } else {
                console.log('Email sent: ' + info.response);
                callback(true);
            }
        });
    }
    async RegisterationSuccessfulEmail(email) {
        var mailOptions = {
            from: 'bemijonathan@gmail.com',
            to: email,
            subject: 'RESET PASSWORD',
            text: 'Click on this link to reset your password',
        };
        return this.sendEmail(mailOptions, (response) => {
            console.log(chalk.yellow.bold(response, email));
            return response;
        });
    }
}

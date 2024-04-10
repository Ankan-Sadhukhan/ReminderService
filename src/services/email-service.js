const transporter = require('../config/emailConfig');

const sendBasicEmail = async(mailFrom, mailTo, mailSubject, body) => {
    try {
        const response = await transporter.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: body
        });
        
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = sendBasicEmail;
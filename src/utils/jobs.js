const cron = require('node-cron');

const {fetchPendingEmails, updateTicket} = require('../services/email-service');

const transporter = require('../config/emailConfig');

/**
 * 10:00 am 
 * Every 5 minutes
 * We will check are their any pending emails which was expected to be sent 
 * by now  and is pending
 */

const setupCronJob = ()=>{
    cron.schedule('*/2 * * * *', async() => {
        console.log('Running a task every two minutes');
        const response = await fetchPendingEmails();
        response.forEach((email) => {
            transporter.sendMail({
                to: email.recepientEmail,
                subject: email.subject,
                text: email.context
            }).then(async()=>{
                await updateTicket(email.id, {status: "SUCCESS"});
            }).catch(async()=>{
                await updateTicket(email.id, {status: "FAILED"});
            });
        });

    });
}



module.exports = {
    setupCronJob
}
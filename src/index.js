const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig');

const sendBasicEmail = require('./services/email-service');

const cron = require('node-cron');

const setupAndStartServer = () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`);

        // sendBasicEmail('"Maddison Foo Koch 👻" <maddison53@ethereal.email>',
        // 'airlinebookingappservice@gmail.com',
        // 'This is a testing email',
        // 'Hey, how are you, I hope you like the support')

        cron.schedule('* * * * *', () => {
            console.log('running a task every minute');
        });
    })
}

setupAndStartServer();
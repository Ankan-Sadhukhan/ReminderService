const transporter = require('../config/emailConfig');
const TicketRepository = require('../repository/ticket-repository');


const ticketRepo = new TicketRepository();

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

const createTicket = async(data) => {
    try {
      //  console.log(data);
        const ticket = await ticketRepo.create(data);
        return ticket;
    } catch (error) {
        console.log(error);
    }
}

const fetchPendingEmails = async() => {
    try {
        //  console.log(data);
          const ticket = await ticketRepo.get({status: "PENDING"});
          return ticket;
      } catch (error) {
          console.log(error);
      }
}


const updateTicket = async(ticketId, data) => {
    try {
        //  console.log(data);
          const ticket = await ticketRepo.update(ticketId, data);
          return ticket;
      } catch (error) {
          console.log(error);
      }

}

module.exports = {
    sendBasicEmail,
    createTicket,
    fetchPendingEmails,
    updateTicket
};
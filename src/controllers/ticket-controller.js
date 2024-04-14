const TicketService = require("../services/email-service");

const create = async (req, res) => {
  try {
    const response = await TicketService.createTicket(req.body);
    return res.status(201).json({
      message: "Successfully registered an email reminder",
      data: response,
      success: true,
      err: {},
    });
  } catch (error) {
   // console.log(res);
    return res.status(500).json({
      success: false,
      data: {},
      err: error,
      message: "unable to register an email reminder",
    });
  }
};

module.exports = {
  create,
};

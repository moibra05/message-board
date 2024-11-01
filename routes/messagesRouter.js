const { Router } = require('express');
const messagesController = require('../controller/messagesController');

const messageRouter = Router();

messageRouter.get('/', messagesController.getMessages);

module.exports = messageRouter;
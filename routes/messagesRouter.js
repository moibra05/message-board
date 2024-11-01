const { Router } = require('express');
const messagesController = require('../controller/messagesController');

const messageRouter = Router();

messageRouter.get('/', messagesController.getMessages);
messageRouter.get('/new', messagesController.getNewMessage);
messageRouter.post('/new', messagesController.postNewMessage);

module.exports = messageRouter;
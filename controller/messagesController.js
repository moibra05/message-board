const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

const getMessages = (req, res) => {
  res.render('index', { messages: messages });
}

const getNewMessage = (req, res) => {
  res.render('form');
}


module.exports = {
  getMessages,
  getNewMessage
}
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
    id: crypto.randomUUID()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
    id: crypto.randomUUID()
  }
];

const getMessages = (req, res) => {
  res.render('messages', { messages: messages });
}

const getNewMessage = (req, res) => {
  res.render('form');
}


const postNewMessage = (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.name,
    date: new Date()
  })

  res.redirect('/messages')
}

module.exports = {
  getMessages,
  getNewMessage,
  postNewMessage
}
require('dotenv').config()
const express = require('express');
const path = require('node:path');
const messageRouter = require('./routes/messagesRouter');
const indexRouter = require('./routes/indexRouter')

const app = express();

const assetsPath = path.join(__dirname, 'public');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/messages', messageRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
})
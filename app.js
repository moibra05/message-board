require('dotenv').config()
const express = require('express');
const path = require('node:path');

const app = express();

const assetsPath = path.join(__dirname, 'public');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(assetsPath));

app.get('/', (req, res) => {
  res.render('index');
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
})
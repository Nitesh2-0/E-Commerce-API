require('dotenv').config({ path: './.env' });
require('ejs');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expressSession = require('express-session');
const morgan = require('morgan');
const indexRouter = require('./routes/indexRouter');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(expressSession({
  resave: false,
  saveUninitialized: false,
  secret: process.env.SESSION_SECRET || 'secret',
}));

app.use(morgan('tiny'));

require('./models/connection').mongoconnection();
app.use('/api/user', indexRouter);

app.use((req, res, next) => {
  res.status(404).json({ url: req.url, message: 'Page Not Found' });
});

app.all('*', (req, res) => {
  res.status(404).json({ url: req.url, message: 'Page Not Found' })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

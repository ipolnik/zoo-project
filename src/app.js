require('dotenv').config();
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
// const renderTemplate = require('./lib/renderTemplate');

const dbConnectionCheck = require('../db/dbConnectCheck');

const { PORT, SESSION_SECRET } = process.env;

const app = express();
dbConnectionCheck();

// тут импорты всех роутов, если нужно


const AnimalCardRouter = require('./routes/animalCardRouter');
const tariffsRoute = require('./routes/tariffsRoute');
const homeRoutes = require('./routes/homeRoutes');
const mainPageRoutes = require('./routes/mainPageRoutes');
const loginRoutes = require('./routes/loginRoutes');
const signUpRoutes = require('./routes/signUpRoutes');
const listeRoute = require('./routes/listeRoute');


app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public/'))); // для подключения «клиентских» файлов, хранящихся в / public
app.use(express.urlencoded({ extended: true })); // Для того, чтобы обрабатывать тела запросов, которые через метод POST
app.use(express.json());

// КОНФИГ ДЛЯ КУКИ
const sessionConfig = {
  name: 'OwlCookie', // * Название куки
  store: new FileStore(), // * подключение стора (БД для куки) для хранения
  secret: SESSION_SECRET ?? 'shamil', // * ключ для шифрования куки
  resave: false, // * если true, пересохраняет сессию, даже если она не поменялась
  saveUninitialized: false, // * Если false, куки появляются только при установке req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 10, // * время жизни в ms (10 дней)
    httpOnly: true, // * куки только по http
  },
};
// подключение мидлвара для куки
app.use(session(sessionConfig));

// app.get('/', (req, res) => {
//   renderTemplate(Home, null, res);

app.get('/logout', async (req, res) => {
  try {
    if (req.session.admin) {
      req.session.destroy(() => {
        res.clearCookie('Cookie');
        res.redirect('/');
      });
    } else {
      res.redirect('/');
    }
  } catch (error) {
    res.send(`Error ------> ${error}`);
  }
});

// ссылки на роуты

app.use('/animalcard', AnimalCardRouter);
app.use('/home', homeRoutes);
app.use('/', mainPageRoutes);
app.use('/login', loginRoutes);
app.use('/tariffs', tariffsRoute);
app.use('/signup', signUpRoutes);
app.use('', listeRoute);



app.listen(PORT ?? 3100, () => {
  console.log('Сервер запущен!');
});

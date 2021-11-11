import express from 'express';
import session from 'express-session';
import notificationMail from './mail';
import sendSMS from './sms';
import {
  validateLogin,
  validateSignup,
} from '../validations/usuarios.validations';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 6000 } }));

app.get('/', (req, res) => {
  if (req.session.id) {
    res.json({ msg: `Estas en la sesion ${req.session.id}` });
  } else {
    res.redirect('/otras');
  }
});

app.post('/login', validateLogin, function (req, res) {
  // Login con email, password y phonenumber
  // const resultado = await notificationMail(req.body.email);
  // console.log('Este es el que sale undefined', resultado);
  // sendSMS(req.body.phonenumber, 'Hey Bienvenido');
  res.json({ ...req.body });
});

app.post('/signup', validateSignup, function (req, res) {
  res.json({ ...req.body });
});

app.get('/otras', (req, res) => {
  res.json({ msg: `Que lindo` });
});

// const isLoggedIn = (req, res, next) => {
//     if (!req.session.)
// }

export default app;

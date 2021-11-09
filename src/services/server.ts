import express from 'express';
import session from 'express-session';

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

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  res.json({ msg: `Hola ${username}` });
});

app.get('/otras', (req, res) => {
  res.json({ msg: `Que lindo` });
});

// const isLoggedIn = (req, res, next) => {
//     if (!req.session.)
// }

export default app;

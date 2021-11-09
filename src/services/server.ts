import express from 'express';
import session from 'express-session';
import transporter from './mail';

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

app.post('/login', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const info = await transporter.sendMail({
    from: `${process.env.ETHERAL_USERNAME}`,
    to: req.body.email,
    subject: `Conexión al servicio de productos experimental`,
    text: `Si fuiste vos quien se conecto`,
  });
  res.json({ msg: `Hola ${email} aca te mandamos algo ${info.messageId}` });
});

app.get('/otras', (req, res) => {
  res.json({ msg: `Que lindo` });
});

// const isLoggedIn = (req, res, next) => {
//     if (!req.session.)
// }

export default app;

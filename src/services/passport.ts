import passport from 'passport';
import { Strategy } from 'passport-local';

// const loginFunc = (req, done) => {
//   const email = req.body.email;
//   const password = req.body.password;
// };

// const signupFunc = () => {};

passport.use(new Strategy((username, password, done) => {}));

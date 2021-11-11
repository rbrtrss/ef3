import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

export const validateLogin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schemaLogin = Joi.object({
    email: Joi.string().email(),
    password: Joi.string().min(8),
  });
  //   const { email, password } = req.body;
  const { error } = schemaLogin.validate(req.body);
  //   console.log(error);
  if (error) {
    switch (error.details[0].context!.key) {
      case 'email':
        res.status(500).json({ message: error.details[0].message });
        break;
      case 'password':
        res.status(500).json({ message: error.details[0].message });
        break;
      default:
        res.status(500).json({ message: 'An error occurred.' });
        break;
    }
  }
  return next();
};

export const validateSignup = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schemaSignup = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    passwordConfirmation: Joi.any().valid(Joi.ref('password')).required(),
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    alias: Joi.string().required(),
    telefono: Joi.string().required(), // Revisar el patron de regex
    //   .pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)
    //   .required(),
    perfil: Joi.string().uri().required(),
  });
  const { error } = schemaSignup.validate(req.body);
  console.log(error);
  if (error) {
    switch (error.details[0].context!.key) {
      case 'email':
        return res.status(500).json({ message: error.details[0].message });
      case 'password':
        return res.status(500).json({ message: error.details[0].message });
      case 'passwordConfirmation':
        return res.status(500).json({ message: error.details[0].message });
      case 'nombre':
        return res.status(500).json({ message: error.details[0].message });
      case 'apellido':
        return res.status(500).json({ message: error.details[0].message });
      case 'alias':
        return res.status(500).json({ message: error.details[0].message });
      case 'telefono':
        return res.status(500).json({ message: error.details[0].message });
      case 'perfil':
        return res.status(500).json({ message: error.details[0].message });
      default:
        return res.status(500).json({ message: 'An error occurred.' });
    }
  }
  return next();
};

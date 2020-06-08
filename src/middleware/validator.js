import Joi from 'joi';

export default {
  loginValidation(req, res, next) {
    const loginSchema = Joi.object().keys({
      email: Joi.string()
        .email({ minDomainAtoms: 2 })
        .required(),
      password: Joi.string().required(),

    });
    const { error } = Joi.validate(req.body, loginSchema);
    if (error) {
      return res.status(400).json({
        error: error.details[0].message.replace(/\\|(")/g, ''),
      });
    }
    return next();
  },
};

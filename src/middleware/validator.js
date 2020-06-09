/* eslint-disable no-param-reassign */
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

  locationCreataionValidation(req, res, next) {
    const locationCreationSchema = Joi.object().keys({
      name: Joi.string().min(3).required().regex(/^[A-Za-z]*$/)
        .error((errors) => {
          errors.forEach((err) => {
          // eslint-disable-next-line default-case
            switch (err.type) {
              case 'string.regex.base':
                err.message = 'Location name should be string with no special characters';
                break;
              case 'any.required':
                err.message = 'Location name is required';
                break;
              case 'string.min':
                err.message = 'Location name must be at least 3 characters long';
                break;
              case 'string.base':
                err.message = 'Location name must be a string';
                break;
            }
          });
          return errors;
        }),
    });
    const { error } = Joi.validate(req.body, locationCreationSchema);
    if (error) {
      return res.status(400).json({
        error: error.details[0].message.replace(/\\|(")/g, ''),
      });
    }
    return next();
  },
};

import validator from '../validator';

describe('Login Validator', () => {
  let res = {};
  const next = jest.fn();
  beforeEach(() => {
    const mockResponse = () => {
      res.status = jest.fn().mockReturnValue(res);
      res.json = jest.fn().mockReturnValue(res);
      return res;
    };
    res = mockResponse();
  });

  describe('Validate email', () => {
    it('Should return a error when incorrect email is passed', () => {
      const loginValidator = jest.spyOn(validator, 'loginValidation');
      const req = {
        body: { email: 'justinemsinda@gm', password: 'Uninet4' },
      };
      validator.loginValidation(req, res, next);
      expect(loginValidator).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: 'email must be a valid email' });
    });

    it('Should return a error when password is empty', () => {
      const loginValidator = jest.spyOn(validator, 'loginValidation');
      const req = {
        body: { email: 'justinemsinda@gmail.com', password: '' },
      };
      validator.loginValidation(req, res);
      expect(loginValidator).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: 'password is not allowed to be empty' });
    });
    it('Should call next function', () => {
      const loginValidator = jest.spyOn(validator, 'loginValidation');
      const req = {
        body: { email: 'justinemsinda@gmail.com', password: 'kcnkscnksdcn' },
      };
      validator.loginValidation(req, res, next);
      expect(loginValidator).toHaveBeenCalled();
      expect(next).toHaveBeenCalled();
    });
  });

  describe('Validate Location creation', () => {
    it('Should return an error when location name is undefined', () => {
      const locationValidator = jest.spyOn(validator, 'locationCreataionValidation');
      const req = {
        body: { email: '' },
      };
      validator.locationCreataionValidation(req, res, next);
      expect(locationValidator).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: 'Location name is required' });
    });

    it('Should return a error when location name is empty', () => {
      const locationValidator = jest.spyOn(validator, 'locationCreataionValidation');
      const req = {
        body: { name: '12546' },
      };
      validator.locationCreataionValidation(req, res, next);
      expect(locationValidator).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: 'Location name should be string with no special characters' });
    });

    it('Should return a error when location name is empty', () => {
      const locationValidator = jest.spyOn(validator, 'locationCreataionValidation');
      const req = {
        body: { name: 12546 },
      };
      validator.locationCreataionValidation(req, res, next);
      expect(locationValidator).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: 'Location name must be a string' });
    });
    it('Should return a error when location name is less than 3 characters', () => {
      const locationValidator = jest.spyOn(validator, 'locationCreataionValidation');
      const req = {
        body: { name: 'ml' },
      };
      validator.locationCreataionValidation(req, res, next);
      expect(locationValidator).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: 'Location name must be at least 3 characters long' });
    });
    it('Should call next function', () => {
      const req = {
        body: { name: 'Malindi' },
      };
      validator.locationCreataionValidation(req, res, next);
      expect(next).toHaveBeenCalled();
    });
  });
});

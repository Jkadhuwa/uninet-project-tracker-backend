import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import 'dotenv/config';

const { JWT_SECRET_KEY } = process.env;

export const generateToken = (user) => jwt.sign(
  {
    name: user.name,
    email: user.email,
  },
  JWT_SECRET_KEY,
  { expiresIn: '1d' },
);

export const hashPassword = (password) => bcrypt.hashSync(password, 10);

export const comparePasswords = (
  hashedPassword, password,
) => bcrypt.compareSync(hashedPassword, password);

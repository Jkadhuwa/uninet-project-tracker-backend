import 'babel-polyfill';
import { config } from 'dotenv';

config();


const {
  DB_NAME_PROD, DB_NAME_DEV, DB_USER, DB_PASS, DB_HOST, DB_PORT,
} = process.env;
module.exports = {

  development: {
    database: DB_NAME_DEV,
    username: DB_USER,
    password: DB_PASS,
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
    logging: false,
  },
  test: {
    database: 'test_project_mgt',
    username: 'postgres',
    password: 'Uninet41234',
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
  },
  production: {
    database: DB_NAME_PROD,
    username: DB_USER,
    password: DB_PASS,
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
  },
};

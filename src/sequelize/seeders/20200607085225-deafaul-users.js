import bcrypt from 'bcrypt';
import 'dotenv/config';

const salt = bcrypt.genSaltSync(10);
const userPass = bcrypt.hashSync(process.env.USER_PASS, salt);

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Users', [{
    name: 'Musinda Kadhuwa',
    email: 'justinemsinda@gmail.com',
    password: userPass,
    createdAt: new Date(),
    updatedAt: new Date(),
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};

import 'dotenv/config';
import express from 'express';
import winston from 'winston';
import logger from './config/logging';
import router from './routes';
import db from './sequelize/models';


logger();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', router);

const PORT = process.env.PORT || 3000;

db.sequelize.sync().then(() => {
  winston.info('🚀  Database ready ');
  app.listen(PORT, () => {
    winston.info(`🚀  Server ready at ${PORT}`);
  });
});


export default app;

import express from 'express';
import UserController from '../controllers/userController';
import validator from '../middleware/validator';

const userRouter = express.Router();


userRouter.post('/login', validator.loginValidation, UserController.userLogin);

export default userRouter;

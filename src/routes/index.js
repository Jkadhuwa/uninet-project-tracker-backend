import express from 'express';
import userRouter from './userRouter';

const router = express();


router.get('/', (req, res) => res.status(200).json({
  message: 'Server Running successfully',
}));
router.use('/users', userRouter);

export default router;

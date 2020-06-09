import express from 'express';
import userRouter from './userRouter';
import locationRouter from './locationRouter';

const router = express();


router.get('/', (req, res) => res.status(200).json({
  message: 'Server Running successfully',
}));
router.use('/users', userRouter);
router.use('/locations', locationRouter);

export default router;

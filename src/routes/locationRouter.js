import express from 'express';
import LocationController from '../controllers/locationController';
import validator from '../middleware/validator';

const locationRouter = express.Router();


locationRouter.post('/create', validator.locationCreataionValidation, LocationController.createLocation);

export default locationRouter;

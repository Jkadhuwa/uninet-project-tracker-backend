import express from 'express';
import LocationController from '../controllers/locationController';
import validator from '../middleware/validator';

const locationRouter = express.Router();


locationRouter.post('/create', validator.locationCreataionValidation, LocationController.createLocation);
locationRouter.get('/', LocationController.getLocations);
locationRouter.get('/:id', LocationController.getLocationById);

export default locationRouter;

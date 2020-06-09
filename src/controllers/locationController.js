import LocationService from '../services/locationService';

class LocationController {
  static async createLocation(req, res) {
    const { name } = req.body;

    const { location, isNew } = await LocationService.createLocation(name);
    if (isNew) {
      return res.status(201).json({
        location,
      });
    }
    return res.status(409).json({
      error: 'Location with this name already exist',
    });
  }
}

export default LocationController;

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

  static async getLocations(req, res) {
    const locations = await LocationService.getLocations();
    if (locations.length) {
      return res.status(200).json({ locations });
    }
    return res.status(200).json({ message: 'No locations found at the moment.' });
  }

  static async getLocationById(req, res) {
    const { id } = req.params;
    const location = await LocationService.getLocationById(id);

    if (location) {
      return res.status(200).json({ location });
    }
    return res.status(404).json({ error: `Location with id:${id} not found.` });
  }
}

export default LocationController;

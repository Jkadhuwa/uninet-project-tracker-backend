import db from '../sequelize/models';

class LocationService {
  static async createLocation(name) {
    const [location, isNew] = await db.Location.findOrCreate(
      { where: { name }, defaults: { name } },
    );
    return ({ location, isNew });
  }

  static async getLocations() {
    const locations = await db.Location.findAll();
    return locations;
  }

  static async getLocationById(id) {
    const location = await db.Location.findOne({ where: { id } });
    return location;
  }
}

export default LocationService;

import db from '../sequelize/models';

class LocationService {
  static async createLocation(name) {
    const [location, isNew] = await db.Location.findOrCreate(
      { where: { name }, defaults: { name } },
    );
    return ({ location, isNew });
  }
}

export default LocationService;

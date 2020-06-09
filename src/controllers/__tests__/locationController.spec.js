import LocationController from '../locationController';

describe('User Controller', () => {
  let res = {};
  beforeEach(() => {
    const mockResponse = () => {
      res.status = jest.fn().mockReturnValue(res);
      res.json = jest.fn().mockReturnValue(res);
      return res;
    };
    res = mockResponse();
  });

  describe('Get Location Tests', () => {
    let req = {};
    jest.spyOn(LocationController, 'getLocations');
    it('Should return an error if no location ', async () => {
      await LocationController.getLocations(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: 'No locations found at the moment.' });
    });

    it('Should create a location ', async () => {
      req = {
        body: { name: 'Malindi' },
      };
      await LocationController.createLocation(req, res);
    });

    it('Should return all locations from the db', async () => {
      await LocationController.getLocations(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toBeDefined();
    });
  });

  describe('Location Creation Tests', () => {
    const location = jest.spyOn(LocationController, 'createLocation');
    it('Should create location successfully', async () => {
      const req = {
        body: { name: 'Gongoni' },
      };
      await LocationController.createLocation(req, res);
      expect(location).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toBeDefined();
    });
    it('Should return a error if location is with name already exists', async () => {
      const req = {
        body: { name: 'Gongoni' },
      };
      await LocationController.createLocation(req, res);
      expect(location).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(409);
      expect(res.json).toHaveBeenCalledWith({ error: 'Location with this name already exist' });
    });
  });

  describe('Get specific location by ID', () => {
    let req = {};
    jest.spyOn(LocationController, 'getLocationById');
    it('Should retun a location with id 2', async () => {
      req = { params: { id: 2 } };
      await LocationController.getLocationById(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toBeDefined();
    });
    it('Should return an error if location with id 20 does not exist', async () => {
      req = { params: { id: 20 } };
      await LocationController.getLocationById(req, res);
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: 'Location with id:20 not found.' });
    });
  });
});

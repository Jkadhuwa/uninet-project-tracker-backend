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
});

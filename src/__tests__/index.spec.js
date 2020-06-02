import 'babel-polyfill';
import request from 'supertest';
import app from '../index';


describe('BASE URL TEST', () => {
  it('Should return a message with success status', async (done) => {
    const res = await request(app).get('/api/v1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message');
    done();
  });
});

import request from 'supertest';
import index from '../index';

describe('Auth API', () => {
  it('should login a user', async () => {
    const res = await request(index)
      .post('/api/auth')
      .send({ username: 'testuser', password: 'testpassword' });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('token');
  });
});
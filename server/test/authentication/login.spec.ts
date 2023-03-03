import request from 'supertest';
import { expect } from 'chai';
import server from '../../src/server'

afterAll(done => {
    done();
});

describe('POST /login', () => {
    it('should respond with a 200 status code when provided with valid credentials', async () => {
        const res = await request(server.app)
            .post('/login')
            .send({ username: 'validuser', password: 'validpassword' });

        expect(res.status).to.equal(200);
    });

    it('should respond with a 401 status code when provided with invalid credentials', async () => {
        const res = await request(server.app)
            .post('/login')
            .send({ username: 'invaliduser', password: 'invalidpassword' });

        expect(res.status).to.equal(401);
    });
});
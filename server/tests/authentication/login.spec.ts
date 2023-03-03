import request from 'supertest';
import { expect } from 'chai';
import server from '../../src/server'

afterAll(done => {
    server.closeServer(done);
});


describe('POST /login', () => {
    it('Deberia 200, credenciales validos y token', async () => {
        const res = await request(server.getApp())
            .post('/login')
            .send({ username: 'validuser', password: 'validpassword' });
        expect(res.status).to.equal(200);
    });

    it('Deberia 400, credenciales invalidos', async () => {
        const res = await request(server.getApp())
            .post('/login')
            .send({ username: 'invaliduser', password: 'invalidpassword' });
        expect(res.status).to.equal(401);
    });
});
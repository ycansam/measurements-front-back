import request from 'supertest';
import { expect } from 'chai';
import server from '../../src/server'
import database from '../../src/database';
beforeAll(() => {
    database.clearDatabase();
})

afterAll(done => {
    server.closeServer(done);
});

describe('POST /registry', () => {
    it('Deberia dar un 200, usuario creado correctamente', async () => {
        const res = await request(server.getApp())
            .post('/registry')
            .send({ username: 'validuser', password: 'validpassword' });

        expect(res.status).to.equal(200);
    });

    it('Deberia dar 401 los usuarios deben ser unicos', async () => {
        const res = await request(server.getApp())
            .post('/registry')
            .send({ username: 'validuser', password: 'invalidpassword' });
        expect(res.status).to.equal(401);
    });
    it('Deberia dar 401 debe haber una contraseña', async () => {
        const res = await request(server.getApp())
            .post('/registry')
            .send({ username: 'validuser2' });
        expect(res.status).to.equal(401);
    });

    it('Deberia dar 401 no hay usuario', async () => {
        const res = await request(server.getApp())
            .post('/registry')
            .send({ password: 'invalidpassword' });
        expect(res.status).to.equal(401);
    });

    it('Deberia dar 401 debe haber un minimo de contraseña de 4', async () => {
        const res = await request(server.getApp())
            .post('/registry')
            .send({ username: 'validuser3', password: 'inv' });
        expect(res.status).to.equal(401);
    });

});
import request from 'supertest';
import { expect } from 'chai';
import server from '../../src/server'

var token = ""

const setToken = (tokenstr: string) => {
    token = tokenstr;
}

afterAll(done => {
    done();
});

describe('GET /measurements', () => {

    it('Deberia Obtener el token', async () => {
        const res = await request(server.app)
            .post('/login')
            .send({ username: 'validuser', password: 'validpassword' });
        expect(res.body.content.token)
        setToken(res.body.content.token)
    });


    it('Deberia obtener las mediciones', async () => {
        const res = await request(server.app)
            .get('/measurements')
        console.log(token);
        expect(res.status).to.equal(200);
    });
});
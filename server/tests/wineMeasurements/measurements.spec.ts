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

describe('GET /measurements before adding', () => {

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
            .set('x-access-token', `${token}`);
        expect(res.status).to.equal(200);
        expect(res.body.content.length).to.equal(0);
    });

    it('No deberia obtener las mediciones, falta el token', async () => {
        const res = await request(server.app)
            .get('/measurements')
        expect(res.status).to.equal(401);
    });
});

describe('POST /measurements', () => {
    it('Deberia postear la medicion', async () => {
        const res = await request(server.app)
            .post('/measurements')
            .set('x-access-token', `${token}`)
            .send({
                year: 1990,
                variety: "Cabernet Sauvignon",
                type: "Vino blanco",
                color: "blanco",
                temperature: 0,
                graduation: 0,
                hydrogen_potencial: 0,
                observations: ""
            });
        expect(res.status).to.equal(200);
    });

    it('No Deberia postear la medicion, no hay token', async () => {
        const res = await request(server.app)
            .post('/measurements')
            .send({
                year: 1990,
                variety: "Cabernet Sauvignon",
                type: "Vino blanco",
                color: "blanco",
                temperature: 0,
                graduation: 0,
                hydrogen_potencial: 0,
                observations: ""
            });
        expect(res.status).to.equal(401);
    });

    it('No Deberia postear la medicion faltan valores obligatorios', async () => {
        const res = await request(server.app)
            .post('/measurements')
            .set('x-access-token', `${token}`)
            .send({
                year: 1990,
                variety: "Cabernet Sauvignon",
                type: "Vino blanco",
                hydrogen_potencial: 0,
                observations: ""
            });
        expect(res.status).to.equal(400);
    });

    it('NO Deberia postear la medicion, el hidrogeno es > 15', async () => {
        const res = await request(server.app)
            .post('/measurements')
            .set('x-access-token', `${token}`)
            .send({
                year: 1990,
                variety: "Cabernet Sauvignon",
                type: "Vino blanco",
                color: "blanco",
                temperature: 0,
                graduation: 0,
                hydrogen_potencial: 15,
                observations: ""
            });
        expect(res.status).to.equal(400);
    });

    it('NO Deberia postear la medicion, el hidrogeno es < 0', async () => {
        const res = await request(server.app)
            .post('/measurements')
            .set('x-access-token', `${token}`)
            .send({
                year: 1990,
                variety: "Cabernet Sauvignon",
                type: "Vino blanco",
                color: "blanco",
                temperature: 0,
                graduation: 0,
                hydrogen_potencial: -1,
                observations: ""
            });
        expect(res.status).to.equal(400);
    });

    it('NO Deberia postear la medicion, el año es negativo', async () => {
        const res = await request(server.app)
            .post('/measurements')
            .set('x-access-token', `${token}`)
            .send({
                year: -1990,
                variety: "Cabernet Sauvignon",
                type: "Vino blanco",
                color: "blanco",
                temperature: 0,
                graduation: 0,
                hydrogen_potencial: 10,
                observations: ""
            });
        expect(res.status).to.equal(400);
    });

    it('NO Deberia postear la medicion, variedad esta modificado a un valor inexistente', async () => {
        const res = await request(server.app)
            .post('/measurements')
            .set('x-access-token', `${token}`)
            .send({
                year: 1990,
                variety: "inexistente",
                type: "Vino blanco",
                color: "blanco",
                temperature: 0,
                graduation: 0,
                hydrogen_potencial: 10,
                observations: ""
            });
        expect(res.status).to.equal(400);
    });

    it('NO Deberia postear la medicion, type esta modificado a un valor inexistente', async () => {
        const res = await request(server.app)
            .post('/measurements')
            .set('x-access-token', `${token}`)
            .send({
                year: 1990,
                variety: "Cabernet Sauvignon",
                type: "inexistente",
                color: "blanco",
                temperature: 0,
                graduation: 0,
                hydrogen_potencial: 10,
                observations: ""
            });
        expect(res.status).to.equal(400);
    });

    it('NO Deberia postear la medicion, año es un texto', async () => {
        const res = await request(server.app)
            .post('/measurements')
            .set('x-access-token', `${token}`)
            .send({
                year: "1asd990",
                variety: "Cabernet Sauvignon",
                type: "Vino blanco",
                color: "blanco",
                temperature: 0,
                graduation: 0,
                hydrogen_potencial: 10,
                observations: ""
            });
        expect(res.status).to.equal(400);
    });

    it(' Deberia postear la medicion', async () => {
        const res = await request(server.app)
            .post('/measurements')
            .set('x-access-token', `${token}`)
            .send({
                year: 2000,
                variety: "Cabernet Sauvignon",
                type: "Vino blanco",
                color: "blanco",
                temperature: 40,
                graduation: 50,
                hydrogen_potencial: 10,
                observations: "Muy buena"
            });
        expect(res.status).to.equal(200);
    });

});

describe('GET /measurements after adding', () => {

    it('Deberia obtener las mediciones', async () => {
        const res = await request(server.app)
            .get('/measurements')
            .set('x-access-token', `${token}`);
        expect(res.status).to.equal(200);
        expect(res.body.content.length).to.equal(2);
    });
});

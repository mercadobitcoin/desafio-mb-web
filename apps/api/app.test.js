import { describe, it, expect, beforeEach } from 'vitest';
import request from 'supertest';
import app from './app';

describe('Endpoint /registration', () => {
    beforeEach(() => {
        app.locals.registrations = [];
    });

    it('should register a new entry with POST', async () => {
        const payload = {
            name: 'John',
            email: 'john@email.com'
        };

        const res = await request(app).post('/registration').send(payload);

        expect(res.status).toBe(200);
        expect(res.body.message).toBe('Registration successful');
        expect(res.body.receivedData).toEqual(payload);
    });

    it('should return 400 if name or email are missing', async () => {
        const res = await request(app).post('/registration').send({ name: 'John' });

        expect(res.status).toBe(400);
        expect(res.body.message).toBe('Name and email are required');
    });

    it('should return all registrations with GET', async () => {
        console.log({ registrations: app.locals.registrations })

        const payload1 = { name: 'John', email: 'john@email.com' };
        const payload2 = { name: 'Anna', email: 'anna@email.com' };

        await request(app).post('/registration').send(payload2);



        const res = await request(app).get('/registration');

        console.log({ body: res.body, registrations: app.locals.registrations })

        expect(res.status).toBe(200);
        expect(res.body).toEqual([payload1, payload2]);
    });
});

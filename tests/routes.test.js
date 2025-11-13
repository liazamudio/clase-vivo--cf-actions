const request = require('supertest');
const app = require('../server');

describe('Routes Tests', () => {
  describe('GET /', () => {
    test('debe retornar la página principal', async () => {
      const response = await request(app).get('/');
      expect(response.status).toBe(200);
      expect(response.type).toMatch(/html/);
    });
  });

  describe('GET /health', () => {
    test('debe retornar estado ok', async () => {
      const response = await request(app).get('/health');
      
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('status', 'ok');
      expect(response.body).toHaveProperty('timestamp');
    });
  });

  describe('GET /api/users', () => {
    test('debe retornar usuarios con parámetro count', async () => {
      const response = await request(app)
        .get('/api/users?count=5')
        .timeout(10000); 
      
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('success', true);
      expect(response.body).toHaveProperty('data');
      expect(Array.isArray(response.body.data)).toBe(true);
    }, 15000); 

    test('debe usar valor por defecto si no se especifica count', async () => {
      const response = await request(app)
        .get('/api/users')
        .timeout(10000);
      
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('success', true);
      expect(response.body.data.length).toBeLessThanOrEqual(10);
    }, 15000);
  });

  describe('Rutas inexistentes', () => {
    test('debe retornar 404 para rutas no definidas', async () => {
      const response = await request(app).get('/ruta-inexistente');
      expect(response.status).toBe(404);
    });
  });
});

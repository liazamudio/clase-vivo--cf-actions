const { getRandomUsers } = require('../src/api');
const fetch = require('node-fetch');

jest.mock('node-fetch');

describe('API Tests', () => {
  describe('getRandomUsers', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    test('debe validar que todos los campos requeridos estén presentes', async () => {
      const mockResponse = {
        results: [
          {
            login: { uuid: 'test-uuid' },
            name: { first: 'Test', last: 'User' },
            email: 'test@example.com',
            location: { country: 'Spain', city: 'Madrid' },
            picture: { medium: 'http://test.jpg' },
            phone: '+34-123-456'
          }
        ]
      };

      fetch.mockResolvedValue({
        ok: true,
        json: async () => mockResponse
      });

      const users = await getRandomUsers(1);
      const user = users[0];

      expect(user).toHaveProperty('id');
      expect(user).toHaveProperty('name');
      expect(user).toHaveProperty('email');
      expect(user).toHaveProperty('country');
      expect(user).toHaveProperty('city');
      expect(user).toHaveProperty('picture');
      expect(user).toHaveProperty('phone');

      expect(typeof user.id).toBe('string');
      expect(typeof user.name).toBe('string');
      expect(typeof user.email).toBe('string');
      expect(typeof user.country).toBe('string');
      expect(typeof user.city).toBe('string');
      expect(typeof user.picture).toBe('string');
      expect(typeof user.phone).toBe('string');
    });

    test('debe retornar array de usuarios cuando la API responde correctamente', async () => {
      const mockResponse = {
        results: [
          {
            login: { uuid: '123' },
            name: { first: 'John', last: 'Doe' },
            email: 'john@example.com',
            location: { country: 'USA', city: 'New York' },
            picture: { medium: 'http://example.com/photo.jpg' },
            phone: '123-456-7890'
          }
        ]
      };

      fetch.mockResolvedValue({
        ok: true,
        json: async () => mockResponse
      });

      const users = await getRandomUsers(1);

      expect(users).toHaveLength(1);
      expect(users[0]).toEqual({
        id: '123',
        name: 'John Doe',
        email: 'john@example.com',
        country: 'USA',
        city: 'New York',
        picture: 'http://example.com/photo.jpg',
        phone: '123-456-7890'
      });
    });

    test('debe solicitar el número correcto de usuarios', async () => {
      const mockResponse = { results: [] };
      
      fetch.mockResolvedValue({
        ok: true,
        json: async () => mockResponse
      });

      await getRandomUsers(5);

      expect(fetch).toHaveBeenCalledWith('https://randomuser.me/api/?results=5');
    });

    test('debe usar 10 como valor por defecto si no se especifica cantidad', async () => {
      const mockResponse = { results: [] };
      
      fetch.mockResolvedValue({
        ok: true,
        json: async () => mockResponse
      });

      await getRandomUsers();

      expect(fetch).toHaveBeenCalledWith('https://randomuser.me/api/?results=10');
    });

    test('debe lanzar error cuando la API falla', async () => {
      fetch.mockResolvedValue({
        ok: false,
        status: 500
      });

      await expect(getRandomUsers()).rejects.toThrow('Error HTTP: 500');
    });

    test('debe manejar errores de red', async () => {
      fetch.mockRejectedValue(new Error('Network error'));

      await expect(getRandomUsers()).rejects.toThrow('Network error');
    });
  });
});

const express = require('express');
const { getRandomUsers } = require('./api');

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile('index.html', { root: './public' });
});

router.get('/api/users', async (req, res) => {
  try {
    const count = parseInt(req.query.count) || 10;
    const users = await getRandomUsers(count);
    res.json({ success: true, data: users });
  } catch (_error) {
    res.status(500).json({ 
      success: false, 
      error: 'Error al obtener datos de la API' + _error.message 
    });
  }
});

router.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

module.exports = router;

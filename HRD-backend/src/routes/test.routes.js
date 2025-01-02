const express = require('express');
const router = express.Router();
const pool = require('../config/database');

// Test database connection
router.get('/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send('Database error');
  }
});

// Basic test route
router.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

module.exports = router;

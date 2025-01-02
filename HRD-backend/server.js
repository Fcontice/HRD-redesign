require('dotenv').config();

// Database connection
const { Pool } = require('pg');

// server.js
const express = require('express');
const cors = require('cors');

const app = require('./src/app');
app.use(cors()); // Allow requests from frontend (adjust as needed)
app.use(express.json());

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
  
  app.get('/test-db', async (req, res) => {
    try {
      const result = await pool.query('SELECT NOW()');
      res.json(result.rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).send('Database error');
    }
  });
// Example route
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});

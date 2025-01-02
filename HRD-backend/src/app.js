require('dotenv').config();
const express = require('express');
const cors = require('cors');
const testRoutes = require('./routes/test.routes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/', testRoutes);

module.exports = app;

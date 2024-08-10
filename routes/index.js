// routes/index.js
const express = require('express');
const router = express.Router();

// Basic route
router.get('/', (req, res) => {
  res.send('Welcome to the Express.js server!');
});

// Sample route
router.get('/api/sample', (req, res) => {
  res.json({ message: 'This is a sample endpoint.' });
});

module.exports = router;
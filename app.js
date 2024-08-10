// app.js
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// Use middleware
app.use(cors());

// Use routes
app.use('/', routes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
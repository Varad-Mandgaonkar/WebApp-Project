require('dotenv').config();

const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/products');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Use express.json() only, no need for body-parser separately

// Routes
app.use('/api/products', productRoutes);

// Root route
app.get('/', (_req, res) => {
  res.send('API is running successfully.');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

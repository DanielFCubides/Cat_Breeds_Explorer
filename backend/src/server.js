const express = require('express');
const breedsRoutes = require('./routes/breeds');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/breeds', breedsRoutes);

app.get('/', (req, res) => {
  res.json({
    message: 'Cat Breeds Explorer API',
    version: '1.0.0',
    endpoints: {
      'GET /api/breeds': 'Get all breeds',
      'GET /api/breeds/:id': 'Get specific breed by ID'
    }
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message
  });
});

app.listen(port, () => {
  console.log(`🚀 Cat Breeds API running on port ${port}`);
  console.log(`📡 API available at http://localhost:${port}/api`);
});

module.exports = app;
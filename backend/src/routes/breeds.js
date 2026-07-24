const express = require('express');
const router = express.Router();
const breedsData = require('../data/breeds.json');

// Get all breeds (for dropdown)
router.get('/', (req, res) => {
  try {
    const breeds = breedsData.breeds.map(breed => ({
      id: breed.id,
      name: breed.name
    }));
    res.json({
      success: true,
      data: breeds
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch breeds'
    });
  }
});

// Get specific breed by ID
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const breed = breedsData.breeds.find(b => b.id === id);

    if (!breed) {
      return res.status(404).json({
        success: false,
        error: 'Breed not found'
      });
    }

    res.json({
      success: true,
      data: breed
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch breed'
    });
  }
});

module.exports = router;
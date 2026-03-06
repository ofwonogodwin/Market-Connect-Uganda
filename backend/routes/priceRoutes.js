/**
 * Price Routes
 * 
 * This file defines the API routes for market price operations.
 * Routes are mapped to controller functions.
 */

const express = require('express');
const router = express.Router();
const priceController = require('../controllers/priceController');

// GET /api/prices - Get all market prices
router.get('/', priceController.getAllPrices);

module.exports = router;

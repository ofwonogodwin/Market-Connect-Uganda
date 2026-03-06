/**
 * Produce Routes
 * 
 * This file defines the API routes for produce-related operations.
 * Routes are mapped to controller functions.
 */

const express = require('express');
const router = express.Router();
const produceController = require('../controllers/produceController');

// GET /api/produce - Get all produce listings
router.get('/', produceController.getAllProduce);

// POST /api/produce - Add a new produce listing
router.post('/', produceController.addProduce);

module.exports = router;

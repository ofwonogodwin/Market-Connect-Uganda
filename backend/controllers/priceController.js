/**
 * Price Controller
 * 
 * This controller handles HTTP requests related to market prices.
 * It provides approximate market prices for various crops in different towns.
 */

const produceModel = require('../models/produceModel');

/**
 * Get all market prices
 * Route: GET /api/prices
 */
const getAllPrices = async (req, res) => {
    try {
        // Fetch all market prices from the database
        const prices = await produceModel.getAllPrices();
        res.json(prices);
    } catch (error) {
        console.error('Error fetching prices:', error.message);
        res.status(500).json({ error: 'Failed to fetch market prices' });
    }
};

// Export controller functions
module.exports = {
    getAllPrices
};

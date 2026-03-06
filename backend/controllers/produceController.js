/**
 * Produce Controller
 * 
 * This controller handles HTTP requests related to produce listings.
 * It receives requests from routes and uses the model to interact with the database.
 */

const produceModel = require('../models/produceModel');

/**
 * Get all produce listings
 * Route: GET /api/produce
 */
const getAllProduce = async (req, res) => {
    try {
        // Fetch all produce from the database
        const produce = await produceModel.getAllProduce();
        res.json(produce);
    } catch (error) {
        console.error('Error fetching produce:', error.message);
        res.status(500).json({ error: 'Failed to fetch produce listings' });
    }
};

/**
 * Add a new produce listing
 * Route: POST /api/produce
 */
const addProduce = async (req, res) => {
    try {
        const { crop_name, quantity, location, contact } = req.body;

        // Validate required fields
        if (!crop_name || !quantity || !location || !contact) {
            return res.status(400).json({
                error: 'All fields are required: crop_name, quantity, location, contact'
            });
        }

        // Add the produce to the database
        const newProduce = await produceModel.addProduce({
            crop_name,
            quantity,
            location,
            contact
        });

        // Return the created produce with 201 status
        res.status(201).json(newProduce);
    } catch (error) {
        console.error('Error adding produce:', error.message);
        res.status(500).json({ error: 'Failed to add produce listing' });
    }
};

// Export controller functions
module.exports = {
    getAllProduce,
    addProduce
};

/**
 * Produce Model
 * 
 * This model handles all database operations related to produce listings.
 * It provides functions to get all produce and add new produce.
 */

const db = require('../db');

/**
 * Get all produce listings from the database
 * @returns {Promise} - Resolves with array of produce items
 */
const getAllProduce = () => {
    return new Promise((resolve, reject) => {
        // Select all produce, ordered by newest first
        const sql = 'SELECT * FROM produce ORDER BY created_at DESC';

        db.all(sql, [], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
};

/**
 * Add a new produce listing to the database
 * @param {Object} produce - The produce data to add
 * @param {string} produce.crop_name - Name of the crop
 * @param {string} produce.quantity - Quantity available (e.g., "50 kg")
 * @param {string} produce.location - Location of the farmer
 * @param {string} produce.contact - Contact information
 * @returns {Promise} - Resolves with the newly created produce item
 */
const addProduce = (produce) => {
    return new Promise((resolve, reject) => {
        const { crop_name, quantity, location, contact } = produce;

        const sql = `
            INSERT INTO produce (crop_name, quantity, location, contact)
            VALUES (?, ?, ?, ?)
        `;

        db.run(sql, [crop_name, quantity, location, contact], function (err) {
            if (err) {
                reject(err);
            } else {
                // Return the newly created produce with its ID
                resolve({
                    id: this.lastID,
                    crop_name,
                    quantity,
                    location,
                    contact,
                    created_at: new Date().toISOString()
                });
            }
        });
    });
};

/**
 * Get all market prices from the database
 * @returns {Promise} - Resolves with array of market prices
 */
const getAllPrices = () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM market_prices ORDER BY crop_name, town';

        db.all(sql, [], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
};

// Export model functions
module.exports = {
    getAllProduce,
    addProduce,
    getAllPrices
};

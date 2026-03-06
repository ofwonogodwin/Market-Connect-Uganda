/**
 * Database Configuration for MarketConnect Uganda
 * 
 * This file sets up the SQLite database connection and creates
 * the necessary tables if they don't exist.
 */

const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Create database file in the backend folder
const dbPath = path.join(__dirname, 'marketconnect.db');

// Initialize SQLite database connection
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error connecting to database:', err.message);
    } else {
        console.log('Connected to SQLite database');
    }
});

/**
 * Initialize database tables
 * Creates 'produce' and 'market_prices' tables if they don't exist
 */
const initializeDatabase = () => {
    // Create produce table - stores farmer listings
    db.run(`
        CREATE TABLE IF NOT EXISTS produce (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            crop_name TEXT NOT NULL,
            quantity TEXT NOT NULL,
            location TEXT NOT NULL,
            contact TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `, (err) => {
        if (err) {
            console.error('Error creating produce table:', err.message);
        } else {
            console.log('Produce table ready');
        }
    });

    // Create market_prices table - stores average crop prices by town
    db.run(`
        CREATE TABLE IF NOT EXISTS market_prices (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            crop_name TEXT NOT NULL,
            town TEXT NOT NULL,
            average_price INTEGER NOT NULL
        )
    `, (err) => {
        if (err) {
            console.error('Error creating market_prices table:', err.message);
        } else {
            console.log('Market prices table ready');
            // Add some sample data if table is empty
            seedMarketPrices();
        }
    });
};

/**
 * Seed market prices with sample data
 * This adds some initial price data for common crops in Uganda
 */
const seedMarketPrices = () => {
    db.get('SELECT COUNT(*) as count FROM market_prices', (err, row) => {
        if (err) {
            console.error('Error checking market_prices:', err.message);
            return;
        }

        // Only seed if table is empty
        if (row.count === 0) {
            const samplePrices = [
                ['Maize', 'Kampala', 1500],
                ['Maize', 'Mbale', 1300],
                ['Maize', 'Gulu', 1200],
                ['Beans', 'Kampala', 3500],
                ['Beans', 'Mbarara', 3200],
                ['Beans', 'Jinja', 3300],
                ['Cassava', 'Kampala', 800],
                ['Cassava', 'Lira', 600],
                ['Tomatoes', 'Kampala', 4000],
                ['Tomatoes', 'Masaka', 3500],
                ['Bananas (Matooke)', 'Kampala', 25000],
                ['Bananas (Matooke)', 'Mbarara', 18000],
                ['Rice', 'Kampala', 4500],
                ['Rice', 'Jinja', 4000],
                ['Groundnuts', 'Kampala', 5000],
                ['Groundnuts', 'Soroti', 4500]
            ];

            const stmt = db.prepare('INSERT INTO market_prices (crop_name, town, average_price) VALUES (?, ?, ?)');

            samplePrices.forEach(price => {
                stmt.run(price, (err) => {
                    if (err) console.error('Error seeding price:', err.message);
                });
            });

            stmt.finalize();
            console.log('Sample market prices added');
        }
    });
};

// Initialize the database when this module is loaded
initializeDatabase();

// Export the database connection for use in other files
module.exports = db;

/**
 * MarketConnect Uganda - Backend Server
 * 
 * This is the main entry point for the backend API.
 * It sets up Express, middleware, and routes.
 */

const express = require('express');
const cors = require('cors');

// Import routes
const produceRoutes = require('./routes/produceRoutes');
const priceRoutes = require('./routes/priceRoutes');

// Initialize Express app
const app = express();

// Define the port (use environment variable or default to 5000)
const PORT = process.env.PORT || 5000;

// ===================
// MIDDLEWARE
// ===================

// Enable CORS - allows frontend to make requests to this API
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// ===================
// ROUTES
// ===================

// Mount produce routes at /api/produce
app.use('/api/produce', produceRoutes);

// Mount price routes at /api/prices
app.use('/api/prices', priceRoutes);

// Root route - simple welcome message
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to MarketConnect Uganda API',
        endpoints: {
            produce: '/api/produce',
            prices: '/api/prices'
        }
    });
});

// ===================
// ERROR HANDLING
// ===================

// Handle 404 - Route not found
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// ===================
// START SERVER
// ===================

app.listen(PORT, () => {
    console.log(`\n=================================`);
    console.log(`MarketConnect Uganda API`);
    console.log(`Server running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
    console.log(`=================================\n`);
});

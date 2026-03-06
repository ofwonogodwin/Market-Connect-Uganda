/**
 * API Service
 * 
 * This file contains all API calls to the backend.
 * Using Axios for HTTP requests.
 */

import axios from 'axios';

// Base URL for the backend API
const API_BASE_URL = 'http://localhost:5000/api';

// Create an axios instance with default config
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

/**
 * Fetch all produce listings from the API
 * @returns {Promise} - Array of produce items
 */
export const getAllProduce = async () => {
    try {
        const response = await api.get('/produce');
        return response.data;
    } catch (error) {
        console.error('Error fetching produce:', error);
        throw error;
    }
};

/**
 * Add a new produce listing
 * @param {Object} produceData - The produce data to submit
 * @returns {Promise} - The created produce item
 */
export const addProduce = async (produceData) => {
    try {
        const response = await api.post('/produce', produceData);
        return response.data;
    } catch (error) {
        console.error('Error adding produce:', error);
        throw error;
    }
};

/**
 * Fetch all market prices from the API
 * @returns {Promise} - Array of market prices
 */
export const getMarketPrices = async () => {
    try {
        const response = await api.get('/prices');
        return response.data;
    } catch (error) {
        console.error('Error fetching prices:', error);
        throw error;
    }
};

export default api;

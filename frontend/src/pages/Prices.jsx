/**
 * Market Prices Page
 * 
 * This page displays approximate market prices for various crops
 * in different towns across Uganda.
 */

import { useState, useEffect } from 'react';
import { getAllPrices } from '../services/api';

function Prices() {
    // State to store market prices
    const [prices, setPrices] = useState([]);

    // Loading and error states
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    /**
     * Fetch prices when component mounts
     */
    useEffect(() => {
        fetchPrices();
    }, []);

    /**
     * Function to fetch all market prices from the API
     */
    const fetchPrices = async () => {
        try {
            setLoading(true);
            const data = await getAllPrices();
            setPrices(data);
            setError('');
        } catch (err) {
            setError('Failed to load market prices. Is the backend running?');
            console.error('Error fetching prices:', err);
        } finally {
            setLoading(false);
        }
    };

    /**
     * Format price with Ugandan Shilling symbol
     * @param {number} price - The price to format
     */
    const formatPrice = (price) => {
        return `UGX ${price.toLocaleString()}`;
    };

    return (
        <div className="prices-page">
            {/* Page Header */}
            <div className="page-header">
                <h1>Market Prices</h1>
                <p>Approximate prices for common crops in different towns</p>
            </div>

            {/* Loading State */}
            {loading && (
                <div className="loading">Loading market prices...</div>
            )}

            {/* Error State */}
            {error && (
                <div className="error-message">{error}</div>
            )}

            {/* Prices Table */}
            {!loading && !error && (
                <>
                    {prices.length > 0 ? (
                        <div className="table-container">
                            <table className="prices-table">
                                <thead>
                                    <tr>
                                        <th>Crop</th>
                                        <th>Town</th>
                                        <th>Average Price (per kg/bunch)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {prices.map((price) => (
                                        <tr key={price.id}>
                                            <td>{price.crop_name}</td>
                                            <td>{price.town}</td>
                                            <td className="price-cell">
                                                {formatPrice(price.average_price)}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="no-prices">
                            <p>No price data available yet.</p>
                        </div>
                    )}
                </>
            )}

            {/* Disclaimer */}
            <div className="disclaimer">
                <p>
                    <strong>Note:</strong> These prices are approximate and may vary
                    based on quality, season, and market conditions.
                </p>
            </div>
        </div>
    );
}

export default Prices;

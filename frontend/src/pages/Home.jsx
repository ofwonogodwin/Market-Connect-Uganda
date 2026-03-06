/**
 * Home Page
 * 
 * The main page that displays all available produce listings.
 * Buyers can browse what farmers have listed for sale.
 */

import { useState, useEffect } from 'react';
import { getAllProduce } from '../services/api';
import ProduceCard from '../components/ProduceCard';

function Home() {
    // State to store produce listings
    const [produce, setProduce] = useState([]);

    // Loading state to show spinner while fetching
    const [loading, setLoading] = useState(true);

    // Error state to handle fetch errors
    const [error, setError] = useState('');

    /**
     * Fetch produce listings when component mounts
     * useEffect with empty dependency array runs once on mount
     */
    useEffect(() => {
        fetchProduce();
    }, []);

    /**
     * Fetch all produce from the API
     */
    const fetchProduce = async () => {
        try {
            setLoading(true);
            const data = await getAllProduce();
            setProduce(data);
            setError('');
        } catch (err) {
            setError('Failed to load produce listings. Please try again later.');
            console.error('Error fetching produce:', err);
        } finally {
            setLoading(false);
        }
    };

    // Show loading state
    if (loading) {
        return (
            <div className="page">
                <div className="loading">Loading produce listings...</div>
            </div>
        );
    }

    // Show error state
    if (error) {
        return (
            <div className="page">
                <div className="error">{error}</div>
                <button onClick={fetchProduce} className="retry-btn">
                    Try Again
                </button>
            </div>
        );
    }

    return (
        <div className="page">
            {/* Page Header */}
            <div className="page-header">
                <h1>Available Produce</h1>
                <p>Browse fresh produce from farmers across Uganda</p>
            </div>

            {/* Produce Grid */}
            {produce.length === 0 ? (
                // Show message if no produce available
                <div className="no-data">
                    <p>No produce listings available yet.</p>
                    <p>Be the first farmer to list your produce!</p>
                </div>
            ) : (
                // Display produce cards in a grid
                <div className="produce-grid">
                    {produce.map((item) => (
                        <ProduceCard key={item.id} produce={item} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;

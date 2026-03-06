/**
 * AddProduceForm Component
 * 
 * A form for farmers to add new produce listings.
 * Collects crop name, quantity, location, and contact information.
 */

import { useState } from 'react';
import { addProduce } from '../services/api';

function AddProduceForm({ onProduceAdded }) {
    // Form state - each field has its own state
    const [cropName, setCropName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [location, setLocation] = useState('');
    const [contact, setContact] = useState('');

    // Loading and error states
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    /**
     * Handle form submission
     * Validates input and sends data to the API
     */
    const handleSubmit = async (e) => {
        // Prevent page refresh
        e.preventDefault();

        // Clear previous messages
        setError('');
        setSuccess('');

        // Basic validation
        if (!cropName || !quantity || !location || !contact) {
            setError('Please fill in all fields');
            return;
        }

        setLoading(true);

        try {
            // Send data to API
            const newProduce = await addProduce({
                crop_name: cropName,
                quantity,
                location,
                contact
            });

            // Show success message
            setSuccess('Produce listing added successfully!');

            // Clear the form
            setCropName('');
            setQuantity('');
            setLocation('');
            setContact('');

            // Notify parent component if callback provided
            if (onProduceAdded) {
                onProduceAdded(newProduce);
            }
        } catch (err) {
            // Show error message
            setError('Failed to add produce. Please try again.');
            console.error('Error adding produce:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="add-produce-form" onSubmit={handleSubmit}>
            {/* Error message */}
            {error && <div className="message error">{error}</div>}

            {/* Success message */}
            {success && <div className="message success">{success}</div>}

            {/* Crop Name Field */}
            <div className="form-group">
                <label htmlFor="cropName">Crop Name</label>
                <input
                    type="text"
                    id="cropName"
                    value={cropName}
                    onChange={(e) => setCropName(e.target.value)}
                    placeholder="e.g., Maize, Beans, Tomatoes"
                    disabled={loading}
                />
            </div>

            {/* Quantity Field */}
            <div className="form-group">
                <label htmlFor="quantity">Quantity</label>
                <input
                    type="text"
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="e.g., 50 kg, 100 bunches"
                    disabled={loading}
                />
            </div>

            {/* Location Field */}
            <div className="form-group">
                <label htmlFor="location">Location</label>
                <input
                    type="text"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g., Kampala, Jinja, Mbarara"
                    disabled={loading}
                />
            </div>

            {/* Contact Field */}
            <div className="form-group">
                <label htmlFor="contact">Contact (Phone)</label>
                <input
                    type="text"
                    id="contact"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="e.g., 0700 123 456"
                    disabled={loading}
                />
            </div>

            {/* Submit Button */}
            <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? 'Adding...' : 'Add Produce'}
            </button>
        </form>
    );
}

export default AddProduceForm;

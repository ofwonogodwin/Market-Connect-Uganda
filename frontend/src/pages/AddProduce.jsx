/**
 * Add Produce Page
 * 
 * Page where farmers can add new produce listings.
 * Contains the AddProduceForm component.
 */

import { useNavigate } from 'react-router-dom';
import AddProduceForm from '../components/AddProduceForm';

function AddProduce() {
    // Hook to navigate to other pages
    const navigate = useNavigate();

    /**
     * Callback when produce is successfully added
     * Navigates to home page to see the new listing
     */
    const handleProduceAdded = (newProduce) => {
        // Wait a moment to show success message, then navigate
        setTimeout(() => {
            navigate('/');
        }, 1500);
    };

    return (
        <div className="page">
            {/* Page Header */}
            <div className="page-header">
                <h1>Add Your Produce</h1>
                <p>List your crops for buyers to find</p>
            </div>

            {/* Form Container */}
            <div className="form-container">
                <AddProduceForm onProduceAdded={handleProduceAdded} />
            </div>

            {/* Instructions */}
            <div className="instructions">
                <h3>Tips for a good listing:</h3>
                <ul>
                    <li>Be specific about the crop name (e.g., "Red Onions" instead of just "Onions")</li>
                    <li>Include the unit with quantity (e.g., "50 kg" or "100 bunches")</li>
                    <li>Provide an accurate location for buyers to find you</li>
                    <li>Use a phone number where you can be reached</li>
                </ul>
            </div>
        </div>
    );
}

export default AddProduce;

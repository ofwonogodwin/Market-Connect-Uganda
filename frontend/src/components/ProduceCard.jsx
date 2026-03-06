/**
 * ProduceCard Component
 * 
 * This component displays a single produce listing as a card.
 * It shows the crop name, quantity, location, and contact info.
 */

function ProduceCard({ produce }) {
    // Destructure produce properties
    const { crop_name, quantity, location, contact, created_at } = produce;

    // Format the date to be more readable
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-UG', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    return (
        <div className="produce-card">
            {/* Crop name as the card header */}
            <h3 className="produce-card-title">{crop_name}</h3>

            {/* Produce details */}
            <div className="produce-card-details">
                <p>
                    <strong>Quantity:</strong> {quantity}
                </p>
                <p>
                    <strong>Location:</strong> {location}
                </p>
                <p>
                    <strong>Contact:</strong> {contact}
                </p>
                <p className="produce-card-date">
                    <small>Listed: {formatDate(created_at)}</small>
                </p>
            </div>
        </div>
    );
}

export default ProduceCard;

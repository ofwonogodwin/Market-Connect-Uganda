/**
 * Navbar Component
 * 
 * This component displays the navigation bar at the top of the page.
 * It provides links to navigate between different pages.
 */

import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            {/* Logo/Brand name */}
            <div className="navbar-brand">
                <Link to="/">MarketConnect Uganda</Link>
            </div>

            {/* Navigation links */}
            <ul className="navbar-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/add-produce">Add Produce</Link>
                </li>
                <li>
                    <Link to="/prices">Market Prices</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

/**
 * App.jsx - Main Application Component
 * 
 * This is the root component of the React application.
 * It sets up routing and includes the Navbar that appears on all pages.
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddProduce from './pages/AddProduce';
import Prices from './pages/Prices';
import './App.css';

function App() {
    return (
        // Router wraps the entire app to enable navigation
        <Router>
            <div className="app">
                {/* Navbar appears on every page */}
                <Navbar />

                {/* Main content area */}
                <main className="main-content">
                    {/* Routes define which page to show based on URL */}
                    <Routes>
                        {/* Home page - shows all produce listings */}
                        <Route path="/" element={<Home />} />

                        {/* Add produce page - form to add new listings */}
                        <Route path="/add-produce" element={<AddProduce />} />

                        {/* Market prices page - shows price information */}
                        <Route path="/prices" element={<Prices />} />
                    </Routes>
                </main>

                {/* Footer */}
                <footer className="footer">
                    <p>© 2024 MarketConnect Uganda - Connecting Farmers with Buyers</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;

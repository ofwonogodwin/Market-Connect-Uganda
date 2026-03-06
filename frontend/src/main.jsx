/**
 * main.jsx - Application Entry Point
 * 
 * This file renders the React application to the DOM.
 * It imports the root App component and mounts it to the 'root' div in index.html.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Create a root and render the App component
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

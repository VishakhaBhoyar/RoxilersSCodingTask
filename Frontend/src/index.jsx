// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 uses `react-dom/client` for rendering
import './index.css'; // Import global styles
import App from './App'; // Import the main App component
import reportWebVitals from './reportWebVitals'; // Optional: for measuring performance

// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component into the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optionally, you can measure performance metrics
reportWebVitals(console.log);

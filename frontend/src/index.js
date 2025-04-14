import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // Wrapping the App with BrowserRouter
import App from './App';

// Import global styles
import './styles/variables.css';   // Variables like colors, fonts, etc.
import './index.css';              // Global styles for the app
import './styles/dashboard.css';   // Dashboard-specific styles
import './styles/products.css';    // Product page-specific styles
import './styles/editProduct.css'; // Category page-specific styles
import './styles/addProduct.css';  // Transaction page-specific styles
import './styles/supplier.css';    // Supplier page-specific styles
import './styles/customer.css';    // Customer page-specific styles
import './styles/location.css';    // Location page-specific styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

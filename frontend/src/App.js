import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Dashboard from './components/Dashboard';
import BusinessList from './components/BusinessList';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';
import SupplierList from './components/SupplierList';
import CustomerList from './components/CustomerList';
import LocationList from './components/LocationList';
import TransactionHistory from './components/TransactionHistory';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';

// Global & Component Styles
import './styles/variables.css';
import './styles/dashboard.css';
import './styles/products.css';
import './styles/supplier.css';
import './styles/customer.css';
import './styles/location.css';
import './styles/addProduct.css';
import './styles/editProduct.css';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/businesses" element={<BusinessList />} />
        <Route path="/categories" element={<CategoryList />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/suppliers" element={<SupplierList />} />
        <Route path="/customers" element={<CustomerList />} />
        <Route path="/locations" element={<LocationList />} />
        <Route path="/transactions" element={<TransactionHistory />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
      </Routes>
    </Layout>
  );
}

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

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

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/businesses" element={<BusinessList />} />
        <Route path="/categories" element={<CategoryList />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/suppliers" element={<SupplierList />} />
        <Route path="/customers" element={<CustomerList />} />
        <Route path="/locations" element={<LocationList />} />
        <Route path="/transactions" element={<TransactionHistory />} />
        <Route path="/products/add" element={<AddProduct />} />
        <Route path="/products/edit/:id" element={<EditProduct />} />
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </Layout>
  );
}

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Dashboard from './components/Dashboard';
import BusinessList from './components/BusinessList';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';
import SupplierList from './components/SupplierList';
import CustomerList from './components/CustomerList';
import LocationList from './components/LocationList';
import TransactionList from './components/TransactionList';
import UserList from './components/UserList';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="businesses" element={<BusinessList />} />
          <Route path="categories" element={<CategoryList />} />
          <Route path="products" element={<ProductList />} />
          <Route path="suppliers" element={<SupplierList />} />
          <Route path="customers" element={<CustomerList />} />
          <Route path="locations" element={<LocationList />} />
          <Route path="transactions" element={<TransactionList />} />
          <Route path="users" element={<UserList />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

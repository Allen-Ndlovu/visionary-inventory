import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Dashboard     from './components/Dashboard';
import BusinessList  from './components/BusinessList';
import CategoryList  from './components/CategoryList';
import ProductList   from './components/ProductList';
import SupplierList  from './components/SupplierList';
import CustomerList  from './components/CustomerList';
import InventoryList from './components/InventoryList';
import PurchaseList  from './components/PurchaseList';
import SaleList      from './components/SaleList';
import LogList       from './components/LogList';
import UserList      from './components/UserList';

function App() {
  return (
    <div className="app">
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/businesses" element={<BusinessList />} />
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/suppliers" element={<SupplierList />} />
          <Route path="/customers" element={<CustomerList />} />
          <Route path="/inventory" element={<InventoryList />} />
          <Route path="/purchases" element={<PurchaseList />} />
          <Route path="/sales" element={<SaleList />} />
          <Route path="/logs" element={<LogList />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

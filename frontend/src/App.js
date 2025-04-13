import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import ProductList from './components/ProductList';
import SupplierList from './components/SupplierList';
import CustomerList from './components/CustomerList';
import InventoryList from './components/InventoryList';
import PurchaseList from './components/PurchaseList';
import SaleList from './components/SaleList';
import LogList from './components/LogList';

function App() {
  return (
    <div className="app-grid">
      <Sidebar />
      <div className="main-area">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/suppliers" element={<SupplierList />} />
            <Route path="/customers" element={<CustomerList />} />
            <Route path="/inventory" element={<InventoryList />} />
            <Route path="/purchases" element={<PurchaseList />} />
            <Route path="/sales" element={<SaleList />} />
            <Route path="/logs" element={<LogList />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

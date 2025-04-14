import React from 'react';
import ProductList from './ProductList';
import CategoryList from './CategoryList';
import TransactionHistory from './TransactionHistory';
import SupplierList from './SupplierList';
import CustomerList from './CustomerList';
import LocationList from './LocationList';
import '../styles/dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard-sections">
        <ProductList />
        <CategoryList />
        <TransactionHistory />
        <SupplierList />
        <CustomerList />
        <LocationList />
      </div>
    </div>
  );
};

export default Dashboard;

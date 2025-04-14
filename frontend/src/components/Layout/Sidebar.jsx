// src/components/Layout/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Businesses', path: '/businesses' },
    { name: 'Categories', path: '/categories' },
    { name: 'Products', path: '/products' },
    { name: 'Suppliers', path: '/suppliers' },
    { name: 'Customers', path: '/customers' },
    { name: 'Locations', path: '/locations' },
    { name: 'Transactions', path: '/transactions' },
    { name: 'Add Product', path: '/products/add' },
  ];

  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        {menuItems.map((item) => (
          <li key={item.path} className="sidebar-item">
            <NavLink to={item.path} className="sidebar-link" activeClassName="active">
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

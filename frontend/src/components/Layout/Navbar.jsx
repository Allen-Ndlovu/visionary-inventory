import React from 'react';
import './Navbar.css';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Visionary Inventory</div>
      <div className="navbar-actions">
        <button className="toggle-btn" onClick={toggleSidebar}>
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

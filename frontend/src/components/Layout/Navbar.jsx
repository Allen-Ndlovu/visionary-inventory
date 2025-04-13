import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="header">
    <h1>Visionary Inventory</h1>
    <nav>
      <Link to="/dashboard" className="btn btn-secondary">Dashboard</Link>
    </nav>
  </header>
);

export default Navbar;

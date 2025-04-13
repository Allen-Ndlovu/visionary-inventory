import React from 'react';

export default function Navbar() {
  return (
    <header className="navbar">
      <h1>Inventory Dashboard</h1>
      <div className="navbar-user">
        <span>Welcome, Admin</span>
        <button className="btn">Logout</button>
      </div>
    </header>
  );
}

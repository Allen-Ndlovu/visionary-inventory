import React from 'react';

export default function Navbar() {
  return (
    <nav style={{
      background: 'var(--primary)',
      color: 'white',
      padding: 'var(--spacing)',
      borderRadius: 'var(--radius) var(--radius) 0 0'
    }}>
      <div className="container">
        <h1>Visionary Inventory</h1>
      </div>
    </nav>
  );
}

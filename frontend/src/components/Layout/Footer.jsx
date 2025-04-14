import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--primary)',
      color: 'white',
      padding: 'var(--spacing)',
      borderRadius: '0 0 var(--radius) var(--radius)',
      marginTop: 'var(--spacing)'
    }}>
      <div className="container">
        © {new Date().getFullYear()} Allen Ndlovu. All rights reserved.
      </div>
    </footer>
  );
}

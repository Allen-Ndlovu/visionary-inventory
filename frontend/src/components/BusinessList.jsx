import React, { useEffect, useState } from 'react';
import { fetchBusinesses } from '../services/api';
import '../styles/business.css';

export default function BusinessList() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchBusinesses().then(setItems);
  }, []);

  return (
    <div className="list-page">
      <h2>Businesses</h2>
      <div className="cards">
        {items.map(b => (
          <div key={b.id} className="card">
            <h3>{b.name}</h3>
            <p>{b.industry_type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

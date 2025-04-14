import React, { useEffect, useState } from 'react';
import { fetchCustomers } from '../services/api';
import '../styles/customer.css';

export default function CustomerList() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchCustomers().then(setItems);
  }, []);

  return (
    <div className="list-page">
      <h2>Customers</h2>
      <ul className="item-list">
        {items.map(c => (
          <li key={c.id}>
            <strong>{c.name}</strong><br/>
            {c.email}<br/>
            {c.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

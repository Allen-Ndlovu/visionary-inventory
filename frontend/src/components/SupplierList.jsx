import React, { useEffect, useState } from 'react';
import { fetchSuppliers } from '../services/api';
import '../styles/supplier.css';

export default function SupplierList() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchSuppliers().then(setItems);
  }, []);

  return (
    <div className="list-page">
      <h2>Suppliers</h2>
      <ul className="item-list">
        {items.map(s => (
          <li key={s.id}>
            <strong>{s.name}</strong><br/>
            {s.contact}<br/>
            {s.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

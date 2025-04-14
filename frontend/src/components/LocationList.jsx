import React, { useEffect, useState } from 'react';
import { fetchLocations } from '../services/api';
import '../styles/location.css';

export default function LocationList() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchLocations().then(setItems);
  }, []);

  return (
    <div className="list-page">
      <h2>Locations</h2>
      <ul className="item-list">
        {items.map(l => (
          <li key={l.id}>
            <strong>{l.name}</strong><br/>
            {l.address}
          </li>
        ))}
      </ul>
    </div>
  );
}

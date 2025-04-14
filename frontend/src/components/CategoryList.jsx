import React, { useEffect, useState } from 'react';
import { fetchCategories } from '../services/api';
import '../styles/category.css';

export default function CategoryList() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetchCategories().then(data => setCategories(data || []));
  }, []);

  return (
    <div className="category-list">
      <h2>Categories</h2>
      <div className="cards">
        {categories.map(c => (
          <div key={c.id} className="card">
            <h3>{c.name}</h3>
            <p>{c.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

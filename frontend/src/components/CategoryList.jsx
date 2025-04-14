import React, { useEffect, useState } from 'react';
import { fetchCategories } from '../services/api';



const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      const data = await fetchCategories();
      setCategories(data);
    };
    loadCategories();
  }, []);

  return (
    <div className="category-list">
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <p>{category.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;

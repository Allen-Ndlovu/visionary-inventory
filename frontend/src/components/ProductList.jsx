import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../services/api';
import formatCurrency from '../utils/formatCurrency';
import '../styles/product.css';

export default function ProductList() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchProducts().then(setItems);
  }, []);

  return (
    <div className="list-page">
      <div className="list-header">
        <h2>Products</h2>
        <Link to="/products/add" className="btn">+ Add Product</Link>
      </div>
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>SKU</th>
            <th>Price</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.sku}</td>
              <td>{formatCurrency(p.unit_price)}</td>
              <td>
                <Link to={`/products/edit/${p.id}`} className="link-btn">
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

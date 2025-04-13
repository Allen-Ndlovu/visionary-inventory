import React from 'react';
import useFetch from '../hooks/useFetch';

export default function ProductList() {
  const { data, loading, error } = useFetch('products');

  if (loading) return <p>Loading...</p>;
  if (error)   return <p>Error loading products</p>;

  return (
    <div className="list-page">
      <h2>Products</h2>
      <button className="btn">Add Product</button>
      <table>
        <thead>
          <tr>
            <th>Name</th><th>SKU</th><th>Price</th><th>Active</th>
          </tr>
        </thead>
        <tbody>
          {data.map(p => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.sku}</td>
              <td>{p.unit_price}</td>
              <td>{p.is_active ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

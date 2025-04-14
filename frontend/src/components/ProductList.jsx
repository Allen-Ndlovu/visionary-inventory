import React from 'react';
import useFetch from '../hooks/useFetch';

export default function ProductList() {
  const { data, loading, error } = useFetch('/products');

  if (loading) return <p>Loading products…</p>;
  if (error)   return <p>Error loading products</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th><th>Name</th><th>SKU</th><th>Price</th>
        </tr>
      </thead>
      <tbody>
        {data.map(p => (
          <tr key={p.id}>
            <td>{p.id}</td>
            <td>{p.name}</td>
            <td>{p.sku}</td>
            <td>{p.unit_price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

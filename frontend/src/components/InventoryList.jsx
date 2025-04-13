import React from 'react';
import useFetch from '../hooks/useFetch';

export default function InventoryList() {
  const { data, loading, error } = useFetch('inventory');

  if (loading) return <p>Loading...</p>;
  if (error)   return <p>Error loading inventory</p>;

  return (
    <div className="list-page">
      <h2>Inventory</h2>
      <button className="btn">Adjust Stock</button>
      <table>
        <thead><tr><th>Product ID</th><th>Qty</th><th>Min Level</th></tr></thead>
        <tbody>
          {data.map(i => (
            <tr key={i.id}>
              <td>{i.product_id}</td>
              <td>{i.quantity}</td>
              <td>{i.min_stock_level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

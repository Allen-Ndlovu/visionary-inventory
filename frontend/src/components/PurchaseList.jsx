import React from 'react';
import useFetch from '../hooks/useFetch';

export default function PurchaseList() {
  const { data, loading, error } = useFetch('purchases');

  if (loading) return <p>Loading...</p>;
  if (error)   return <p>Error loading purchases</p>;

  return (
    <div className="list-page">
      <h2>Purchases</h2>
      <button className="btn">New Purchase</button>
      <table>
        <thead><tr><th>Product</th><th>Supplier</th><th>Qty</th><th>Price</th></tr></thead>
        <tbody>
          {data.map(p => (
            <tr key={p.id}>
              <td>{p.product_id}</td>
              <td>{p.supplier_id}</td>
              <td>{p.quantity}</td>
              <td>{p.purchase_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

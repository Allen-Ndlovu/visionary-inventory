import React from 'react';
import useFetch from '../hooks/useFetch';

export default function TransactionList() {
  const { data, loading, error } = useFetch('/transactions');

  if (loading) return <p>Loading transactions…</p>;
  if (error)   return <p>Error loading transactions</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th><th>Product</th><th>Location</th><th>Type</th><th>Qty</th><th>When</th>
        </tr>
      </thead>
      <tbody>
        {data.map(t => (
          <tr key={t.id}>
            <td>{t.id}</td>
            <td>{t.product_id}</td>
            <td>{t.location_id}</td>
            <td>{t.type}</td>
            <td>{t.quantity}</td>
            <td>{new Date(t.timestamp).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

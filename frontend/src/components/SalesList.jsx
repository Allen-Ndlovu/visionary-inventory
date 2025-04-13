import React from 'react';
import useFetch from '../hooks/useFetch';

export default function SaleList() {
  const { data, loading, error } = useFetch('sales');

  if (loading) return <p>Loading...</p>;
  if (error)   return <p>Error loading sales</p>;

  return (
    <div className="list-page">
      <h2>Sales</h2>
      <button className="btn">New Sale</button>
      <table>
        <thead><tr><th>Product</th><th>Customer</th><th>Qty</th><th>Price</th></tr></thead>
        <tbody>
          {data.map(s => (
            <tr key={s.id}>
              <td>{s.product_id}</td>
              <td>{s.customer_id}</td>
              <td>{s.quantity}</td>
              <td>{s.sale_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

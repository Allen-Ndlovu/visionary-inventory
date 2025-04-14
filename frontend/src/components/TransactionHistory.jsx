import React, { useEffect, useState } from 'react';
import { fetchTransactions } from '../services/api';
import formatDate from '../utils/formatDate';
import '../styles/transaction.css';

export default function TransactionHistory() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchTransactions().then(setItems);
  }, []);

  return (
    <div className="list-page">
      <h2>Transactions</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th><th>Product</th><th>Type</th>
            <th>Qty</th><th>Price</th><th>Date</th>
          </tr>
        </thead>
        <tbody>
          {items.map(t => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.product_id}</td>
              <td>{t.type}</td>
              <td>{t.quantity}</td>
              <td>{t.unit_price ?? '-'}</td>
              <td>{formatDate(t.timestamp)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { fetchTransactions } from '../services/api';


const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const loadTransactions = async () => {
      const data = await fetchTransactions();
      setTransactions(data);
    };
    loadTransactions();
  }, []);

  return (
    <div className="transaction-history">
      <h2>Transaction History</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <p>{transaction.product_name}</p>
            <p>{transaction.type}</p>
            <p>{transaction.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;

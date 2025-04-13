import React from 'react';
import useFetch from '../hooks/useFetch';

const PurchaseList = () => {
  const purchases = useFetch('/purchases');

  return (
    <div className="content">
      <h2>Purchases</h2>
      <button className="btn btn-primary">New Purchase</button>
      <div className="table-responsive" style={{ marginTop: '1rem' }}>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product ID</th>
              <th>Supplier ID</th>
              <th>Quantity</th>
              <th>Purchase Price</th>
              <th>Purchase Date</th>
            </tr>
          </thead>
          <tbody>
            {purchases.map(p => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.product_id}</td>
                <td>{p.supplier_id}</td>
                <td>{p.quantity}</td>
                <td>${parseFloat(p.purchase_price).toFixed(2)}</td>
                <td>{new Date(p.purchase_date).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PurchaseList;

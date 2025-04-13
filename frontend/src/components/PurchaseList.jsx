import React from 'react';
import useFetch from '../hooks/useFetch';

const PurchaseList = () => {
  const items = useFetch('/purchases');

  return (
    <div className="content">
      <div className="page-container">
        <div className="page-header">
          <h2>Purchases</h2>
          <button className="btn btn-primary">New Purchase</button>
        </div>
        <div className="page-body table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th><th>Product ID</th><th>Supplier ID</th>
                <th>Qty</th><th>Price</th><th>Date</th>
              </tr>
            </thead>
            <tbody>
              {items.map(p => (
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
    </div>
  );
};

export default PurchaseList;

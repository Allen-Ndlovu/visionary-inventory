import React from 'react';
import useFetch from '../hooks/useFetch';

const SaleList = () => {
  const items = useFetch('/sales');

  return (
    <div className="content">
      <div className="page-container">
        <div className="page-header">
          <h2>Sales</h2>
          <button className="btn btn-primary">New Sale</button>
        </div>
        <div className="page-body table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th><th>Product ID</th><th>Customer ID</th>
                <th>Qty</th><th>Price</th><th>Date</th>
              </tr>
            </thead>
            <tbody>
              {items.map(s => (
                <tr key={s.id}>
                  <td>{s.id}</td>
                  <td>{s.product_id}</td>
                  <td>{s.customer_id}</td>
                  <td>{s.quantity}</td>
                  <td>${parseFloat(s.sale_price).toFixed(2)}</td>
                  <td>{new Date(s.sale_date).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SaleList;

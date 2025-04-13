import React from 'react';
import useFetch from '../hooks/useFetch';

const SaleList = () => {
  const sales = useFetch('/sales');

  return (
    <div className="content">
      <h2>Sales</h2>
      <button className="btn btn-primary">New Sale</button>
      <div className="table-responsive" style={{ marginTop: '1rem' }}>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product ID</th>
              <th>Customer ID</th>
              <th>Quantity</th>
              <th>Sale Price</th>
              <th>Sale Date</th>
            </tr>
          </thead>
          <tbody>
            {sales.map(s => (
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
  );
};

export default SaleList;

import React from 'react';
import useFetch from '../hooks/useFetch';

const InventoryList = () => {
  const items = useFetch('/inventory');

  return (
    <div className="content">
      <div className="page-container">
        <div className="page-header">
          <h2>Inventory</h2>
          <button className="btn btn-primary">New Record</button>
        </div>
        <div className="page-body table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th><th>Product ID</th><th>Quantity</th>
                <th>Min Level</th><th>Last Updated</th>
              </tr>
            </thead>
            <tbody>
              {items.map(i => (
                <tr key={i.id}>
                  <td>{i.id}</td>
                  <td>{i.product_id}</td>
                  <td>{i.quantity}</td>
                  <td>{i.min_stock_level}</td>
                  <td>{new Date(i.last_updated).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InventoryList;

import React from 'react';
import useFetch from '../hooks/useFetch';

const InventoryList = () => {
  const inventory = useFetch('/inventory');

  return (
    <div className="content">
      <h2>Inventory</h2>
      <button className="btn btn-primary">New Inventory Record</button>
      <div className="table-responsive" style={{ marginTop: '1rem' }}>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product ID</th>
              <th>Quantity</th>
              <th>Min Stock Level</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map(i => (
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
  );
};

export default InventoryList;

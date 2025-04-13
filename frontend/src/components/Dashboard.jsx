import React from 'react';
import useFetch from '../hooks/useFetch';

export default function Dashboard() {
  const { data: products } = useFetch('products');
  const { data: inventory } = useFetch('inventory');

  const lowStock = inventory.filter(i => i.quantity <= i.min_stock_level);

  return (
    <div className="dashboard">
      <div className="card">
        <h3>Total Products</h3>
        <p>{products.length}</p>
      </div>
      <div className="card">
        <h3>Total Inventory Items</h3>
        <p>{inventory.length}</p>
      </div>
      <div className="card warning">
        <h3>Low Stock Alerts</h3>
        <p>{lowStock.length}</p>
      </div>
    </div>
  );
}

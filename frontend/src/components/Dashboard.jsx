import React, { useEffect, useState } from 'react';
import api from '../services/api';

const Dashboard = () => {
  const [stats, setStats] = useState({
    products:0, lowStock:0, sales:0, purchases:0
  });

  useEffect(() => {
    Promise.all([
      api.get('/products'),
      api.get('/inventory'),
      api.get('/sales'),
      api.get('/purchases')
    ]).then(([p, inv, s, pc]) => {
      setStats({
        products: p.data.length,
        lowStock: inv.data.filter(i => i.quantity <= i.min_stock_level).length,
        sales: s.data.length,
        purchases: pc.data.length
      });
    });
  }, []);

  return (
    <div className="content">
      <div className="page-container">
        <div className="page-header">
          <h2>Dashboard</h2>
        </div>
        <div className="card-container">
          <div className="card">
            <h3>Total Products</h3>
            <p>{stats.products}</p>
          </div>
          <div className="card">
            <h3>Low‑Stock Items</h3>
            <p>{stats.lowStock}</p>
          </div>
          <div className="card">
            <h3>Sales</h3>
            <p>{stats.sales}</p>
          </div>
          <div className="card">
            <h3>Purchases</h3>
            <p>{stats.purchases}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

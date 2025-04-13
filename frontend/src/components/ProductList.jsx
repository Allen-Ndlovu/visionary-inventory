import React from 'react';
import useFetch from '../hooks/useFetch';

const ProductList = () => {
  const items = useFetch('/products');

  return (
    <div className="content">
      <div className="page-container">
        <div className="page-header">
          <h2>Products</h2>
          <button className="btn btn-primary">New Product</button>
        </div>
        <div className="page-body table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th><th>Name</th><th>SKU</th><th>Price</th><th>Active</th>
              </tr>
            </thead>
            <tbody>
              {items.map(p => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.name}</td>
                  <td>{p.sku}</td>
                  <td>${parseFloat(p.unit_price).toFixed(2)}</td>
                  <td>{p.is_active ? 'Yes' : 'No'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;

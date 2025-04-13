import React from 'react';
import useFetch from '../hooks/useFetch';

const ProductList = () => {
  const products = useFetch('/products');

  return (
    <div className="content">
      <h2>Products</h2>
      <button className="btn btn-primary">New Product</button>
      <div className="table-responsive" style={{ marginTop: '1rem' }}>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th><th>Name</th><th>SKU</th><th>Price</th><th>Active</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
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
  );
};

export default ProductList;

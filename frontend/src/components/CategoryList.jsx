import React from 'react';
import useFetch from '../hooks/useFetch';

const CategoryList = () => {
  const items = useFetch('/categories');

  return (
    <div className="content">
      <div className="page-container">
        <div className="page-header">
          <h2>Categories</h2>
          <button className="btn btn-primary">New Category</button>
        </div>
        <div className="page-body table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th><th>Name</th><th>Description</th><th>Business ID</th>
              </tr>
            </thead>
            <tbody>
              {items.map(c => (
                <tr key={c.id}>
                  <td>{c.id}</td>
                  <td>{c.name}</td>
                  <td>{c.description}</td>
                  <td>{c.business_id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;

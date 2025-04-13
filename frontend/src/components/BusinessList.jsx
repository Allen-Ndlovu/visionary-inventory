import React from 'react';
import useFetch from '../hooks/useFetch';

const BusinessList = () => {
  const businesses = useFetch('/businesses');

  return (
    <div className="content">
      <h2>Businesses</h2>
      <button className="btn btn-primary">New Business</button>
      <div className="table-responsive" style={{ marginTop: '1rem' }}>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th><th>Name</th><th>Industry</th><th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {businesses.map(b => (
              <tr key={b.id}>
                <td>{b.id}</td>
                <td>{b.name}</td>
                <td>{b.industry_type}</td>
                <td>{new Date(b.created_at).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BusinessList;

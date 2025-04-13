import React from 'react';
import useFetch from '../hooks/useFetch';

const CustomerList = () => {
  const items = useFetch('/customers');

  return (
    <div className="content">
      <div className="page-container">
        <div className="page-header">
          <h2>Customers</h2>
          <button className="btn btn-primary">New Customer</button>
        </div>
        <div className="page-body table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th><th>Name</th><th>Contact</th><th>Phone</th>
                <th>Email</th><th>Address</th><th>Business ID</th>
              </tr>
            </thead>
            <tbody>
              {items.map(c => (
                <tr key={c.id}>
                  <td>{c.id}</td>
                  <td>{c.name}</td>
                  <td>{c.contact_name}</td>
                  <td>{c.phone}</td>
                  <td>{c.email}</td>
                  <td>{c.address}</td>
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

export default CustomerList;

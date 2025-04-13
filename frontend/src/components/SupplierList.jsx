import React from 'react';
import useFetch from '../hooks/useFetch';

const SupplierList = () => {
  const suppliers = useFetch('/suppliers');

  return (
    <div className="content">
      <h2>Suppliers</h2>
      <button className="btn btn-primary">New Supplier</button>
      <div className="table-responsive" style={{ marginTop: '1rem' }}>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Contact</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Address</th>
              <th>Business ID</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map(s => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.contact_name}</td>
                <td>{s.phone}</td>
                <td>{s.email}</td>
                <td>{s.address}</td>
                <td>{s.business_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SupplierList;

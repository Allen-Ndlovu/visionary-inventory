import React from 'react';
import useFetch from '../hooks/useFetch';

export default function SupplierList() {
  const { data, loading, error } = useFetch('suppliers');

  if (loading) return <p>Loading...</p>;
  if (error)   return <p>Error loading suppliers</p>;

  return (
    <div className="list-page">
      <h2>Suppliers</h2>
      <button className="btn">Add Supplier</button>
      <table>
        <thead><tr><th>Name</th><th>Contact</th><th>Phone</th></tr></thead>
        <tbody>
          {data.map(s => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.contact_name}</td>
              <td>{s.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

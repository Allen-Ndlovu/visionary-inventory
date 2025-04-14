import React from 'react';
import useFetch from '../hooks/useFetch';

export default function CustomerList() {
  const { data, loading, error } = useFetch('/customers');

  if (loading) return <p>Loading customers…</p>;
  if (error)   return <p>Error loading customers</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th><th>Name</th><th>Email</th><th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {data.map(c => (
          <tr key={c.id}>
            <td>{c.id}</td>
            <td>{c.name}</td>
            <td>{c.email}</td>
            <td>{c.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

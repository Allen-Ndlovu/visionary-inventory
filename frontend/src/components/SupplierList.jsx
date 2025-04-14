import React from 'react';
import useFetch from '../hooks/useFetch';

export default function SupplierList() {
  const { data, loading, error } = useFetch('/suppliers');

  if (loading) return <p>Loading suppliers…</p>;
  if (error)   return <p>Error loading suppliers</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th><th>Name</th><th>Contact</th><th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map(s => (
          <tr key={s.id}>
            <td>{s.id}</td>
            <td>{s.name}</td>
            <td>{s.contact}</td>
            <td>{s.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

import React from 'react';
import useFetch from '../hooks/useFetch';


export default function BusinessList() {
  const { data, loading, error } = useFetch('/businesses');

  if (loading) return <p>Loading businesses…</p>;
  if (error)   return <p>Error loading businesses</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th><th>Name</th><th>Industry</th><th>Created</th>
        </tr>
      </thead>
      <tbody>
        {data.map(b => (
          <tr key={b.id}>
            <td>{b.id}</td>
            <td>{b.name}</td>
            <td>{b.industry_type}</td>
            <td>{new Date(b.created_at).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

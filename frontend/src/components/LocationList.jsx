import React from 'react';
import useFetch from '../hooks/useFetch';

export default function LocationList() {
  const { data, loading, error } = useFetch('/locations');

  if (loading) return <p>Loading locations…</p>;
  if (error)   return <p>Error loading locations</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th><th>Name</th><th>Address</th>
        </tr>
      </thead>
      <tbody>
        {data.map(l => (
          <tr key={l.id}>
            <td>{l.id}</td>
            <td>{l.name}</td>
            <td>{l.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

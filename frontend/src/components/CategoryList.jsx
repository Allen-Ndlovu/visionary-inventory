import React from 'react';
import useFetch from '../hooks/useFetch';

export default function CategoryList() {
  const { data, loading, error } = useFetch('/categories');

  if (loading) return <p>Loading categories…</p>;
  if (error)   return <p>Error loading categories</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th><th>Name</th><th>Description</th>
        </tr>
      </thead>
      <tbody>
        {data.map(c => (
          <tr key={c.id}>
            <td>{c.id}</td>
            <td>{c.name}</td>
            <td>{c.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

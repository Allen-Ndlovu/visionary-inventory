import React from 'react';
import useFetch from '../hooks/useFetch';

export default function UserList() {
  const { data, loading, error } = useFetch('/users');

  if (loading) return <p>Loading users…</p>;
  if (error)   return <p>Error loading users</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th><th>Username</th><th>Email</th><th>Role</th>
        </tr>
      </thead>
      <tbody>
        {data.map(u => (
          <tr key={u.id}>
            <td>{u.id}</td>
            <td>{u.username}</td>
            <td>{u.email}</td>
            <td>{u.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

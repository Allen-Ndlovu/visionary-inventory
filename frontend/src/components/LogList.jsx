import React from 'react';
import useFetch from '../hooks/useFetch';

export default function LogList() {
  const { data, loading, error } = useFetch('logs');

  if (loading) return <p>Loading...</p>;
  if (error)   return <p>Error loading logs</p>;

  return (
    <div className="list-page">
      <h2>Activity Logs</h2>
      <table>
        <thead><tr><th>User</th><th>Action</th><th>Table</th><th>Row</th></tr></thead>
        <tbody>
          {data.map(l => (
            <tr key={l.id}>
              <td>{l.user_id}</td>
              <td>{l.action}</td>
              <td>{l.table_affected}</td>
              <td>{l.row_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

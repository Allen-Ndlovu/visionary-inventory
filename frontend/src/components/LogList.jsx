import React from 'react';
import useFetch from '../hooks/useFetch';

const LogList = () => {
  const logs = useFetch('/logs');

  return (
    <div className="content">
      <h2>Logs</h2>
      <button className="btn btn-primary">New Log Entry</button>
      <div className="table-responsive" style={{ marginTop: '1rem' }}>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>User ID</th>
              <th>Action</th>
              <th>Table</th>
              <th>Row ID</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {logs.map(l => (
              <tr key={l.id}>
                <td>{l.id}</td>
                <td>{l.user_id}</td>
                <td>{l.action}</td>
                <td>{l.table_affected}</td>
                <td>{l.row_id}</td>
                <td>{new Date(l.timestamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LogList;

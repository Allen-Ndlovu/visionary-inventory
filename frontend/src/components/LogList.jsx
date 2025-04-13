import React from 'react';
import useFetch from '../hooks/useFetch';

const LogList = () => {
  const items = useFetch('/logs');

  return (
    <div className="content">
      <div className="page-container">
        <div className="page-header">
          <h2>Logs</h2>
          <button className="btn btn-primary">New Log</button>
        </div>
        <div className="page-body table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th><th>User ID</th><th>Action</th>
                <th>Table</th><th>Row ID</th><th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {items.map(l => (
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
    </div>
  );
};

export default LogList;

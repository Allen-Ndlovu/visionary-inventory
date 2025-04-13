import React from 'react';
import useFetch from '../hooks/useFetch';

const UserList = () => {
  const items = useFetch('/users');

  return (
    <div className="content">
      <div className="page-container">
        <div className="page-header">
          <h2>Users</h2>
          <button className="btn btn-primary">New User</button>
        </div>
        <div className="page-body table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th><th>Business ID</th><th>Username</th>
                <th>Email</th><th>Role</th><th>Active</th><th>Created</th>
              </tr>
            </thead>
            <tbody>
              {items.map(u => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.business_id}</td>
                  <td>{u.username}</td>
                  <td>{u.email}</td>
                  <td>{u.role}</td>
                  <td>{u.is_active ? 'Yes' : 'No'}</td>
                  <td>{new Date(u.created_at).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserList;

import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children }) => (
  <>
    <Navbar />
    <div style={{ display:'flex', flex:1 }}>
      <Sidebar />
      <div className="main">{children}</div>
    </div>
  </>
);

export default Layout;

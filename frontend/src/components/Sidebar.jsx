import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/products', label: 'Products' },
  { to: '/suppliers', label: 'Suppliers' },
  { to: '/customers', label: 'Customers' },
  { to: '/inventory', label: 'Inventory' },
  { to: '/purchases', label: 'Purchases' },
  { to: '/sales', label: 'Sales' },
  { to: '/logs', label: 'Logs' },
];

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <h2 className="sidebar-title">Visionary</h2>
      <ul>
        {links.map(link => (
          <li key={link.to}>
            <NavLink to={link.to} className={({ isActive }) => isActive ? 'active' : ''}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

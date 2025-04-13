import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { to:'/dashboard', label:'Dashboard' },
  { to:'/products',  label:'Products' },
  { to:'/suppliers', label:'Suppliers' },
  { to:'/customers', label:'Customers' },
  { to:'/inventory', label:'Inventory' },
  { to:'/purchases', label:'Purchases' },
  { to:'/sales',    label:'Sales' },
  { to:'/logs',     label:'Logs' },
  { to:'/users',    label:'Users' },
];

const Sidebar = () => (
  <aside className="sidebar">
    {links.map(l => (
      <NavLink
        key={l.to}
        to={l.to}
        className={({isActive}) => isActive ? 'active' : undefined}
      >
        {l.label}
      </NavLink>
    ))}
  </aside>
);

export default Sidebar;

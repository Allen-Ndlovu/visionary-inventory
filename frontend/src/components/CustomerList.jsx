import React, { useEffect, useState } from 'react';
import { fetchCustomers } from '../services/api';


const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const loadCustomers = async () => {
      const data = await fetchCustomers();
      setCustomers(data);
    };
    loadCustomers();
  }, []);

  return (
    <div className="customer-list">
      <h2>Customers</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            <p>{customer.name}</p>
            <p>{customer.email}</p>
            <p>{customer.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;

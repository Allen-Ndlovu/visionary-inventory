import React, { useEffect, useState } from 'react';
import { fetchSuppliers } from '../services/api';


const SupplierList = () => {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    const loadSuppliers = async () => {
      const data = await fetchSuppliers();
      setSuppliers(data);
    };
    loadSuppliers();
  }, []);

  return (
    <div className="supplier-list">
      <h2>Suppliers</h2>
      <ul>
        {suppliers.map((supplier) => (
          <li key={supplier.id}>
            <p>{supplier.name}</p>
            <p>{supplier.contact}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SupplierList;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProduct } from '../services/api';
import '../styles/addProduct.css';

export default function AddProduct() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '', sku: '', unit_price: '', tax_rate: ''
  });

  const onChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await createProduct({
      ...form,
      unit_price: parseFloat(form.unit_price),
      tax_rate: parseFloat(form.tax_rate)
    });
    navigate('/products');
  };

  return (
    <div className="add-product">
      <h2>Add New Product</h2>
      <form onSubmit={onSubmit}>
        <label>
          Name
          <input name="name" value={form.name} onChange={onChange} required/>
        </label>
        <label>
          SKU
          <input name="sku" value={form.sku} onChange={onChange} required/>
        </label>
        <label>
          Price
          <input name="unit_price" type="number" step="0.01"
            value={form.unit_price} onChange={onChange} required/>
        </label>
        <label>
          Tax Rate
          <input name="tax_rate" type="number" step="0.01"
            value={form.tax_rate} onChange={onChange}/>
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

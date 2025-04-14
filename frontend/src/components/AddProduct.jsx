import React, { useState } from 'react';
import { addProduct } from '../services/api';


const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    sku: '',
    unit_price: '',
    category_id: '',
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addProduct(product);
    alert('Product added successfully!');
  };

  return (
    <div className="add-product">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="sku"
          placeholder="SKU"
          value={product.sku}
          onChange={handleChange}
        />
        <input
          type="number"
          name="unit_price"
          placeholder="Unit Price"
          value={product.unit_price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category_id"
          placeholder="Category ID"
          value={product.category_id}
          onChange={handleChange}
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;

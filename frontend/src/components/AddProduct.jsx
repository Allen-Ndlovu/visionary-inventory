import React, { useState } from 'react';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    category: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="product-form">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={product.name} onChange={handleChange} />

        <label>Category</label>
        <input type="text" name="category" value={product.category} onChange={handleChange} />

        <label>Price</label>
        <input type="number" name="price" value={product.price} onChange={handleChange} />

        <button type="submit" className="button">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;

import React, { useState, useEffect } from 'react';
import { fetchProductById, updateProduct } from '../services/api';
import { useParams } from 'react-router-dom';


const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    name: '',
    sku: '',
    unit_price: '',
    category_id: '',
  });

  useEffect(() => {
    const loadProduct = async () => {
      const data = await fetchProductById(id);
      setProduct(data);
    };
    loadProduct();
  }, [id]);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProduct(id, product);
    alert('Product updated successfully!');
  };

  return (
    <div className="edit-product">
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="sku"
          value={product.sku}
          onChange={handleChange}
        />
        <input
          type="number"
          name="unit_price"
          value={product.unit_price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category_id"
          value={product.category_id}
          onChange={handleChange}
        />
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default EditProduct;

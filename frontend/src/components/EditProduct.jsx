import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProduct, updateProduct } from '../services/api';
import '../styles/editProduct.css';

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct(id).then(data => setProduct(data));
  }, [id]);

  const handleChange = e => {
    const { name, value } = e.target;
    setProduct(p => ({ ...p, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await updateProduct(id, product);
    navigate('/products');
  };

  if (!product) return <p>Loading…</p>;

  return (
    <div className="edit-product">
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <label>Name
          <input name="name" value={product.name} onChange={handleChange} />
        </label>
        <label>SKU
          <input name="sku" value={product.sku} onChange={handleChange} />
        </label>
        <label>Price
          <input
            name="unit_price"
            type="number"
            step="0.01"
            value={product.unit_price}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

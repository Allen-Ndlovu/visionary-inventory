import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';


const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    loadProducts();
  }, []);

  return (
    <div className="product-list">
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <p>{product.name}</p>
            <p>{product.sku}</p>
            <p>{product.unit_price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

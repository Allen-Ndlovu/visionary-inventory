import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { fetchProducts } from "../services/api";
import "./ProductList.css";

export default React.memo(function ProductList() {
  const { data: products, loading, error } = useFetch(fetchProducts);

  if (loading) return <p>Loading products...</p>;
  if (error)   return <p style={{ color: "red" }}>Error loading products.</p>;

  return (
    <div className="product-grid">
      {products.map(p => (
        <div className="product-card" key={p.id}>
          <h2>{p.name}</h2>
          <p><strong>Stock:</strong> {p.quantity_in_stock}</p>
          <p><strong>Price:</strong> ${p.unit_price.toFixed(2)}</p>
          <Link to={`/products/${p.id}`} className="details-button">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
});

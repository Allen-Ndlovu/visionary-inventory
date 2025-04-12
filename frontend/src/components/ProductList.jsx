import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { fetchProducts } from "../services/api";

export default React.memo(function ProductList() {
  const { data: products, loading, error } = useFetch(fetchProducts);

  if (loading) return <p>Loading...</p>;
  if (error)   return <p>Error loading products.</p>;

  return (
    <ul>
      {products.map(p => (
        <li key={p.id}>
          <Link to={`/products/${p.id}`}>{p.name}</Link> — {p.quantity_in_stock} in stock
        </li>
      ))}
    </ul>
  );
});

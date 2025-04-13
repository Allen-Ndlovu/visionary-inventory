import React from "react";
import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { fetchProduct } from "../services/api";
import "./ProductDetail.css";

export default function ProductDetail() {
  const { id } = useParams();
  const { data: p, loading, error } = useFetch(fetchProduct, [id]);

  if (loading) return <p>Loading product...</p>;
  if (error)   return <p style={{ color: "red" }}>Product not found.</p>;

  return (
    <div>
      <Link to="/" className="back-button">&larr; Back to Products</Link>
      <div className="product-detail-card">
        <h2>{p.name}</h2>
        <p><strong>Category ID:</strong> {p.category_id}</p>
        <p><strong>Supplier ID:</strong> {p.supplier_id}</p>
        <p><strong>Price:</strong> ${p.unit_price.toFixed(2)}</p>
        <p><strong>Stock:</strong> {p.quantity_in_stock}</p>
        <p><strong>Threshold:</strong> {p.threshold_level}</p>
        <p>{p.description}</p>
      </div>
    </div>
  );
}

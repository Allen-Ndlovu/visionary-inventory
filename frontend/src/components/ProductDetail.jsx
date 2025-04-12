import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { fetchProduct } from "../services/api";

export default function ProductDetail() {
  const { id } = useParams();
  const { data: p, loading, error } = useFetch(fetchProduct, [id]);

  if (loading) return <p>Loading...</p>;
  if (error)   return <p>Product not found.</p>;

  return (
    <div>
      <h2>{p.name}</h2>
      <p>Category ID: {p.category_id}</p>
      <p>Supplier ID: {p.supplier_id}</p>
      <p>Price: ${p.unit_price}</p>
      <p>Stock: {p.quantity_in_stock}</p>
      <p>Threshold: {p.threshold_level}</p>
    </div>
  );
}

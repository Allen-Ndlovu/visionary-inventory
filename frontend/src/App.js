import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const ProductList   = lazy(() => import("./components/ProductList"));
const ProductDetail = lazy(() => import("./components/ProductDetail"));

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <h1><Link to="/">Visionary Inventory</Link></h1>
      </header>
      <main className="container">
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetail />} />
          </Routes>
        </Suspense>
      </main>
      <footer>
        © {new Date().getFullYear()} Visionary Inventory
      </footer>
    </BrowserRouter>
  );
}

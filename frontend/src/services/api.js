const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

async function request(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.detail || res.statusText);
  }

  return res.json();
}

// -----------------------------
// Business Endpoints
// -----------------------------
export const fetchBusinesses = () => request('/businesses/');

// -----------------------------
// Category Endpoints
// -----------------------------
export const fetchCategories = () => request('/categories/');

// -----------------------------
// Product Endpoints
// -----------------------------
export const fetchProducts = () => request('/products/');
export const fetchProduct = (id) => request(`/products/${id}/`);
export const createProduct = (data) =>
  request('/products/', {
    method: 'POST',
    body: JSON.stringify(data),
  });
export const updateProduct = (id, data) =>
  request(`/products/${id}/`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
export const deleteProduct = (id) =>
  request(`/products/${id}/`, {
    method: 'DELETE',
  });

// -----------------------------
// Supplier Endpoints
// -----------------------------
export const fetchSuppliers = () => request('/suppliers/');

// -----------------------------
// Customer Endpoints
// -----------------------------
export const fetchCustomers = () => request('/customers/');

// -----------------------------
// Location Endpoints
// -----------------------------
export const fetchLocations = () => request('/locations/');

// -----------------------------
// Inventory Endpoints
// -----------------------------
export const fetchInventory = () => request('/inventory/');

// -----------------------------
// Purchase Endpoints
// -----------------------------
export const fetchPurchases = () => request('/purchases/');

// -----------------------------
// Sales Endpoints
// -----------------------------
export const fetchSales = () => request('/sales/');

// -----------------------------
// Transactions Endpoints
// -----------------------------
export const fetchTransactions = () => request('/transactions/');

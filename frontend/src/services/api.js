import axios from 'axios';



const apiUrl = 'http://localhost:8000/api';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${apiUrl}/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products', error);
  }
};

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${apiUrl}/categories`);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories', error);
  }
};

export const fetchTransactions = async () => {
  try {
    const response = await axios.get(`${apiUrl}/transactions`);
    return response.data;
  } catch (error) {
    console.error('Error fetching transactions', error);
  }
};

export const fetchSuppliers = async () => {
  try {
    const response = await axios.get(`${apiUrl}/suppliers`);
    return response.data;
  } catch (error) {
    console.error('Error fetching suppliers', error);
  }
};

export const fetchCustomers = async () => {
  try {
    const response = await axios.get(`${apiUrl}/customers`);
    return response.data;
  } catch (error) {
    console.error('Error fetching customers', error);
  }
};

export const fetchLocations = async () => {
  try {
    const response = await axios.get(`${apiUrl}/locations`);
    return response.data;
  } catch (error) {
    console.error('Error fetching locations', error);
  }
};

export const addProduct = async (product) => {
  try {
    await axios.post(`${apiUrl}/products`, product);
  } catch (error) {
    console.error('Error adding product', error);
  }
};

export const updateProduct = async (id, product) => {
  try {
    await axios.put(`${apiUrl}/products/${id}`, product);
  } catch (error) {
    console.error('Error updating product', error);
  }
};

export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product', error);
  }
};

export default apiUrl

import React, { useEffect, useState } from 'react'; // Import useState and useEffect hooks
import { fetchBusinesses, fetchProducts, fetchTransactions } from '../services/api'; // Import the API functions

const Dashboard = () => {
  const [businesses, setBusinesses] = useState([]); // Initialize as empty array
  const [products, setProducts] = useState([]);     // Initialize as empty array
  const [transactions, setTransactions] = useState([]); // Initialize as empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the API on mount
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const businessesData = await fetchBusinesses(); // Fetch businesses data
        const productsData = await fetchProducts(); // Fetch products data
        const transactionsData = await fetchTransactions(); // Fetch transactions data

        // Set the fetched data into the state
        setBusinesses(businessesData);
        setProducts(productsData);
        setTransactions(transactionsData);
      } catch (err) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) return <p>Loading dashboard...</p>; // Show loading message while data is being fetched
  if (error) return <p>{error}</p>; // Show error message if fetching data fails

  return (
    <div className="dashboard">
      <h1>Dashboard Overview</h1>
      <p>Welcome to the admin dashboard! Here you can monitor key metrics, track transactions, and manage businesses efficiently.</p>

      {/* Business Overview Table */}
      <h2>Business Overview</h2>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Business Name</th>
            <th>Industry Type</th>
          </tr>
        </thead>
        <tbody>
          {businesses.length > 0 ? (
            businesses.map((business) => (
              <tr key={business.id}>
                <td>{business.name}</td>
                <td>{business.industry_type}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No businesses available</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Product Overview Table */}
      <h2>Product Overview</h2>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>{product.updated_at}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No products available</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Transaction Overview Table */}
      <h2>Transaction Overview</h2>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Transaction Type</th>
            <th>Amount</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length > 0 ? (
            transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.transaction_type}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.updated_at}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No transactions available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductSubmission from './components/ProductSubmission';
import MyProducts from './components/MyProducts';

function App() {
  const [products, setProducts] = useState([]);

  // Fetch products once when app loads or whenever needed
  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Failed to fetch products:', err));
  }, []);

  const handleProductAdded = (newProduct) => {
    setProducts(prevProducts => [...prevProducts, newProduct]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<ProductSubmission onProductAdded={handleProductAdded} />}
        />
        <Route
          path="/my-products"
          element={<MyProducts products={products} />}
        />
      </Routes>
    </Router>
  );
}

export default App;

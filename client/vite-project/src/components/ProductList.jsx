import React, { useEffect, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from backend API
  useEffect(() => {
    fetch('http://localhost:5000/api/products') // Use your backend endpoint
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">My Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md p-4 border"
          >
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-700">{product.description}</p>
            <p className="text-green-600 font-medium mt-2">₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

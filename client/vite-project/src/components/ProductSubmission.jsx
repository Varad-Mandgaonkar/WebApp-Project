import { useState } from 'react';
import axios from 'axios';

function ProductSubmission({ onProductAdded }) {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: ''
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/products', product);
      onProductAdded(res.data); 
      setProduct({ name: '', price: '', description: '' });
    } catch (err) {
      console.error('Error adding product:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <input name="name" placeholder="Name of the Product" value={product.name} onChange={handleChange} className="input" required />
      <input name="price" placeholder="Price of the Product" value={product.price} onChange={handleChange} className="input" required />
      <input name="description" placeholder="Description of the Product" value={product.description} onChange={handleChange} className="input" required />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
}

export default ProductSubmission;

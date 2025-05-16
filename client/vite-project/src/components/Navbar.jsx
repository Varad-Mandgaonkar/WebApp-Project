import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <ul className="flex space-x-4">
        <li><Link to="/">Submit Product</Link></li>
        <li><Link to="/my-products">My Products</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

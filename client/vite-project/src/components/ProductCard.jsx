const ProductCard = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product, index) => (
        <div key={index} className="p-4 border rounded shadow bg-white">
          <h2 className="text-lg font-bold">{product.name}</h2>
            <p className="text-green-600 font-semibold">${product.price}</p>
          <p className="text-gray-700">{product.description}</p>
        
        </div>
      ))}
    </div>
  );
};

export default ProductCard;

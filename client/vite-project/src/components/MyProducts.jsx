export default function MyProducts({ products }) {
 
  return (
    <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded shadow">
          <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-blue-600 font-bold">{product.price}</p>
        </div>
      ))}
    </div>
  );
}

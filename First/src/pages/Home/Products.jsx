import { useEffect, useState } from "react";

const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from an API or use static data
    const fetchProducts = async () => {
      try {
        const response = await fetch('./products.json'); // Replace with your API endpoint
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <div className="text-center my-12">
        <h1>Our Products</h1>
        <p>Explore our wide range of products that cater to all your needs.</p>
      </div>

      <div>
        {
          products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="card bg-base-100 shadow-xl">
                  <figure>
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
                    <p>{product.description}</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Buy Now</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center">Loading products...</p>
          )
        }
      </div>
    </div>
  );
};

export default Products;

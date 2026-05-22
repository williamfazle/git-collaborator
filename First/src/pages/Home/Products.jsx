const Products = () => {
  return (
    <div>
      <div className="text-center my-12">
        <h1>Our Products</h1>
        <p>Explore our wide range of products that cater to all your needs.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl overflow-hidden shadow-lg border border-base-200 bg-base-100">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"
            alt="Everyday essentials"
            className="h-56 w-full object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Everyday Essentials</h2>
            <p className="text-gray-600">
              High-quality, affordable products for everyday living.
            </p>
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-lg border border-base-200 bg-base-100">
          <img
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
            alt="Trend-forward styles"
            className="h-56 w-full object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Trend-Forward Styles</h2>
            <p className="text-gray-600">
              Fresh, stylish picks designed for modern tastes.
            </p>
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-lg border border-base-200 bg-base-100">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
            alt="Eco-friendly choices"
            className="h-56 w-full object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Eco-Friendly Choices</h2>
            <p className="text-gray-600">
              Sustainable products crafted with the planet in mind.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

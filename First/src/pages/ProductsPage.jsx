import { useState } from "react";
import ProductCard from "../shared/ProductCard";
import SectionHeader from "../shared/SectionHeader";
import { useShop } from "../context/ShopContext";

const ProductsPage = () => {
  const { products } = useShop();
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(products.map((product) => product.category))];
  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  if (products.length === 0) {
    return (
      <section className="mx-auto my-16 w-full max-w-7xl px-4 sm:px-6">
        <p className="text-center text-base-content/70">Loading products...</p>
      </section>
    );
  }

  return (
    <section className="mx-auto my-16 w-full max-w-7xl px-4 sm:px-6">
      <SectionHeader
        eyebrow="Full Catalog"
        title="Browse every featured product"
        description="Filter by department, compare pricing, and jump into product details or checkout."
      />

      <div className="mb-8 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={[
              "btn btn-sm rounded-full px-5",
              activeCategory === category
                ? "btn-primary"
                : "border-base-300 bg-base-100 hover:border-primary hover:bg-primary hover:text-primary-content",
            ].join(" ")}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              actionLabel="View Details"
              outlined
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-base-content/70">No products found.</p>
      )}
    </section>
  );
};

export default ProductsPage;

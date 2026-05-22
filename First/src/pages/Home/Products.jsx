import { useRef } from "react";
import { useShop } from "../../context/ShopContext";
import ProductCard from "../../shared/ProductCard";
import SectionHeader from "../../shared/SectionHeader";

const Products = () => {
  const { products } = useShop();
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    if (!carouselRef.current) {
      return;
    }

    const scrollAmount =
      carouselRef.current.offsetWidth < 768
        ? carouselRef.current.offsetWidth * 0.9
        : carouselRef.current.offsetWidth * 0.75;

    carouselRef.current.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  const categories = [...new Set(products.map((product) => product.category))];
  const topDeals = [...products].sort((a, b) => a.price - b.price).slice(0, 4);

  return (
    <section className="mx-auto my-16 w-full max-w-7xl px-4 sm:px-6">
      <SectionHeader
        eyebrow="Featured Collection"
        title="A richer shopping experience with reusable product sections"
        description="This storefront now uses shared UI pieces so we can build more marketplace-style sections quickly, similar to Amazon-inspired layouts."
        action={
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              type="button"
              className="btn btn-circle btn-outline"
              onClick={() => scrollCarousel("prev")}
              aria-label="Previous products"
            >
              {"<"}
            </button>
            <button
              type="button"
              className="btn btn-circle btn-primary"
              onClick={() => scrollCarousel("next")}
              aria-label="Next products"
            >
              {">"}
            </button>
          </div>
        }
      />

      {products.length > 0 ? (
        <div className="space-y-14">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="btn btn-sm rounded-full border-base-300 bg-base-100 px-5 font-medium shadow-sm hover:border-primary hover:bg-primary hover:text-primary-content"
              >
                {category}
              </button>
            ))}
          </div>

          <div
            ref={carouselRef}
            className="carousel carousel-center w-full gap-5 overflow-x-auto rounded-box scroll-smooth pb-4"
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="carousel-item w-[85%] sm:w-[48%] lg:w-[32%] xl:w-[24%]"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
            <div className="rounded-[2rem] bg-gradient-to-br from-slate-900 via-slate-800 to-amber-700 p-8 text-neutral-content shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
                Deal Of The Day
              </p>
              <h3 className="mt-3 text-3xl font-bold sm:text-4xl">
                Build your perfect setup with limited-time savings
              </h3>
              <p className="mt-4 max-w-xl text-sm text-neutral-content/80 sm:text-base">
                Discover hand-picked gadgets, accessories, and home upgrades in
                a storefront layout designed to scale with reusable sections.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="btn border-0 bg-amber-400 text-slate-950 hover:bg-amber-300">
                  Shop Featured Deals
                </button>
                <button className="btn btn-outline border-neutral-content/30 text-neutral-content hover:bg-neutral-content hover:text-slate-950">
                  View Categories
                </button>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-1">
              {topDeals.map((product) => (
                <div
                  key={`deal-${product.id}`}
                  className="rounded-3xl border border-base-300 bg-base-100 p-4 shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-20 w-20 rounded-2xl object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold text-primary">
                        Under ${product.price}
                      </p>
                      <h4 className="font-bold">{product.name}</h4>
                      <p className="text-sm text-base-content/70">
                        {product.category}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeader
              title="Popular Picks"
              description="A reusable product grid for browsing, landing pages, or category pages."
            />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <ProductCard
                  key={`grid-${product.id}`}
                  product={product}
                  actionLabel="View Details"
                  outlined
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p className="py-10 text-center">Loading products...</p>
      )}
    </section>
  );
};

export default Products;

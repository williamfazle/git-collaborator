import { FaBoltLightning, FaTags } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ProductCard from "../shared/ProductCard";
import SectionHeader from "../shared/SectionHeader";
import { useShop } from "../context/ShopContext";

const DealsPage = () => {
  const { products } = useShop();
  const deals = [...products].sort((a, b) => a.price - b.price).slice(0, 6);

  if (products.length === 0) {
    return (
      <section className="mx-auto my-16 w-full max-w-7xl px-4 sm:px-6">
        <p className="text-center text-base-content/70">Loading deals...</p>
      </section>
    );
  }

  return (
    <section className="mx-auto my-16 w-full max-w-7xl px-4 sm:px-6">
      <SectionHeader
        eyebrow="Hot Deals"
        title="Save more on today's best offers"
        description="A dedicated deals page gives the storefront another distinct destination with reusable product cards."
      />

      <div className="mb-8 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-[2rem] bg-gradient-to-r from-orange-500 to-amber-400 p-8 text-slate-950 shadow-xl">
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em]">
            <FaBoltLightning />
            Flash Savings
          </div>
          <h2 className="mt-4 text-4xl font-bold">Limited-time prices on trending gear</h2>
          <p className="mt-4 max-w-2xl text-sm sm:text-base">
            Shop featured discounts across electronics, accessories, and daily lifestyle items.
          </p>
          <Link
            to="/checkout"
            className="btn mt-6 border-0 bg-slate-950 text-white hover:bg-slate-800"
          >
            Checkout Deals
          </Link>
        </div>

        <div className="rounded-[2rem] border border-base-300 bg-base-100 p-8 shadow-lg">
          <div className="flex items-center gap-3 text-primary">
            <FaTags />
            <span className="font-semibold">Deal Highlights</span>
          </div>
          <ul className="mt-5 space-y-4 text-sm text-base-content/70">
            <li>Low-price picks under $30</li>
            <li>Popular electronics with fast shipping</li>
            <li>Great starter items for your first cart</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {deals.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            actionLabel="View Details"
            outlined
          />
        ))}
      </div>
    </section>
  );
};

export default DealsPage;

import { FaArrowRight, FaShieldHeart, FaTruckFast } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../shared/ProductCard";
import QuantityControl from "../shared/QuantityControl";
import ReviewSection from "../shared/ReviewSection";
import SectionHeader from "../shared/SectionHeader";
import { useShop } from "../context/ShopContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, addToCart, cartItems, updateQuantity } = useShop();
  const product = products.find((item) => item.id === Number(id));

  if (products.length === 0) {
    return (
      <section className="mx-auto my-16 max-w-7xl px-4 sm:px-6">
        <p className="text-center text-base-content/70">Loading product...</p>
      </section>
    );
  }

  if (!product) {
    return (
      <section className="mx-auto my-16 max-w-7xl px-4 sm:px-6">
        <div className="rounded-3xl bg-base-200 p-10 text-center shadow-sm">
          <h1 className="text-3xl font-bold">Product not found</h1>
          <p className="mt-3 text-base-content/70">
            The item you are looking for is not available right now.
          </p>
          <Link to="/products" className="btn btn-primary mt-6">
            Back to Products
          </Link>
        </div>
      </section>
    );
  }

  const cartItem = cartItems.find((item) => item.id === product.id);
  const relatedProducts = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 4);

  return (
    <section className="mx-auto my-16 w-full max-w-7xl px-4 sm:px-6">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <div className="overflow-hidden rounded-[2rem] bg-base-200 shadow-lg">
          <img
            src={product.image}
            alt={product.name}
            className="h-full min-h-[420px] w-full object-cover"
          />
        </div>

        <div className="rounded-[2rem] border border-base-300 bg-base-100 p-8 shadow-lg">
          <span className="badge badge-outline">{product.category}</span>
          <h1 className="mt-4 text-4xl font-bold">{product.name}</h1>
          <p className="mt-4 text-base leading-7 text-base-content/70">
            {product.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <p className="text-3xl font-bold text-primary">${product.price}</p>
            <p className="text-sm font-medium text-warning">{product.rating} / 5 rating</p>
            <p className="text-sm text-base-content/60">In stock: {product.stock}</p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-base-200 p-4">
              <div className="flex items-center gap-3">
                <FaTruckFast className="text-primary" />
                <div>
                  <p className="font-semibold">Fast shipping</p>
                  <p className="text-sm text-base-content/70">Delivery in 2-4 business days</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-base-200 p-4">
              <div className="flex items-center gap-3">
                <FaShieldHeart className="text-primary" />
                <div>
                  <p className="font-semibold">Secure purchase</p>
                  <p className="text-sm text-base-content/70">Protected payments and easy returns</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            {cartItem ? (
              <QuantityControl
                quantity={cartItem.quantity}
                onDecrease={() => updateQuantity(product.id, cartItem.quantity - 1)}
                onIncrease={() => updateQuantity(product.id, cartItem.quantity + 1)}
              />
            ) : (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            )}

            <Link to="/checkout" className="btn btn-outline btn-primary">
              Buy Now
            </Link>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 ? (
        <div className="mt-16">
          <SectionHeader
            eyebrow="Related Picks"
            title="More from this category"
            description="Explore similar products before you check out."
            action={
              <Link to="/products" className="btn btn-link text-primary no-underline">
                View all products
                <FaArrowRight />
              </Link>
            }
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {relatedProducts.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                actionLabel="View Details"
                outlined
              />
            ))}
          </div>
        </div>
      ) : null}

      <ReviewSection productId={product.id} productName={product.name} />
    </section>
  );
};

export default ProductDetails;

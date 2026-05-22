import { FaArrowRight, FaTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";
import CartSummary from "../shared/CartSummary";
import QuantityControl from "../shared/QuantityControl";
import SectionHeader from "../shared/SectionHeader";
import { useShop } from "../context/ShopContext";

const CartPage = () => {
  const { cartItems, subtotal, updateQuantity, removeFromCart } = useShop();

  return (
    <section className="mx-auto my-16 w-full max-w-7xl px-4 sm:px-6">
      <SectionHeader
        eyebrow="Your Cart"
        title="Review your selected items"
        description="Adjust quantities, remove items, and continue to secure checkout."
      />

      {cartItems.length > 0 ? (
        <div className="grid gap-8 xl:grid-cols-[1.5fr_0.9fr]">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-5 rounded-3xl border border-base-300 bg-base-100 p-5 shadow-lg sm:flex-row sm:items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-28 w-full rounded-2xl object-cover sm:w-28"
                />
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-sm text-primary">{item.category}</p>
                      <h3 className="text-xl font-bold">{item.name}</h3>
                      <p className="mt-1 text-sm text-base-content/70">
                        ${item.price} each
                      </p>
                    </div>
                    <button
                      type="button"
                      className="btn btn-ghost btn-sm text-error"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <FaTrashCan />
                      Remove
                    </button>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                    <QuantityControl
                      quantity={item.quantity}
                      onDecrease={() => updateQuantity(item.id, item.quantity - 1)}
                      onIncrease={() => updateQuantity(item.id, item.quantity + 1)}
                    />
                    <p className="text-lg font-bold text-primary">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <CartSummary
            subtotal={subtotal}
            itemCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
            action={
              <Link to="/checkout" className="btn btn-primary w-full">
                Proceed to Checkout
                <FaArrowRight />
              </Link>
            }
          />
        </div>
      ) : (
        <div className="rounded-3xl bg-base-200 p-10 text-center shadow-sm">
          <h2 className="text-3xl font-bold">Your cart is empty</h2>
          <p className="mt-3 text-base-content/70">
            Add some products to start your order.
          </p>
          <Link to="/products" className="btn btn-primary mt-6">
            Browse Products
          </Link>
        </div>
      )}
    </section>
  );
};

export default CartPage;

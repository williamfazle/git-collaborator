import { useState } from "react";
import { Link } from "react-router-dom";
import CartSummary from "../shared/CartSummary";
import SectionHeader from "../shared/SectionHeader";
import { useShop } from "../context/ShopContext";

const CheckoutPage = () => {
  const { cartItems, subtotal, clearCart } = useShop();
  const [isPlaced, setIsPlaced] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsPlaced(true);
    clearCart();
  };

  if (isPlaced) {
    return (
      <section className="mx-auto my-16 max-w-4xl px-4 text-center sm:px-6">
        <div className="rounded-[2rem] bg-base-200 p-10 shadow-lg">
          <h1 className="text-4xl font-bold">Order placed successfully</h1>
          <p className="mt-4 text-base-content/70">
            Thank you for shopping with ShopHub. A confirmation email will be on its way shortly.
          </p>
          <Link to="/" className="btn btn-primary mt-6">
            Return Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto my-16 w-full max-w-7xl px-4 sm:px-6">
      <SectionHeader
        eyebrow="Checkout"
        title="Complete your order"
        description="Enter your shipping and payment information for a smooth checkout experience."
      />

      {cartItems.length > 0 ? (
        <div className="grid gap-8 xl:grid-cols-[1.4fr_0.9fr]">
          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-base-300 bg-base-100 p-8 shadow-lg"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input required type="text" className="input input-bordered w-full" />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input required type="text" className="input input-bordered w-full" />
              </div>
            </div>

            <div className="mt-5">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input required type="email" className="input input-bordered w-full" />
            </div>

            <div className="mt-5">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input required type="text" className="input input-bordered w-full" />
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-3">
              <div>
                <label className="label">
                  <span className="label-text">City</span>
                </label>
                <input required type="text" className="input input-bordered w-full" />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Postal Code</span>
                </label>
                <input required type="text" className="input input-bordered w-full" />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Country</span>
                </label>
                <input required type="text" className="input input-bordered w-full" />
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold">Payment Details</h3>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="label">
                    <span className="label-text">Card Number</span>
                  </label>
                  <input required type="text" className="input input-bordered w-full" />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Expiry Date</span>
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="MM/YY"
                    className="input input-bordered w-full"
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">CVV</span>
                  </label>
                  <input required type="text" className="input input-bordered w-full" />
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-primary mt-8 w-full sm:w-auto">
              Place Order
            </button>
          </form>

          <CartSummary
            subtotal={subtotal}
            itemCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
            action={<p className="text-sm text-base-content/70">Secure checkout is enabled for this demo flow.</p>}
          />
        </div>
      ) : (
        <div className="rounded-3xl bg-base-200 p-10 text-center shadow-sm">
          <h2 className="text-3xl font-bold">No items ready for checkout</h2>
          <p className="mt-3 text-base-content/70">
            Add products to your cart before continuing.
          </p>
          <Link to="/products" className="btn btn-primary mt-6">
            Shop Products
          </Link>
        </div>
      )}
    </section>
  );
};

export default CheckoutPage;

const CartSummary = ({ subtotal, itemCount, action }) => {
  const shipping = subtotal > 0 ? 12 : 0;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <div className="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-lg">
      <h3 className="text-2xl font-bold">Order Summary</h3>
      <div className="mt-6 space-y-4 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-base-content/70">Items ({itemCount})</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-base-content/70">Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-base-content/70">Estimated Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="divider my-0"></div>
        <div className="flex items-center justify-between text-base font-bold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      <div className="mt-6">{action}</div>
    </div>
  );
};

export default CartSummary;

const QuantityControl = ({ quantity, onDecrease, onIncrease }) => {
  return (
    <div className="flex items-center rounded-full border border-base-300 bg-base-100">
      <button
        type="button"
        className="btn btn-ghost btn-sm rounded-full"
        onClick={onDecrease}
      >
        -
      </button>
      <span className="min-w-10 text-center text-sm font-semibold">{quantity}</span>
      <button
        type="button"
        className="btn btn-ghost btn-sm rounded-full"
        onClick={onIncrease}
      >
        +
      </button>
    </div>
  );
};

export default QuantityControl;

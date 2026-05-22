import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";

const ProductCard = ({ product, actionLabel = "Buy Now", outlined = false }) => {
  const { addToCart } = useShop();

  return (
    <div
      className={[
        "card h-full w-full overflow-hidden rounded-3xl bg-base-100 transition-transform duration-300 hover:-translate-y-1",
        outlined ? "border border-base-300 shadow-lg" : "shadow-xl",
      ].join(" ")}
    >
      <figure className="h-56 overflow-hidden bg-base-200">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center justify-between gap-3">
          <span className="badge badge-outline">{product.category}</span>
          <span className="text-sm font-medium text-warning">
            {product.rating} / 5
          </span>
        </div>
        <h3 className="card-title">
          <Link to={`/products/${product.id}`} className="hover:text-primary">
            {product.name}
          </Link>
        </h3>
        <p className="text-sm text-base-content/70">{product.description}</p>
        <div className="mt-2 flex items-center justify-between gap-4">
          <div>
            <p className="text-lg font-bold text-primary">${product.price}</p>
            <p className="text-xs text-base-content/60">Stock: {product.stock}</p>
          </div>
        </div>
        <div className="mt-3 flex gap-3">
          <Link
            to={`/products/${product.id}`}
            className={outlined ? "btn btn-outline btn-primary btn-sm flex-1" : "btn btn-outline btn-sm flex-1"}
          >
            {actionLabel}
          </Link>
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="btn btn-primary btn-sm flex-1"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

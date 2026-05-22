const Banner = () => {
  return (
    <div
      className="hero min-h-[80vh]"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1505740420928-5e560c06d30e')",
      }}
    >
      <div className="hero-overlay bg-black/50"></div>

      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-5xl font-bold">
            Discover Amazing Products
          </h1>

          <p className="mb-5">
            Shop the latest collections with exclusive offers and fast
            delivery.
          </p>

          <button className="btn btn-primary">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
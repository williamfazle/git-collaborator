const bannerSlides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    title: "Discover Amazing Products",
    description:
      "Shop the latest collections with exclusive offers and fast delivery.",
    buttonText: "Shop Now",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    title: "Smart Deals Every Day",
    description:
      "Find trending gadgets and lifestyle essentials at prices you will love.",
    buttonText: "Explore Deals",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
    title: "Upgrade Your Setup",
    description:
      "Browse premium accessories designed for work, gaming, and everyday use.",
    buttonText: "View Collection",
  },
];

const Banner = () => {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6">
      <div className="carousel w-full rounded-3xl shadow-2xl">
        {bannerSlides.map((slide, index) => {
          const prevSlide =
            index === 0 ? bannerSlides[bannerSlides.length - 1].id : bannerSlides[index - 1].id;
          const nextSlide =
            index === bannerSlides.length - 1 ? bannerSlides[0].id : bannerSlides[index + 1].id;

          return (
            <div
              key={slide.id}
              id={`slide${slide.id}`}
              className="carousel-item relative w-full"
            >
              <div
                className="hero min-h-[70vh] w-full"
                style={{
                  backgroundImage: `url('${slide.image}')`,
                }}
              >
                <div className="hero-overlay bg-black/55"></div>

                <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-2xl px-4">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-primary-content/80">
                      New Season Picks
                    </p>
                    <h1 className="mb-5 text-4xl font-bold sm:text-5xl lg:text-6xl">
                      {slide.title}
                    </h1>

                    <p className="mb-6 text-sm sm:text-base lg:text-lg">
                      {slide.description}
                    </p>

                    <button className="btn btn-primary btn-wide">
                      {slide.buttonText}
                    </button>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 left-4 right-4 flex -translate-y-1/2 justify-between">
                <a href={`#slide${prevSlide}`} className="btn btn-circle btn-sm sm:btn-md">
                  {"<"}
                </a>
                <a href={`#slide${nextSlide}`} className="btn btn-circle btn-sm sm:btn-md">
                  {">"}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Banner;

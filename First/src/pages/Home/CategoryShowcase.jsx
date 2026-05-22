import { FaBagShopping, FaBoltLightning, FaCouch, FaShirt, FaTv } from "react-icons/fa6";
import SectionHeader from "../../shared/SectionHeader";

const categories = [
  {
    title: "Electronics",
    description: "Smart devices, audio gear, and home tech essentials.",
    icon: FaTv,
  },
  {
    title: "Fashion",
    description: "Everyday style picks, accessories, and activewear.",
    icon: FaShirt,
  },
  {
    title: "Home",
    description: "Practical decor and smart upgrades for every room.",
    icon: FaCouch,
  },
  {
    title: "Accessories",
    description: "Desk setup tools, travel gear, and must-have add-ons.",
    icon: FaBoltLightning,
  },
];

const CategoryShowcase = () => {
  return (
    <section className="mx-auto my-16 w-full max-w-7xl px-4 sm:px-6">
      <SectionHeader
        eyebrow="Shop By Department"
        title="Explore categories like a modern marketplace"
        description="A storefront layout inspired by large ecommerce platforms, built with reusable cards so we can scale sections easily."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <div
              key={category.title}
              className="rounded-3xl bg-base-200 p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-content">
                <Icon className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold">{category.title}</h3>
              <p className="mt-2 text-sm text-base-content/70">
                {category.description}
              </p>
              <button className="btn btn-link mt-3 px-0 text-primary no-underline">
                <FaBagShopping />
                Shop now
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryShowcase;

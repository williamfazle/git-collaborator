import { FaBoxOpen, FaHeadset, FaLock, FaTruckFast } from "react-icons/fa6";

const features = [
  {
    title: "Fast Delivery",
    description: "Get your favorite picks delivered quickly across the country.",
    icon: FaTruckFast,
  },
  {
    title: "Daily Deals",
    description: "Fresh discounts on trending items every single day.",
    icon: FaBoxOpen,
  },
  {
    title: "Secure Checkout",
    description: "Protected payment experience for every order you place.",
    icon: FaLock,
  },
  {
    title: "24/7 Support",
    description: "Friendly help whenever you need product or order support.",
    icon: FaHeadset,
  },
];

const FeatureStrip = () => {
  return (
    <section className="mx-auto -mt-8 w-full max-w-7xl px-4 sm:px-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="text-xl" />
              </div>
              <h3 className="text-lg font-bold">{feature.title}</h3>
              <p className="mt-2 text-sm text-base-content/70">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeatureStrip;

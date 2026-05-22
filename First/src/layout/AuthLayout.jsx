import { FaLock, FaStore } from "react-icons/fa";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 via-base-100 to-base-200">
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_1.05fr]">
        <div className="hidden rounded-[2rem] bg-slate-900 p-10 text-white shadow-2xl lg:block">
          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-primary text-primary-content">
            <FaStore className="text-2xl" />
          </div>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
            ShopHub Auth
          </p>
          <h1 className="mt-4 text-5xl font-bold leading-tight">
            Secure your shopping with a simple account flow
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/75">
            Create an account, sign in, manage checkout faster, and keep your
            orders attached to your ShopHub profile.
          </p>
          <div className="mt-10 rounded-3xl bg-white/10 p-5">
            <div className="flex items-center gap-3">
              <FaLock className="text-primary" />
              <span className="font-semibold">Protected shopping experience</span>
            </div>
            <p className="mt-3 text-sm text-white/70">
              This demo includes account creation, sign in, and a reusable
              "I am not a robot" verification step.
            </p>
          </div>
        </div>

        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

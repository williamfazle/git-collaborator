import { FaEnvelope, FaHome, FaShoppingBag, FaStore, FaUser } from "react-icons/fa";
import { FaBoltLightning, FaCartShopping, FaRightFromBracket } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useShop } from "../context/ShopContext";

const navLinkClass = ({ isActive }) =>
  [
    "flex items-center gap-2 rounded-full px-4 py-2 font-medium transition-colors",
    isActive
      ? "bg-primary text-primary-content"
      : "text-base-content/80 hover:bg-base-300 hover:text-base-content",
  ].join(" ");

const Nabvar = () => {
  const { cartCount } = useShop();
  const { user, signOut } = useAuth();

  const menuItems = (
    <>
      <li>
        <NavLink to="/" className={navLinkClass}>
          <FaHome className="text-sm" />
          <span>Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/products" className={navLinkClass}>
          <FaShoppingBag className="text-sm" />
          <span>Products</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/deals" className={navLinkClass}>
          <FaBoltLightning className="text-sm" />
          <span>Deals</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={navLinkClass}>
          <FaEnvelope className="text-sm" />
          <span>Contact</span>
        </NavLink>
      </li>
      {user ? (
        <li>
          <NavLink to="/account" className={navLinkClass}>
            <FaUser className="text-sm" />
            <span>Account</span>
          </NavLink>
        </li>
      ) : (
        <>
          <li>
            <NavLink to="/auth/signin" className={navLinkClass}>
              <FaUser className="text-sm" />
              <span>Sign In</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/auth/signup" className={navLinkClass}>
              <FaUser className="text-sm" />
              <span>Sign Up</span>
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="sticky top-0 z-50 border-b border-base-300 bg-base-200/95 shadow-sm backdrop-blur">
      <div className="navbar mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="navbar-start gap-2">
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content z-[1] mt-3 w-56 rounded-2xl bg-base-100 p-3 shadow-xl"
            >
              {menuItems}
            </ul>
          </div>

          <NavLink to="/" className="flex items-center gap-3 rounded-full px-2 py-1">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-content shadow-md">
              <FaStore className="text-lg" />
            </div>
            <div>
              <p className="text-xl font-bold leading-none">ShopHub</p>
              <p className="text-xs uppercase tracking-[0.25em] text-base-content/60">
                Online Store
              </p>
            </div>
          </NavLink>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal items-center gap-2 px-1">
            {menuItems}
          </ul>
        </div>

        <div className="navbar-end">
          <div className="flex items-center gap-2">
            <label className="input input-bordered hidden items-center gap-2 rounded-full md:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5.5 5.5 0 1 1 1.06-1.06l3.754 3.754a.75.75 0 1 1-1.06 1.06l-3.754-3.754ZM10.5 6.5a4 4 0 1 1-8 0a4 4 0 0 1 8 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="text"
                placeholder="Search"
                className="w-24 sm:w-36 md:w-44"
              />
            </label>

            <NavLink to="/cart" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <FaCartShopping className="text-lg" />
                <span className="badge badge-primary badge-sm indicator-item">
                  {cartCount}
                </span>
              </div>
            </NavLink>

            {user ? (
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn rounded-full px-3 sm:px-4">
                  <span className="hidden sm:inline">{user.name}</span>
                  {user.profileImage ? (
                    <img
                      src={user.profileImage}
                      alt={user.name}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-content">
                      {user.name?.charAt(0)?.toUpperCase() || "U"}
                    </div>
                  )}
                </div>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content z-[1] mt-3 w-56 rounded-2xl bg-base-100 p-3 shadow-xl"
                >
                  <li>
                    <NavLink to="/account">
                      <FaUser />
                      Account
                    </NavLink>
                  </li>
                  <li>
                    <button type="button" onClick={signOut}>
                      <FaRightFromBracket />
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="hidden items-center gap-2 sm:flex">
                <NavLink to="/auth/signin" className="btn btn-ghost rounded-full">
                  Sign In
                </NavLink>
                <NavLink to="/auth/signup" className="btn btn-primary rounded-full">
                  Sign Up
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nabvar;

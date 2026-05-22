import { NavLink } from "react-router-dom";

const Nabvar = () => {

    const menuItems = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </>
    );
    
    return (
        <div className="bg-base-200 shadow-sm">
            <div className="navbar mx-auto w-full max-w-7xl px-4 sm:px-6">
                <div className="navbar-start">
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
                            className="menu menu-sm dropdown-content z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
                        >
                            {menuItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>

                <div className="navbar-end">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered w-28 sm:w-40 md:w-56"
                    />
                </div>
            </div>
        </div>
    );
};

export default Nabvar;

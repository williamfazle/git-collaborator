import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content">
      <div className="footer mx-auto max-w-7xl p-10 sm:footer-horizontal">
        <aside>
          <h2 className="text-3xl font-bold">ShopHub</h2>
          <p className="max-w-xs">
            Your trusted destination for quality products at affordable prices.
          </p>

          <div className="mt-4 flex gap-4 text-xl">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
          </div>
        </aside>

        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <Link to="/" className="link link-hover">Home</Link>
          <Link to="/products" className="link link-hover">Products</Link>
          <Link to="/deals" className="link link-hover">Deals</Link>
          <Link to="/cart" className="link link-hover">Cart</Link>
        </nav>

        <nav>
          <h6 className="footer-title">Customer Service</h6>
          <Link to="/contact" className="link link-hover">Contact Us</Link>
          <a className="link link-hover">FAQs</a>
          <a className="link link-hover">Shipping Policy</a>
          <a className="link link-hover">Return Policy</a>
        </nav>

        <nav>
          <h6 className="footer-title">Contact</h6>
          <p>Email: support@shophub.com</p>
          <p>Phone: +880 1234-567890</p>
          <p>Dhaka, Bangladesh</p>
        </nav>

        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="w-80">
            <label className="label">
              <span className="label-text">Subscribe for latest offers</span>
            </label>

            <div className="join">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered join-item w-full"
              />
              <button className="btn btn-primary join-item">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </div>

      <div className="border-t border-base-300">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-4 md:flex-row">
          <p>Copyright {new Date().getFullYear()} ShopHub. All rights reserved.</p>

          <div className="flex gap-4">
            <a className="link link-hover">Privacy Policy</a>
            <a className="link link-hover">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

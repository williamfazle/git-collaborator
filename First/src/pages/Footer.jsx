import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content">
      <div className="footer sm:footer-horizontal p-10 max-w-7xl mx-auto">
        {/* Brand */}
        <aside>
          <h2 className="text-3xl font-bold">ShopHub</h2>
          <p className="max-w-xs">
            Your trusted destination for quality products at affordable prices.
          </p>

          <div className="flex gap-4 mt-4 text-xl">
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

        {/* Quick Links */}
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Products</a>
          <a className="link link-hover">Categories</a>
          <a className="link link-hover">Offers</a>
        </nav>

        {/* Customer Service */}
        <nav>
          <h6 className="footer-title">Customer Service</h6>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">FAQs</a>
          <a className="link link-hover">Shipping Policy</a>
          <a className="link link-hover">Return Policy</a>
        </nav>

        {/* Contact */}
        <nav>
          <h6 className="footer-title">Contact</h6>
          <p>Email: support@shophub.com</p>
          <p>Phone: +880 1234-567890</p>
          <p>Dhaka, Bangladesh</p>
        </nav>

        {/* Newsletter */}
        <form>
          <h6 className="footer-title">Newsletter</h6>

          <fieldset className="w-80">
            <label className="label">
              <span className="label-text">
                Subscribe for latest offers
              </span>
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

      {/* Bottom Footer */}
      <div className="border-t border-base-300">
        <div className="max-w-7xl mx-auto py-4 px-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p>
            © {new Date().getFullYear()} ShopHub. All rights reserved.
          </p>

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
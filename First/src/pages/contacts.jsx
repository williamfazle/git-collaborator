import SupportChat from "../shared/SupportChat";

const Contacts = () => {
  return (
    <section className="bg-base-100">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Contact Us
          </p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            We would love to hear from you
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base-content/70">
            Have a question about products, orders, or support? Send us a
            message and our team will get back to you as soon as possible.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-6">
            <div className="rounded-3xl bg-base-200 p-8 shadow-sm">
              <h2 className="text-2xl font-bold">Get in touch</h2>
              <p className="mt-3 text-base-content/70">
                Reach out through any of the channels below for quick help.
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-sm font-semibold uppercase text-primary">
                    Email
                  </p>
                  <p className="mt-1 text-base">support@shophub.com</p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase text-primary">
                    Phone
                  </p>
                  <p className="mt-1 text-base">+880 1234-567890</p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase text-primary">
                    Address
                  </p>
                  <p className="mt-1 text-base">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-base-200 p-6 shadow-sm">
                <h3 className="text-lg font-bold">Customer Support</h3>
                <p className="mt-2 text-sm text-base-content/70">
                  Help with orders, shipping, and returns.
                </p>
              </div>

              <div className="rounded-2xl bg-base-200 p-6 shadow-sm">
                <h3 className="text-lg font-bold">Business Inquiries</h3>
                <p className="mt-2 text-sm text-base-content/70">
                  Partnerships, wholesale, and collaboration requests.
                </p>
              </div>
            </div>

            <SupportChat />
          </div>

          <div className="rounded-3xl bg-base-200 p-8 shadow-sm">
            <h2 className="text-2xl font-bold">Send a message</h2>
            <form className="mt-6 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="input input-bordered w-full"
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text">Email Address</span>
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="input input-bordered w-full"
                  />
                </div>
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Subject</span>
                </label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-36 w-full"
                  placeholder="Write your message here"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-full sm:w-auto">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;

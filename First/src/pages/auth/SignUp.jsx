import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import FakeCaptcha from "../../shared/FakeCaptcha";

const SignUp = () => {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [formError, setFormError] = useState("");
  const [captchaChecked, setCaptchaChecked] = useState(false);
  const [captchaError, setCaptchaError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormError("");

    if (!captchaChecked) {
      setCaptchaError("Please confirm the captcha checkbox.");
      return;
    }

    setCaptchaError("");

    const form = new FormData(event.currentTarget);
    const password = form.get("password");
    const confirmPassword = form.get("confirmPassword");

    if (password !== confirmPassword) {
      setFormError("Passwords do not match.");
      return;
    }

    const result = signUp({
      name: form.get("name"),
      email: form.get("email"),
      password,
    });

    if (!result.success) {
      setFormError(result.message);
      return;
    }

    navigate("/account");
  };

  return (
    <div className="mx-auto max-w-xl rounded-[2rem] border border-base-300 bg-base-100 p-8 shadow-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
        Create Account
      </p>
      <h1 className="mt-3 text-4xl font-bold">Join ShopHub today</h1>
      <p className="mt-3 text-base-content/70">
        Save your shopping progress, access checkout quickly, and manage your
        account from one place.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div>
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input
            required
            type="text"
            name="name"
            className="input input-bordered w-full"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            required
            type="email"
            name="email"
            className="input input-bordered w-full"
            placeholder="you@example.com"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              required
              type="password"
              name="password"
              className="input input-bordered w-full"
              placeholder="Create password"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              required
              type="password"
              name="confirmPassword"
              className="input input-bordered w-full"
              placeholder="Repeat password"
            />
          </div>
        </div>

        <FakeCaptcha
          checked={captchaChecked}
          onChange={(value) => {
            setCaptchaChecked(value);
            if (value) {
              setCaptchaError("");
            }
          }}
          error={captchaError}
        />

        {formError ? <p className="text-sm text-error">{formError}</p> : null}

        <button type="submit" className="btn btn-primary w-full">
          Create Account
        </button>
      </form>

      <p className="mt-6 text-sm text-base-content/70">
        Already have an account?{" "}
        <Link to="/auth/signin" className="font-semibold text-primary">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default SignUp;

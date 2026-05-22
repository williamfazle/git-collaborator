import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import FakeCaptcha from "../../shared/FakeCaptcha";

const SignIn = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [formError, setFormError] = useState("");
  const [captchaChecked, setCaptchaChecked] = useState(false);
  const [captchaError, setCaptchaError] = useState("");

  const redirectTo = location.state?.from || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormError("");

    if (!captchaChecked) {
      setCaptchaError("Please confirm the captcha checkbox.");
      return;
    }

    setCaptchaError("");

    const form = new FormData(event.currentTarget);
    const result = signIn({
      email: form.get("email"),
      password: form.get("password"),
    });

    if (!result.success) {
      setFormError(result.message);
      return;
    }

    navigate(redirectTo);
  };

  return (
    <div className="mx-auto max-w-xl rounded-[2rem] border border-base-300 bg-base-100 p-8 shadow-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
        Welcome Back
      </p>
      <h1 className="mt-3 text-4xl font-bold">Sign in to your account</h1>
      <p className="mt-3 text-base-content/70">
        Continue shopping, manage your cart, and complete checkout faster.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
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

        <div>
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            required
            type="password"
            name="password"
            className="input input-bordered w-full"
            placeholder="Enter your password"
          />
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
          Sign In
        </button>
      </form>

      <p className="mt-6 text-sm text-base-content/70">
        New here?{" "}
        <Link to="/auth/signup" className="font-semibold text-primary">
          Create an account
        </Link>
      </p>
    </div>
  );
};

export default SignIn;

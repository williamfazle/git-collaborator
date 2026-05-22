import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import SectionHeader from "../shared/SectionHeader";

const AccountPage = () => {
  const { user, updateProfileImage } = useAuth();
  const [uploadError, setUploadError] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (!file.type.startsWith("image/")) {
      setUploadError("Please upload a valid image file.");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setUploadError("Please upload an image smaller than 2MB.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      updateProfileImage(reader.result);
      setUploadError("");
    };

    reader.readAsDataURL(file);
  };

  return (
    <section className="mx-auto my-16 w-full max-w-7xl px-4 sm:px-6">
      <SectionHeader
        eyebrow="My Account"
        title={`Welcome, ${user?.name || "ShopHub Member"}`}
        description="Manage your stored account details and continue shopping with your signed-in profile."
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-base-300 bg-base-100 p-8 shadow-lg">
          <h2 className="text-2xl font-bold">Profile Details</h2>

          <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center">
            {user?.profileImage ? (
              <img
                src={user.profileImage}
                alt={user.name}
                className="h-28 w-28 rounded-3xl object-cover shadow-md"
              />
            ) : (
              <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-primary text-4xl font-bold text-primary-content shadow-md">
                {user?.name?.charAt(0)?.toUpperCase() || "U"}
              </div>
            )}

            <div className="flex-1">
              <label className="label">
                <span className="label-text font-semibold">Upload Profile Image</span>
              </label>
              <input
                type="file"
                accept="image/*"
                className="file-input file-input-bordered w-full"
                onChange={handleImageUpload}
              />
              <p className="mt-2 text-xs text-base-content/60">
                JPG, PNG, or WebP up to 2MB.
              </p>
              {uploadError ? (
                <p className="mt-2 text-sm text-error">{uploadError}</p>
              ) : null}
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="rounded-2xl bg-base-200 p-4">
              <p className="text-sm text-base-content/60">Full Name</p>
              <p className="mt-1 font-semibold">{user?.name}</p>
            </div>
            <div className="rounded-2xl bg-base-200 p-4">
              <p className="text-sm text-base-content/60">Email</p>
              <p className="mt-1 font-semibold">{user?.email}</p>
            </div>
            <div className="rounded-2xl bg-base-200 p-4">
              <p className="text-sm text-base-content/60">Member Since</p>
              <p className="mt-1 font-semibold">
                {user?.joinedAt ? new Date(user.joinedAt).toLocaleDateString() : "Today"}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] bg-base-200 p-8 shadow-sm">
          <h2 className="text-2xl font-bold">Quick Actions</h2>
          <div className="mt-6 space-y-4">
            <Link to="/products" className="btn btn-primary w-full">
              Browse Products
            </Link>
            <Link to="/cart" className="btn btn-outline btn-primary w-full">
              Open Cart
            </Link>
            <Link to="/checkout" className="btn btn-outline w-full">
              Go to Checkout
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountPage;

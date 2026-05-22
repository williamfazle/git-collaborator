import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCommunity } from "../context/CommunityContext";
import SectionHeader from "./SectionHeader";

const ReviewSection = ({ productId, productName }) => {
  const { user } = useAuth();
  const { getReviews, addReview } = useCommunity();
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const reviews = getReviews(productId);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!user) {
      setError("Please sign in before posting a review.");
      return;
    }

    if (!comment.trim()) {
      setError("Please write a review comment.");
      return;
    }

    addReview(productId, {
      name: user.name,
      comment: comment.trim(),
    });

    setComment("");
    setError("");
  };

  return (
    <div className="mt-16">
      <SectionHeader
        eyebrow="Customer Reviews"
        title={`What shoppers say about ${productName}`}
        description="Signed-in users can leave a text comment review for this product."
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div className="rounded-[2rem] border border-base-300 bg-base-100 p-8 shadow-lg">
          <h3 className="text-2xl font-bold">Write a review</h3>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <textarea
              value={comment}
              onChange={(event) => setComment(event.target.value)}
              className="textarea textarea-bordered h-36 w-full"
              placeholder="Share your experience with this product"
            ></textarea>

            {!user ? (
              <p className="text-sm text-base-content/70">
                You need to{" "}
                <Link to="/auth/signin" className="font-semibold text-primary">
                  sign in
                </Link>{" "}
                before posting a review.
              </p>
            ) : null}

            {error ? <p className="text-sm text-error">{error}</p> : null}

            <button type="submit" className="btn btn-primary">
              Post Review
            </button>
          </form>
        </div>

        <div className="space-y-4">
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <div
                key={review.id}
                className="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="font-bold">{review.name}</p>
                  <p className="text-xs text-base-content/50">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <p className="mt-3 text-sm leading-7 text-base-content/75">
                  {review.comment}
                </p>
              </div>
            ))
          ) : (
            <div className="rounded-3xl bg-base-200 p-8 text-center text-base-content/70">
              No reviews yet. Be the first to leave a comment.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;

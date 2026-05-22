import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCommunity } from "../context/CommunityContext";

const SupportChat = () => {
  const { user } = useAuth();
  const { chatMessages, addChatMessage } = useCommunity();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!user) {
      setError("Please sign in to send a chat message.");
      return;
    }

    if (!message.trim()) {
      setError("Please write a message before sending.");
      return;
    }

    addChatMessage({
      name: user.name,
      message: message.trim(),
    });

    setMessage("");
    setError("");
  };

  return (
    <div className="rounded-3xl bg-base-200 p-8 shadow-sm">
      <h2 className="text-2xl font-bold">Live Support Chat</h2>
      <p className="mt-3 text-base-content/70">
        Ask a question and keep a simple support conversation inside the app.
      </p>

      <div className="mt-6 max-h-96 space-y-4 overflow-y-auto rounded-3xl bg-base-100 p-5">
        {chatMessages.map((item) => (
          <div
            key={item.id}
            className={[
              "max-w-[85%] rounded-2xl px-4 py-3 shadow-sm",
              item.sender === "user"
                ? "ml-auto bg-primary text-primary-content"
                : "bg-base-200 text-base-content",
            ].join(" ")}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">
              {item.name}
            </p>
            <p className="mt-2 text-sm leading-6">{item.message}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="textarea textarea-bordered h-28 w-full"
          placeholder="Type your support message"
        ></textarea>

        {!user ? (
          <p className="text-sm text-base-content/70">
            You need to{" "}
            <Link to="/auth/signin" className="font-semibold text-primary">
              sign in
            </Link>{" "}
            before chatting with support.
          </p>
        ) : null}

        {error ? <p className="text-sm text-error">{error}</p> : null}

        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default SupportChat;

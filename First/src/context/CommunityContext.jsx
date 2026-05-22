import { createContext, useContext, useEffect, useState } from "react";

const CommunityContext = createContext(null);

const defaultMessages = [
  {
    id: 1,
    sender: "support",
    name: "ShopHub Support",
    message: "Hello. How can we help you today?",
    createdAt: new Date().toISOString(),
  },
];

const defaultReviews = {
  1: [
    {
      id: 1,
      name: "Ava",
      comment: "Really comfortable headphones and the battery lasted longer than I expected.",
      createdAt: new Date().toISOString(),
    },
  ],
};

export const CommunityProvider = ({ children }) => {
  const [chatMessages, setChatMessages] = useState(() => {
    const savedMessages = localStorage.getItem("shophub-chat-messages");
    return savedMessages ? JSON.parse(savedMessages) : defaultMessages;
  });

  const [reviewsByProduct, setReviewsByProduct] = useState(() => {
    const savedReviews = localStorage.getItem("shophub-product-reviews");
    return savedReviews ? JSON.parse(savedReviews) : defaultReviews;
  });

  useEffect(() => {
    localStorage.setItem("shophub-chat-messages", JSON.stringify(chatMessages));
  }, [chatMessages]);

  useEffect(() => {
    localStorage.setItem("shophub-product-reviews", JSON.stringify(reviewsByProduct));
  }, [reviewsByProduct]);

  const addChatMessage = ({ name, message }) => {
    const userMessage = {
      id: Date.now(),
      sender: "user",
      name,
      message,
      createdAt: new Date().toISOString(),
    };

    const supportReply = {
      id: Date.now() + 1,
      sender: "support",
      name: "ShopHub Support",
      message: "Thanks for reaching out. Our team will review your message and respond soon.",
      createdAt: new Date().toISOString(),
    };

    setChatMessages((current) => [...current, userMessage, supportReply]);
  };

  const addReview = (productId, review) => {
    setReviewsByProduct((current) => {
      const productReviews = current[productId] || [];

      return {
        ...current,
        [productId]: [
          {
            id: Date.now(),
            ...review,
            createdAt: new Date().toISOString(),
          },
          ...productReviews,
        ],
      };
    });
  };

  const getReviews = (productId) => reviewsByProduct[productId] || [];

  return (
    <CommunityContext.Provider
      value={{ chatMessages, addChatMessage, getReviews, addReview }}
    >
      {children}
    </CommunityContext.Provider>
  );
};

export const useCommunity = () => {
  const context = useContext(CommunityContext);

  if (!context) {
    throw new Error("useCommunity must be used within a CommunityProvider");
  }

  return context;
};

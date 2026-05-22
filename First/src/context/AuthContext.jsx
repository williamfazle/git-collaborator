import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

const sanitizeUser = (user) => ({
  id: user.id,
  name: user.name,
  email: user.email,
  joinedAt: user.joinedAt,
  profileImage: user.profileImage || "",
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("shophub-user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("shophub-user", JSON.stringify(user));
    } else {
      localStorage.removeItem("shophub-user");
    }
  }, [user]);

  const signUp = ({ name, email, password }) => {
    const savedUsers = JSON.parse(localStorage.getItem("shophub-users") || "[]");
    const userExists = savedUsers.some((item) => item.email === email);

    if (userExists) {
      return { success: false, message: "An account with this email already exists." };
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
      joinedAt: new Date().toISOString(),
      profileImage: "",
    };

    localStorage.setItem("shophub-users", JSON.stringify([...savedUsers, newUser]));
    setUser(sanitizeUser(newUser));

    return { success: true };
  };

  const signIn = ({ email, password }) => {
    const savedUsers = JSON.parse(localStorage.getItem("shophub-users") || "[]");
    const matchedUser = savedUsers.find(
      (item) => item.email === email && item.password === password
    );

    if (!matchedUser) {
      return { success: false, message: "Invalid email or password." };
    }

    setUser(sanitizeUser(matchedUser));

    return { success: true };
  };

  const updateProfileImage = (profileImage) => {
    setUser((currentUser) => {
      if (!currentUser) {
        return currentUser;
      }

      const updatedUser = {
        ...currentUser,
        profileImage,
      };

      const savedUsers = JSON.parse(localStorage.getItem("shophub-users") || "[]");
      const updatedUsers = savedUsers.map((item) =>
        item.id === currentUser.id ? { ...item, profileImage } : item
      );

      localStorage.setItem("shophub-users", JSON.stringify(updatedUsers));

      return updatedUser;
    });
  };

  const signOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, signIn, signUp, signOut, updateProfileImage }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

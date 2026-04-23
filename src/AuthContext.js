import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Test credentials
  const VALID_USERS = {
    "test@university.edu": "password123",
    "alumni@example.com": "Alumni123",
  };

  useEffect(() => {
    // Check for saved user on mount
    const savedUser = localStorage.getItem("alumni_user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
        setIsAuthenticated(true);
      } catch (error) {
        localStorage.removeItem("alumni_user");
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      setLoading(true);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Validate
      if (!VALID_USERS[email] || VALID_USERS[email] !== password) {
        return {
          success: false,
          message:
            "Invalid email or password. Try test@university.edu / password123",
        };
      }

      const newUser = {
        id: Date.now(),
        email,
        name: email.split("@")[0],
        avatar: "👤",
        graduationYear: "2020",
        company: "Tech Company",
        position: "Software Engineer",
        bio: "Passionate about technology",
        connections: 142,
        joinedDate: new Date().toISOString(),
      };

      setUser(newUser);
      setIsAuthenticated(true);
      localStorage.setItem("alumni_user", JSON.stringify(newUser));

      return { success: true };
    } catch (error) {
      return { success: false, message: "Login failed" };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("alumni_user");
  };

  const signup = async (email, password) => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const newUser = {
        id: Date.now(),
        email,
        name: email.split("@")[0],
        avatar: "👤",
        graduationYear: new Date().getFullYear().toString(),
        company: "Not specified",
        position: "Recent Graduate",
        bio: "Welcome!",
        connections: 0,
        joinedDate: new Date().toISOString(),
      };

      setUser(newUser);
      setIsAuthenticated(true);
      localStorage.setItem("alumni_user", JSON.stringify(newUser));

      return { success: true };
    } catch (error) {
      return { success: false, message: "Signup failed" };
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = (updates) => {
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem("alumni_user", JSON.stringify(updatedUser));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
        login,
        logout,
        signup,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

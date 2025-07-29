import React, { createContext, useContext, useState } from 'react';

// --- Auth Context ---
const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null means not logged in, could be an object with user info

  // Simulate login
  const login = (username, password) => {
    // In a real app, you'd send these to your backend for authentication
    if (username === 'user' && password === 'password') {
      setUser({ username });
      return true;
    }
    return false;
  };

  // Simulate logout
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth }; // Export both the Provider and the hook
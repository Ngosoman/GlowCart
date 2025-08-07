import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // In a real app, you would make an API call here
    setUser({
      email,
      name: 'Test User',
    });
  };

  const register = (name, email, password) => {
    // In a real app, you would make an API call here
    setUser({
      email,
      name,
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
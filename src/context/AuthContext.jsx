import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password, navigate) => {
    // In a real app, you would make an API call here
    setUser({
      email,
      name: 'Test User',
    });
    navigate('/home'); // Navigate to home after login
  };

  const register = async (name, email, password, navigate) => {
    // registration logic...
    setUser({
      email,
      name,
    });
    navigate('/home'); // Navigate to home after registration
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
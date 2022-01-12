import React, { useState, createContext } from 'react';
import { loginRequest } from './authentication.service';

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthentication, setIsAuthentication] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = async (email, password) => {
    try {
      setIsLoading(true);
      const user = await loginRequest(email, password);
      setUser(user);
      setIsAuthentication(true);
    } catch (err) {
      console.log(err);
      setError(err);
      setIsAuthentication(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthentication,
        user,
        isLoading,
        error,
        onLogin,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

import React, { createContext, useState, useEffect, useContext } from 'react';
import { login, logout, register } from '../services/auth';
import { firebaseAuth } from '../services/firebase';

export const AuthContext = createContext({
  user: null,
  login: () => { },
  logout: () => { },
});
export const useAuthContext = () => useContext(AuthContext);


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleLogin = async (email, password) => {
    try {
      const user = await login(email, password);
      setUser(user);
      window.location.reload()
    } catch (error) {

    }
  };

  const handleLogout = () => {
    logout();
    setUser(null);
  };

  const handleRegister = async ({ username, fullname, password, email }) => {
    await register({ username, fullname, password, email })
  }

  const contextValue = {
    user,
    login: handleLogin,
    logout: handleLogout,
    handleRegister,
    isAuthenticated: firebaseAuth()
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

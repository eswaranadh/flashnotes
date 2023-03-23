import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useState, useEffect, useContext } from 'react';
import { checkAuth, login, logout, register } from '../services/auth';
import { firebaseAuth } from '../services/firebase';

const AuthContext = createContext();
const useAuthContext = () => useContext(AuthContext);

const authContextInitialState = {
  user: {},
  isLoading: true
}

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(authContextInitialState.user);
  const [isLoading, setLoading] = useState(authContextInitialState.isLoading)

  useEffect(() => {
    const auth = firebaseAuth()
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      stateSetters.setUser(user);
      setLoading(false)
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleLogin = async (email, password) => {
    try {
      await login(email, password);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    logout();
    setUser({});
  };

  const handleRegister = async ({ username, fullname, password, email }) => {
    await register({ username, fullname, password, email })
  }

  const state = {
    user,
    isLoading
  }

  const stateSetters = {
    setUser,
    setLoading
  }

  const handlers = {
    handleLogin,
    handleLogout,
    handleRegister
  }

  return (
    <AuthContext.Provider value={{ state, stateSetters, handlers }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuthContext, AuthProvider }

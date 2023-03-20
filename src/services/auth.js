import api from './api';
import setAuthToken from '../utils/setAuthToken';
import { signInWithCustomToken } from "firebase/auth";
import { firebaseAuth } from './firebase'

// Register a new user
export const register = async (username, email, password, fullname) => {
  try {
    const res = await api.post('/auth/register', {
      username,
      email,
      password,
      fullname
    });
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Get the current user
export const getUser = async () => {
  try {
    const res = await api.get('/auth/user');
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Login a user and store the token in local storage
export const login = async (email, password) => {
  try {
    const res = await api.post('/auth/login', { email, password });
    const customToken = res.data.token;
    const auth = firebaseAuth();
    const loggedInUser = await signInWithCustomToken(auth, customToken);
    const token = await loggedInUser.user.getIdToken()
    setAuthToken(token);
  } catch (error) {
    console.error(error);
    throw error.response.data;
  }
};

// Logout a user and remove the token from local storage
export const logout = () => {
  localStorage.removeItem('token');
  setAuthToken(false);
};

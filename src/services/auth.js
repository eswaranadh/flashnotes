import api from './api';
import setAuthToken from '../utils/setAuthToken';
import { onAuthStateChanged, signInWithCustomToken, signOut } from "firebase/auth";
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

export const getUser = async () => {
  const data = await api.get('/auth/user');
  return data;
};

export const login = async (email, password) => {
  const data = await api.post('/auth/login', { email, password });
  const customToken = data.token;
  const auth = firebaseAuth();
  const loggedInUser = await signInWithCustomToken(auth, customToken);
  const token = await loggedInUser.user.getIdToken()
  setAuthToken(token);
};

export const logout = async () => {
  const auth = firebaseAuth()
  await signOut(auth)
  setAuthToken(false);
};

export const checkAuth = () => {
  return onAuthStateChanged
}
import axios from 'axios';

const setAuthToken = (token) => {
  if (token) {
    // Set the token in the Authorization header for all requests
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    // Save the token to local storage for persistence
    localStorage.setItem('token', token);
  } else {
    // Delete the token from the Authorization header and local storage
    delete axios.defaults.headers.common['Authorization'];
    localStorage.removeItem('token');
  }
};

export default setAuthToken;

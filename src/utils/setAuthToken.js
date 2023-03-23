import axios from 'axios';

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('token', token);
    window.location.reload();
  } else {
    delete axios.defaults.headers.common['Authorization'];
    localStorage.removeItem('token');
    window.location.reload();
  }
};

export default setAuthToken;

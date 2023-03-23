const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem('token', token);
  } else {
    localStorage.removeItem('token');
    window.location.reload();
  }
};

export default setAuthToken;

import React, { useState } from 'react';
import { useAuthContext } from '../../context/authContext';
import { Link } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { handlers } = useAuthContext()

  const handleSubmit = (event) => {
    event.preventDefault();
    handlers.handleLogin(formData.email, formData.password);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (

    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <div>Log In</div>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input onChange={handleChange} name="email" type="email" id="email" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input onChange={handleChange} name="password" type="password" id="password" className="form-input" />
          </div>
          <button type='submit' className="login-button">Log In</button>
        </form>
        <div className="login-footer">
          Don't have an account?{' '}
          <Link to="/signup" className="signup-link">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

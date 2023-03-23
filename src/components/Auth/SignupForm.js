import React from 'react';
import { Link } from 'react-router-dom';
import './SignupForm.css';

function SignupForm() {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="signup-header">
          <h2 className="signup-title">Sign Up</h2>
        </div>
        <form className="signup-form">
          <div className="form-group">
            <label className="form-label">Name</label>
            <input type="text" className="form-input" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input type="email" className="form-input" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input type="password" className="form-input" placeholder="Enter your password" />
          </div>
          <div className="form-group">
            <label className="form-label">Confirm Password</label>
            <input type="password" className="form-input" placeholder="Confirm your password" />
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <p className="signup-footer">Already have an account? <Link to="/login" className="login-link">
          Log in
        </Link> </p>
      </div>
    </div>
  );
}

export default SignupForm;

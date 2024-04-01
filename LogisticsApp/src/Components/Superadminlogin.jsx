import React from "react";
import { Link } from "react-router-dom";
import "./Superadminlogin.css";
import { FaTruckFast } from "react-icons/fa6";
import { IconContext } from "react-icons";

export default function Superadminlogin() {
  const submitForm = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={submitForm}>
        <IconContext.Provider
          value={{
            color: "darkblue",
            className: "global-class-name",
            margin: "10px",
            fontSize: "24px", // Increase the font size
          }}
        >
          {" "}
          <h1 style={{ margin: "10px" }}>
            {" "}
            <FaTruckFast />
          </h1>
        </IconContext.Provider>
        <h2 className="form-title">Welcome Back!</h2>
        <h1 className="form-subtitle">Please Sign In</h1>

        <label>Email Address</label>
        <input type="email" placeholder="Enter email address" />

        <label>Password</label>
        <input type="password" placeholder="Enter password" />

        <div className="remember-forgot">
          <div className="remember-me">
            <input type="checkbox" />
            <label>Remember me</label>
          </div>
          <Link to="/forgot-password" className="forgot-password">
            Forgot Password?
          </Link>
        </div>

        <button type="submit" className="submit-button">
          Sign In
        </button>

        <div className="signup-link">
          Don't have an account?{" "}
          <Link to="/signup" className="signup-button">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}

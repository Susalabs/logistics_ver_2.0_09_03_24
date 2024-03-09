import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css"; // Import your custom CSS file

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!username) {
      setErrorMsg("Username is required!");
      return;
    }
    if (!password) {
      setErrorMsg("Password is required!");
      return;
    }
    if (!email) {
      setErrorMsg("Email is required!");
      return;
    }
    // Add more validation if needed

    // Handle successful form submission
    // You can implement your own logic here

    // Clear error message
    setErrorMsg("");
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Logistic Project</h2>

        <label>Username</label>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errorMsg && <p className="error-message">{errorMsg}</p>}

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMsg && <p className="error-message">{errorMsg}</p>}

        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errorMsg && <p className="error-message">{errorMsg}</p>}

        <label>Captcha</label>
        <input
          type="text"
          placeholder="Enter captcha"
          value={captcha}
          onChange={(e) => setCaptcha(e.target.value)}
        />

        <div className="remember-forgot">
          <Link to="/forgot-password" className="forgot-password">
            Forgot Password?
          </Link>
        </div>

        <button type="submit" className="submit-button">
          Sign Up
        </button>

        <div className="signup-link">
          Already have an account?{" "}
          <Link to="/login" className="signin-button">
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
}

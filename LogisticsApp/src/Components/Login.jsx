import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"; // Import your external CSS file
import { FaTruckFast } from "react-icons/fa6";
import { IconContext } from "react-icons";

export default function Login() {
  const [pin, setPin] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate(); // Add this line to get the navigate function

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!pin) {
      setErrorMsg("PIN is required!");
      return;
    }
    // Add more validation if needed

    // Handle successful form submission
    // You can implement your own logic here

    // Clear error message
    setErrorMsg("");
  };

  const goToCompanies = () => {
    navigate("/usertype");
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
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
        <h2 className="form-title">Logistic Project</h2>

        <label>PIN</label>
        <input
          type="password"
          placeholder="Enter PIN"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
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

        <button type="submit" className="submit-button" onClick={goToCompanies}>
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

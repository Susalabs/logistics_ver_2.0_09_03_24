// ForgotPassword.js

import React, { useState } from "react";
import "./ForgotPassword.css"; // Import your external CSS file

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [showPinInput, setShowPinInput] = useState(false);
  const [pin, setPin] = useState("");

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    // Validate email and send a pin to the email
    // For the sake of this example, we will just show the pin input field.
    setShowPinInput(true);
  };

  const handleSubmitPin = (e) => {
    e.preventDefault();
    // Validate pin and implement further logic (e.g., password reset)
    console.log("Pin submitted:", pin);
  };

  return (
    <div className="forgot-password-container">
      {!showPinInput ? (
        <form className="email-form" onSubmit={handleSubmitEmail}>
          <h2>Forgot Password</h2>
          <p>
            Please enter your email address. We'll send you a PIN to reset your
            password.
          </p>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Send PIN</button>
        </form>
      ) : (
        <form className="pin-form" onSubmit={handleSubmitPin}>
          <h2>Verify PIN</h2>
          <p>
            We've sent a PIN to your email. Enter the PIN below to reset your
            password.
          </p>
          <label>Enter Pin</label>
          <input
            type="text"
            placeholder="Enter the pin sent to your email"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            required
          />
          <button type="submit">Reset Password</button>
        </form>
      )}
    </div>
  );
};

export default ForgotPassword;

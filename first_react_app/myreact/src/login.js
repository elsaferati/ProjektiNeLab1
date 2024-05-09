import React, { useState } from "react";
import API_BASE_URL from "./config"; // Corrected import path
import "./login.scss";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    .then(response => {
      if (response.ok) {
        // Handle successful login
        console.log('Login successful');
        // Perform any additional actions, such as updating the UI or redirecting the user
      } else {
        // Handle login error
        throw new Error('Login failed');
      }
    })
    .catch(error => {
      // Handle network error or login failure
      console.error('Login error:', error.message);
      setError('Failed to login. Please try again.');
    });
  };

  return (
    <div className="login">
      <div className="top">
        <div className="login-wrapper">
          <h1 style={{ color: "red" }}>AlbMovie</h1>
        </div>
      </div>
      <div className="login-container">
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleLogin}>
          <h1>Sign in</h1>
          <input
            type="email"
            placeholder="Email or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" type="submit">
            Sign In
          </button>
          <span>
            <small>
              This page is protected by Google reCAPTCHA to ensure you are a
              bot. <b>Learn More</b>
            </small>
          </span>
        </form>
      </div>
    </div>
  );
}

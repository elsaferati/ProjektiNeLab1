import React, { useState } from "react";
import "./login.scss"; // Import SCSS file

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const id = generateUserId();
    const newUser = { id, email, password };
    onLogin(newUser);
    setEmail("");
    setPassword("");
  };

  const generateUserId = () => {
    // Implement your logic to generate a unique ID
  };

  return (
    <div className="login">
      <div className="top">
        <div className="login-wrapper">
          <h1 style={{ color: "red" }}>AlbMovie</h1>
        </div>
      </div>
      <div className="login-container">
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

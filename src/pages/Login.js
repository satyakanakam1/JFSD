import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login({ onLogin }) { // Receive onLogin as a prop
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Instead of checking credentials, simply navigate to the respective dashboard
    if (email) {
      // Check if the email contains 'admin' to redirect to admin dashboard
      if (email.includes("admin")) {
        onLogin(); // Call onLogin to update the authentication state
        navigate("/admin-dashboard"); // Redirect to Admin Dashboard
      } else {
        onLogin(); // Call onLogin to update the authentication state
        navigate("/student-dashboard"); // Redirect to Student Dashboard
      }
    } else {
      alert("Please enter an email."); // Prompt if no email is provided
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{" "}
        <Link to="/register">Register here</Link> {/* Register link */}
      </p>
    </div>
  );
}

export default Login;

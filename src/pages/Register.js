import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleRegister = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Basic validation for passwords
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Here you would typically send the data to your API
    // For demonstration, we can simulate successful registration
    alert("Registration successful! You can now log in.");
    navigate("/login"); // Redirect to the login page after successful registration
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account?{" "}
        <Link to="/login">Login here</Link> {/* Updated link to point to login page */}
      </p>
    </div>
  );
}

export default Register;

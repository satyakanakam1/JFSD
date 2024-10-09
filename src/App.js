import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import './App.css'; // Import CSS for styling
import Contact from "./pages/Contact";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to manage authentication

  // Function to handle login
  const handleLogin = () => {
    setIsAuthenticated(true); // Set authentication to true
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsAuthenticated(false); // Reset authentication to false
    // Optional: Add any additional cleanup logic here
  };

  return (
    <Router>
      <div>
        <nav className="navbar">
          <Link to="/" className="nav-link">Home</Link>
          {isAuthenticated ? ( // Conditionally render links based on authentication
            <div className="auth-links">
              <button onClick={handleLogout}>
                Logout
              </button> {/* Logout button */}
            </div>
          ) : (
            <div className="auth-links">
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </div>
          )}
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} /> {/* Pass handleLogin as a prop */}
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />  {/* Route for Contact */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

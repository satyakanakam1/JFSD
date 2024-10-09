import React from "react";
import { Link } from "react-router-dom";
import './Home.css'; // Make sure to create and import the relevant CSS file

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to InternHUB!</h1>
      <p>Manage and evaluate internships easily with our platform.</p>

      <div className="home-buttons">
        <Link to="/login">
          <button className="home-button">Learn more</button>
        </Link>
        
        <Link to="/contact">
          <button className="home-button contact-button">Contact</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

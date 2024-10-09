import React from "react";
import './Contact.css'; // Optional: Create a CSS file to style the contact page

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>If you have any questions or need assistance, please feel free to contact us via the information below or fill out the contact form, and we will get back to you as soon as possible.</p>

      <div className="contact-info">
        <ul>
          <li><strong>Email:</strong> internhub@gmail.com</li>
          <li><strong>Phone:</strong> +91 987654321</li>
          <li><strong>Address:</strong> KL University, vaddeswaram, Andhra pradesh</li>
        </ul>
      </div>

      <div className="contact-form">
        <h3>Contact Form</h3>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your name..." required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your email..." required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Your message..." required></textarea>

          <button type="submit" className="contact-submit">Submit</button>
        </form>
      </div>

      <div className="social-media">
        <h3>Follow Us</h3>
        <ul>
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;

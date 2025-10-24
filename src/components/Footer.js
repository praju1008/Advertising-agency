import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* About Column */}
        <div className="footer-column">
          <h4>Naval Publicity</h4>
          <p>Leading advertising agency in Pune delivering creative solutions and engaging campaigns.</p>
        </div>

        {/* Services Column */}
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li>Digital Marketing</li>
            <li>Social Media Ads</li>
            <li>Creative Content</li>
            <li>Branding</li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer-column">
          <h4>Contact</h4>
          <p>Email: letstalk@naval.in</p>
          <p>Phone: +91 12345 67890</p>
          <p>Address: Pune, Maharashtra, India</p>
        </div>

        {/* Social Column */}
        <div className="footer-column">
          <h4>Follow Us</h4>
          <ul className="social-links">
            <li><a href="#" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="#" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="#" target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        &copy; {new Date().getFullYear()} Naval Publicity. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

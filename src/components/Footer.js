import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-left">
          <img src="/assets/images/logo.png" alt="Naval Logo" className="footer-logo" />
          <p>
            We are one of the leading & fastest growing advertising agencies in Pune
            creating engaging content and innovative solutions.
          </p>
        </div>
        <div className="footer-center">
   
          
        </div>
        <div className="footer-right">
          <h4>Contact Us</h4>
          <p>Email: letstalk@naval.in</p>
          <p>Phone: +91 12345 67890</p>
          <p>Address: Pune, India</p>
          
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Naval Advertising. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

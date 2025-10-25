import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-left">
          <img src="/assets/images/logo.png" alt="Naval Logo" className="footer-logo" />
          <p>
            We are one of the leading & fastest growing advertising agencies in Vijayapur
            creating engaging content and innovative solutions.
          </p>
        </div>
        <div className="footer-center">
   
          
        </div>
        <div className="footer-right">
          <h4>Contact Us</h4>
          <p>Email: tpadvtvjp@gmail.com</p>
          <p>Phone: +91 9844642266</p>
          <p>Address: Vijayapur,Karanataka India</p>
          
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

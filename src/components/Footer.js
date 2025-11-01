import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Footer.css';

const Footer = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', form); // Make sure your backend accepts phone!
      setStatus('Message sent. Thank you!');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setStatus('Error sending message.');
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-main-demo">
        <div className="footer-left-icons">
          <div className="footer-info-icon-row">
            <span className="footer-icon-demo"><i className="fas fa-home"></i></span>
            <span className="footer-info-value">
              CTS 133C, Talikoti Building, Opp: Kannayya sweet Mart, behind Talikoti Medicals, Vijayapura, Karnataka 586101
            </span>
          </div>
          <div className="footer-info-icon-row">
            <span className="footer-icon-demo"><i className="fas fa-phone-alt"></i></span>
            <span className="footer-info-value">
              <a href="tel:+91 9844248804" className="footer-tel-link">+91 9844248804</a>
            </span>
          </div>
          <div className="footer-info-icon-row">
            <span className="footer-icon-demo"><i className="fas fa-envelope"></i></span>
            <span className="footer-info-value">
              <a href="mailto:tpadvtvjp@gmail.com" className="footer-mail-link">tpadvtvjp@gmail.com</a>
            </span>
          </div>
          <div className="footer-social-row">
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="mailto:tpadvtvjp@gmail.com" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://www.instagram.com/timashettipublicity?igsh=MW5mOW04dm16MHBzZg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer-form-demo">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              required
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              required
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />
            <input
              type="tel"
              placeholder="Enter your mobile number"
              name="phone"
              required
              value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })}
              pattern="[0-9]{10,15}"
              maxLength={15}
            />
            <textarea
              placeholder="Your Message"
              name="message"
              required
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
            ></textarea>
            <button type="submit">SEND MESSAGE</button>
          </form>
          {status && <div className="status">{status}</div>}
        </div>
      </div>
      <div className="footer-bar-demo">
        <span>© THIMASHETTI PUBLICITY | ALL RIGHTS RESERVED</span>
        <a href="#top" className="footer-to-top">TO THE TOP <span className="footer-top-arrow">↑</span></a>
      </div>
    </footer>
  );
};

export default Footer;

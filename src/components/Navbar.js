import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src="/assets/images/logo.png" alt="Timashetti Logo" />
        </Link>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li className={location.pathname === '/about' ? 'active' : ''}>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          </li>
          <li className={location.pathname === '/services' ? 'active' : ''}>
            <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          </li>
          <li className={location.pathname === '/career' ? 'active' : ''}>
            <Link to="/career" onClick={() => setMenuOpen(false)}>Career</Link>
          </li>
          <li className={location.pathname === '/contact' ? 'active' : ''}>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </li>
          {/* Admin Button */}
          {/* <li>
            <Link
              to="/admin-login"
              className="admin-nav-btn"
              onClick={() => setMenuOpen(false)}
              aria-label="Admin Login"
            >
              <i className="fas fa-user-shield"></i> Admin
            </Link>
          </li> */}
        </ul>
        <div
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

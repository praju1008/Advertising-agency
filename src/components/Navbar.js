import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
        <Link to="/">Naval Publicity</Link>
      </div>

      <nav className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <NavLink to="/" exact="true" activeclassname="active" onClick={() => setIsOpen(false)}>Home</NavLink>
        <NavLink to="/about" activeclassname="active" onClick={() => setIsOpen(false)}>About</NavLink>
        <NavLink to="/services" activeclassname="active" onClick={() => setIsOpen(false)}>Services</NavLink>
        <NavLink to="/career" activeclassname="active" onClick={() => setIsOpen(false)}>Career</NavLink>
        <NavLink to="/contact" activeclassname="active" onClick={() => setIsOpen(false)}>Contact</NavLink>
      </nav>

      <div className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
};

export default Navbar;

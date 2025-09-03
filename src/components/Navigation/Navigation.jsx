import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Expertise' },
    { path: '/projects', label: 'Projects' },
    { path: '/blog', label: 'Blog' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h2>Habeeb Andraws</h2>
        </div>
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                isActive ? 'nav-link active' : 'nav-link'
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <div className="nav-actions">
          <ThemeToggle />
        </div>
        <div 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
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

export default Navigation;
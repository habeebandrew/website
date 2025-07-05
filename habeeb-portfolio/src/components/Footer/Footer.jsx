import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <h3>Habeeb Andraws</h3>
            <p>Flutter Developer & Software Engineer creating innovative applications</p>
          </div>
          <div className="footer-right">
            <div className="social-links">
              <a href="https://github.com/habeebandrew" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/habeeb-andrew-6960a8296" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/habeeb__andrew" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Habeeb Andraws. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
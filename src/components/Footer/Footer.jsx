import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <h3>Habeeb Andraws</h3>
            <p>{t('footer.description')}</p>
          </div>
          <div className="footer-right">
            <div className="social-links">
              <a href="https://github.com/habeebandrew" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://gitlab.com/habeeb_andrew77" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-gitlab"></i>
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
          <p>&copy; {currentYear} Habeeb Andraws. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
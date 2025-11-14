import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import './Home.css';

const Home = () => {
  const heroRef = useRef(null);
  const { t } = useTranslation();

  const socialLinks = [
    { url: 'https://github.com/habeebandrew', icon: 'fab fa-github', label: 'GitHub' },
    { url: 'https://gitlab.com/habeeb_andrew77', icon: 'fab fa-gitlab', label: 'GitLab' },
    { url: 'https://www.linkedin.com/in/habeeb-andrew-6960a8296', icon: 'fab fa-linkedin', label: 'LinkedIn' },
    { url: 'https://www.instagram.com/habeeb__andrew', icon: 'fab fa-instagram', label: 'Instagram' }
  ];

  useEffect(() => {
    // Create enhanced particles effect
    const createParticles = () => {
      const hero = heroRef.current;
      if (!hero) return;
      
      // Remove existing particles
      const existingParticles = hero.querySelectorAll('.particle');
      existingParticles.forEach(p => p.remove());
      
      // Create floating shapes
      for (let i = 0; i < 20; i++) {
        const shape = document.createElement('div');
        shape.className = 'floating-shape';
        const size = Math.random() * 100 + 50;
        const colors = ['var(--primary-color)', 'var(--secondary-color)', 'var(--accent-color)'];
        shape.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          background: ${colors[Math.floor(Math.random() * colors.length)]};
          border-radius: ${Math.random() > 0.5 ? '50%' : '20%'};
          opacity: ${0.05 + Math.random() * 0.1};
          animation: floatShape ${15 + Math.random() * 20}s ease-in-out infinite;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          animation-delay: ${Math.random() * 5}s;
          filter: blur(${20 + Math.random() * 30}px);
        `;
        hero.appendChild(shape);
      }
      
      // Create particles
      for (let i = 0; i < 40; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 3 + 1;
        particle.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          background: var(--primary-color);
          border-radius: 50%;
          opacity: ${0.2 + Math.random() * 0.4};
          animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          animation-delay: ${Math.random() * 2}s;
          box-shadow: 0 0 ${size * 2}px var(--primary-color);
        `;
        hero.appendChild(particle);
      }
    };

    createParticles();

    // Cleanup function
    return () => {
      if (heroRef.current) {
        const particles = heroRef.current.querySelectorAll('.particle, .floating-shape');
        particles.forEach(particle => particle.remove());
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Habeeb Andraws - Flutter Developer & Software Engineer</title>
        <meta name="description" content="Professional Flutter developer and software engineer specializing in mobile, web, and desktop applications. Building high-performance apps with clean design and great user experience." />
        <meta name="keywords" content="Flutter developer, software engineer, mobile app development, web development, React, UI/UX design" />
        <meta property="og:title" content="Habeeb Andraws - Flutter Developer & Software Engineer" />
        <meta property="og:description" content="Professional Flutter developer and software engineer specializing in high-performance applications." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://habeeb-andraws.vercel.app/" />
        <meta property="og:image" content="/mypic.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Habeeb Andraws - Flutter Developer & Software Engineer" />
        <meta name="twitter:description" content="Professional Flutter developer and software engineer specializing in high-performance applications." />
        <meta name="twitter:image" content="/mypic.png" />
        <link rel="canonical" href="https://habeeb-andraws.vercel.app/" />
      </Helmet>
      
      <section id="home" className="hero" ref={heroRef}>
        <div className="animated-background"></div>
        <div className="hero-content">
          <div className="hero-text-wrapper">
            <h1 className="hero-title">
              <span className="greeting">{t('home.greeting')}</span>
              <span className="highlight">{t('home.name')}</span>
              <span className="title-separator">–</span>
              <span className="title-text">{t('home.title')}</span>
            </h1>
            <h2 className="typing-animation">{t('home.subtitle')}</h2>
            <p className="hero-description">{t('home.description')}</p>
          </div>
          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">
              <i className="fas fa-folder-open"></i>
              <span>{t('home.viewProjects')}</span>
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              <i className="fas fa-envelope"></i>
              <span>{t('home.contactMe')}</span>
            </Link>
          </div>
          <div className="hero-social-links">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={link.label}
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-card">
            <div className="profile-glow"></div>
            <div className="profile-border"></div>
            <div className="profile-img">
              <img src="/mypic.png" alt="Habeeb Andraws Profile Picture" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
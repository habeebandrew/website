import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './Home.css';

const Home = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    // Create particles effect
    const createParticles = () => {
      const hero = heroRef.current;
      if (!hero) return;
      
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
          position: absolute;
          width: 2px;
          height: 2px;
          background: var(--primary-color);
          border-radius: 50%;
          opacity: 0.3;
          animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          animation-delay: ${Math.random() * 2}s;
        `;
        hero.appendChild(particle);
      }
    };

    createParticles();

    // Cleanup function
    return () => {
      if (heroRef.current) {
        const particles = heroRef.current.querySelectorAll('.particle');
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
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Habeeb</span> – Flutter Developer & Software Engineer</h1>
        <h2 className="typing-animation">Building High-Performance Apps</h2>
        <p>I build high-performance mobile, web, and desktop applications focused on clean design and great user experience.</p>
        <div className="hero-buttons">
          <Link to="/projects" className="btn btn-primary">View Projects</Link>
          <Link to="/contact" className="btn btn-secondary">Contact Me</Link>
        </div>
      </div>
      <div className="hero-image">
        <div className="profile-card">
          <div className="profile-img">
            <img src="/mypic.png" alt="Habeeb Andraws Profile Picture" />
          </div>
        </div>
      </div>
    </section>
  </>
);
};

export default Home;
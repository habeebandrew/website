import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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
  );
};

export default Home;
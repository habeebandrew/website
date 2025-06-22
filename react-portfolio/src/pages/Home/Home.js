import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Building High-Performance Applications';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  // Particle animation for background
  const particles = Array.from({ length: 50 }, (_, i) => (
    <motion.div
      key={i}
      className="particle"
      initial={{
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        opacity: 0.3,
      }}
      animate={{
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        opacity: [0.3, 0.8, 0.3],
      }}
      transition={{
        duration: 3 + Math.random() * 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 2,
      }}
    />
  ));

  return (
    <motion.section 
      id="home" 
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="particles-container">
        {particles}
      </div>
      
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hi, I'm <span className="highlight">Habeeb</span> – Flutter Developer & Software Engineer
          </motion.h1>
          
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="typing-text"
          >
            {displayText}
            <span className="cursor">|</span>
          </motion.h2>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            I build high-performance mobile, web, and desktop applications focused on clean design and great user experience.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <Link to="/projects" className="btn btn-primary">
              <span>View Projects</span>
              <i className="fas fa-arrow-right"></i>
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              <span>Contact Me</span>
              <i className="fas fa-envelope"></i>
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-image"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div 
            className="profile-card"
            whileHover={{ 
              scale: 1.05,
              rotateY: 10,
              boxShadow: "var(--shadow-lg)"
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="profile-img">
              <motion.i 
                className="fas fa-user-circle"
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.i>
            </div>
            <div className="profile-glow"></div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;
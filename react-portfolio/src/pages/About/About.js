import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const skills = [
    "Flutter & Dart",
    "RESTful APIs",
    "Firebase",
    "Supabase",
    "Back4App",
    "Cubit (BLoC)",
    "Figma",
    "Articulate Storyline",
    "GitHub & GitLab",
    "Flutter Web",
    "Flutter Desktop"
  ];

  const stats = [
    { number: "2025", label: "Expected Graduation" },
    { number: "5+", label: "Major Projects" },
    { number: "3+", label: "Years Experience" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.section 
      id="about" 
      className="about page-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <motion.div 
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="about-text" variants={itemVariants}>
            <motion.h3
              whileHover={{ color: "var(--primary-color)" }}
              transition={{ duration: 0.3 }}
            >
              Software Engineering Student & Flutter Developer
            </motion.h3>
            
            <motion.p variants={itemVariants}>
              I'm currently pursuing my Bachelor's degree in Software Engineering at Damascus University (2020–2025 expected). 
              I'm passionate about building production-ready applications and solving real-world problems through innovative technology solutions.
            </motion.p>
            
            <motion.p variants={itemVariants}>
              With experience delivering prototypes and collecting feedback from real clients, I focus on creating applications with exceptional UI/UX design, 
              solid system architecture, and seamless backend integration.
            </motion.p>
            
            <motion.div className="skills" variants={itemVariants}>
              <h4>Tech Stack</h4>
              <motion.div 
                className="skill-tags"
                variants={containerVariants}
              >
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="skill-tag"
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "var(--primary-color)",
                      color: "white"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div className="stats" variants={itemVariants}>
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat"
                  whileHover={{ 
                    scale: 1.05,
                    y: -5
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h4
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.8 + index * 0.1,
                      type: "spring",
                      stiffness: 100 
                    }}
                  >
                    {stat.number}
                  </motion.h4>
                  <p>{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
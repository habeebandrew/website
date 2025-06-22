import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: "fas fa-mobile-alt",
      title: "Mobile App Development",
      description: "Cross-platform Flutter apps for Android & iOS with native performance and beautiful UI.",
      features: ["Flutter & Dart", "Cross-platform Development", "Native Performance"]
    },
    {
      icon: "fas fa-globe",
      title: "Web Development", 
      description: "Company portfolio websites, real-time dashboards, and document systems using Flutter Web and modern stacks.",
      features: ["Flutter Web", "Responsive Design", "Real-time Dashboards"]
    },
    {
      icon: "fas fa-desktop",
      title: "Desktop App Development",
      description: "Tools like document management systems and productivity applications using Flutter Desktop.",
      features: ["Flutter Desktop", "Cross-platform Tools", "Document Management"]
    },
    {
      icon: "fas fa-gamepad",
      title: "Interactive Learning Content",
      description: "Creating gamified e-learning and course modules using Articulate Storyline for engaging user experiences.",
      features: ["Articulate Storyline", "Gamified Learning", "Interactive Modules"]
    },
    {
      icon: "fas fa-paint-brush",
      title: "UI/UX Design & Prototyping",
      description: "Figma-based design workflows with responsive design focus and user-centered approach.",
      features: ["Figma Design", "Responsive Prototypes", "User Experience"]
    },
    {
      icon: "fas fa-plug",
      title: "API Integration",
      description: "RESTful APIs with clean architecture and Cubit/BLoC state management for scalable applications.",
      features: ["RESTful APIs", "Cubit/BLoC Architecture", "Clean Code Practices"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.section 
      id="services" 
      className="services page-section"
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
          Expertise & Services
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Specialized development services I offer
        </motion.p>
        
        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "var(--shadow-lg)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="service-icon"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <i className={service.icon}></i>
              </motion.div>
              
              <motion.h3
                whileHover={{ color: "var(--primary-color)" }}
                transition={{ duration: 0.3 }}
              >
                {service.title}
              </motion.h3>
              
              <p>{service.description}</p>
              
              <ul>
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.6 + index * 0.1 + featureIndex * 0.1 
                    }}
                    whileHover={{ 
                      x: 5,
                      color: "var(--primary-color)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    <i className="fas fa-check-circle"></i>
                    {feature}
                  </motion.li>
                ))}
              </ul>
              
              <motion.div 
                className="service-overlay"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="service-cta"
                  initial={{ y: 20 }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span>Learn More</span>
                  <i className="fas fa-arrow-right"></i>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
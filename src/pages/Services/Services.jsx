import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile App Development',
      description: 'Cross-platform Flutter apps for Android & iOS with native performance and beautiful UI.',
      features: [
        'Flutter & Dart',
        'Cross-platform Development',
        'Native Performance'
      ]
    },
    {
      icon: 'fas fa-globe',
      title: 'Web Development',
      description: 'Company portfolio websites, real-time dashboards, and document systems using Flutter Web and modern stacks.',
      features: [
        'Flutter Web',
        'Responsive Design',
        'Real-time Dashboards'
      ]
    },
    {
      icon: 'fas fa-desktop',
      title: 'Desktop App Development',
      description: 'Tools like document management systems and productivity applications using Flutter Desktop.',
      features: [
        'Flutter Desktop',
        'Cross-platform Tools',
        'Document Management'
      ]
    },
    {
      icon: 'fas fa-gamepad',
      title: 'Interactive Learning Content',
      description: 'Creating gamified e-learning and course modules using Articulate Storyline for engaging user experiences.',
      features: [
        'Articulate Storyline',
        'Gamified Learning',
        'Interactive Modules'
      ]
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'UI/UX Design & Prototyping',
      description: 'Figma-based design workflows with responsive design focus and user-centered approach.',
      features: [
        'Figma Design',
        'Responsive Prototypes',
        'User Experience'
      ]
    },
    {
      icon: 'fas fa-plug',
      title: 'API Integration',
      description: 'RESTful APIs with clean architecture and Cubit/BLoC state management for scalable applications.',
      features: [
        'RESTful APIs',
        'Cubit/BLoC Architecture',
        'Clean Code Practices'
      ]
    }
  ];

  return (
    <section id="services" className="services page-section">
      <div className="container">
        <h2 className="section-title">Expertise & Services</h2>
        <p className="section-subtitle">Specialized development services I offer</p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
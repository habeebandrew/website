import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      icon: 'fas fa-bus',
      title: 'Cross-Border Bus Booking & Logistics System',
      description: 'Graduation Project (2025) - A comprehensive logistics solution between Syria and Jordan with separate apps for Customers, Drivers, Admins, and Employees. Features trip booking, shipping, validation, and dashboards.',
      tags: ['Flutter', 'REST APIs', 'Multi-platform', 'Logistics'],
      link: '/project-bus-booking'
    },
    {
      icon: 'fas fa-folder-open',
      title: 'Folderit – Document Management Web App',
      description: 'Responsive Flutter Web application for document uploads, file grouping, permission control, and version tracking with intuitive user interface.',
      tags: ['Flutter Web', 'Document Management', 'Responsive Design'],
      link: '/project-folderit'
    },
    {
      icon: 'fas fa-home',
      title: 'Real Estate Marketing App',
      description: 'Built with Flutter and REST APIs. Comprehensive platform offering property listing, buying, renting features, and admin dashboards for property management.',
      tags: ['Flutter', 'REST APIs', 'Real Estate', 'Admin Dashboard'],
      link: '/project-real-estate'
    },
    {
      icon: 'fas fa-dumbbell',
      title: 'Home Gym App',
      description: 'Comprehensive workout and nutrition application with trainer content, user posting features, and mobile-friendly UX for fitness enthusiasts.',
      tags: ['Flutter', 'Fitness', 'Mobile UX', 'Social Features'],
      link: '/project-home-gym',
      comingSoon: true
    },
    {
      icon: 'fas fa-palette',
      title: 'Mosaic Group Company Portfolio',
      description: 'Flutter portfolio application for Mosaic Group Company showcasing interior design, graphic design, landscaping, and painting services with responsive design and interactive galleries.',
      tags: ['Flutter', 'Portfolio', 'Multi-platform', 'Design Services'],
      link: '/project-mosaic-group'
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'E-Learning Courses and Interactive Games',
      description: 'Built with Articulate Storyline. Developed gamified courses and interactive modules focused on user engagement and performance tracking.',
      tags: ['Articulate Storyline', 'Gamification', 'E-Learning', 'Interactive Design'],
      link: '/project-elearning',
      comingSoon: true
    }
  ];

  const handleProjectClick = (link) => {
    // For now, we'll navigate to the HTML pages
    // You can later convert these to React components
    window.location.href = link.replace('/project-', 'project-') + '.html';
  };

  return (
    <section id="portfolio" className="portfolio page-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Featured projects showcasing my development expertise</p>
        
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-item">
              <div className="portfolio-image">
                <div className="placeholder-image">
                  <i className={project.icon}></i>
                </div>
              </div>
              <div className="portfolio-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="portfolio-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex}>{tag}</span>
                  ))}
                </div>
                <div className="portfolio-actions">
                  <button 
                    onClick={() => handleProjectClick(project.link)}
                    className="btn btn-primary project-btn"
                  >
                    <i className="fas fa-eye"></i>
                    Browse Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
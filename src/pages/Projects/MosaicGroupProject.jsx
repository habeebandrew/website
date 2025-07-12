import React from 'react';
import './Projects.css';

const MosaicGroupProject = () => {
  return (
    <section className="project-detail page-section">
      <div className="container">
        {/* Back Button */}
        <div className="back-navigation">
          <button 
            onClick={() => window.history.back()}
            className="btn btn-secondary"
          >
            <i className="fas fa-arrow-left"></i>
            Back to Projects
          </button>
        </div>

        {/* Project Header */}
        <div className="project-header">
          <div className="project-icon">
            <i className="fas fa-palette"></i>
          </div>
          <h1 className="project-title">Mosaic Group Company Portfolio</h1>
          <p className="project-subtitle">
            Flutter portfolio application showcasing exceptional interior design, graphic design, landscaping, and painting services
          </p>
          
          <div className="project-meta">
            <div className="meta-item">
              <i className="fas fa-code"></i>
              <span>Flutter</span>
            </div>
            <div className="meta-item">
              <i className="fas fa-mobile-alt"></i>
              <span>Multi-platform</span>
            </div>
            <div className="meta-item">
              <i className="fas fa-paint-brush"></i>
              <span>Design Portfolio</span>
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="project-content">
          <div className="content-section">
            <h2>Project Overview</h2>
            <p>
              Welcome to <strong>Mosaic Group's Flutter Portfolio Application</strong>! Founded by <strong>Engineer Elias Fayad</strong> and <strong>Graphic Designer Jan Karraz</strong>, Mosaic Group specializes in offering exceptional interior design, graphic design, landscaping, and painting services. This Flutter application serves as a digital portfolio and showcase, featuring a responsive design that adapts to desktop and mobile interfaces, providing an immersive experience to explore comprehensive design services.
            </p>
          </div>

          <div className="content-section">
            <h2>Company Services</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-home"></i>
                </div>
                <h3>Interior Decorations</h3>
                <p>Interior and exterior design services, gypsum design and installation, painting and decoration design, and custom design solutions for different spaces.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-pen-nib"></i>
                </div>
                <h3>Graphic Design</h3>
                <p>Brand identity design, creative visual designs, marketing materials, and digital and print design solutions.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-paint-roller"></i>
                </div>
                <h3>Paint Services</h3>
                <p>Interior and exterior painting, decorative painting techniques, color consultation, and surface preparation and finishing.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-tree"></i>
                </div>
                <h3>Landscaping Design</h3>
                <p>Green space design for homes, restaurants, resorts, and villas. Garden planning and layout, outdoor space optimization, and plant selection and arrangement.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-layer-group"></i>
                </div>
                <h3>Gypsum Board Design</h3>
                <p>Ceiling design and installation, wall partitions, decorative gypsum elements, and modern interior finishing.</p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Technology Stack</h2>
            <div className="tech-stack">
              <div className="tech-category">
                <h3>Frontend Framework</h3>
                <div className="tech-tags">
                  <span className="tech-tag">Flutter</span>
                  <span className="tech-tag">Dart</span>
                  <span className="tech-tag">Material Design</span>
                </div>
              </div>
              <div className="tech-category">
                <h3>Platform Support</h3>
                <div className="tech-tags">
                  <span className="tech-tag">Android</span>
                  <span className="tech-tag">iOS</span>
                  <span className="tech-tag">Web</span>
                  <span className="tech-tag">Windows</span>
                  <span className="tech-tag">macOS</span>
                  <span className="tech-tag">Linux</span>
                </div>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Project Impact</h2>
            <div className="impact-stats">
              <div className="stat-card">
                <div className="stat-number">6</div>
                <div className="stat-label">Platforms Supported</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">5</div>
                <div className="stat-label">Service Categories</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100%</div>
                <div className="stat-label">Responsive Design</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">2</div>
                <div className="stat-label">Company Founders</div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Actions */}
        <div className="project-actions">
          <button 
            onClick={() => window.history.back()}
            className="btn btn-secondary"
          >
            <i className="fas fa-arrow-left"></i>
            Back to Projects
          </button>
          <button 
            onClick={() => window.location.href = '/contact'}
            className="btn btn-primary"
          >
            <i className="fas fa-envelope"></i>
            Discuss This Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default MosaicGroupProject;
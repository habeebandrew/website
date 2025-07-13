import React from 'react';
import './Projects.css';

function ProjectMosaicGroup() {
  return (
    <section className="project-detail page-section">
      <div className="container">
        <div className="back-navigation">
          <a href="projects.html" className="btn btn-secondary">
            <i className="fas fa-arrow-left"></i>
            Back to Projects
          </a>
        </div>
        <div className="project-header">
          <div className="project-icon">
            <i className="fas fa-palette"></i>
          </div>
          <h1 className="project-title">Mosaic Group Company Portfolio</h1>
          <p className="project-subtitle">Flutter portfolio application showcasing exceptional interior design, graphic design, landscaping, and painting services</p>
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
        <div className="project-content">
          <div className="content-section">
            <h2>Project Overview</h2>
            <p>Welcome to <strong>Mosaic Group's Flutter Portfolio Application</strong>! Founded by <strong>Engineer Elias Fayad</strong> and <strong>Graphic Designer Jan Karraz</strong>, Mosaic Group specializes in offering exceptional interior design, graphic design, landscaping, and painting services. This Flutter application serves as a digital portfolio and showcase, featuring a responsive design that adapts to desktop and mobile interfaces, providing an immersive experience to explore comprehensive design services.</p>
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
            <h2>Application Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-images"></i>
                </div>
                <h3>Interactive Portfolio Showcase</h3>
                <p>Responsive design optimized for both desktop and mobile devices with adaptive UI that adjusts based on screen size.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-sliders-h"></i>
                </div>
                <h3>Carousel Slider</h3>
                <p>Dynamic image galleries for each service category with auto-scrolling images and manual navigation controls.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-expand"></i>
                </div>
                <h3>Image Preview</h3>
                <p>Full-screen image viewing with swipe navigation and interactive animations and scaling effects.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-mouse-pointer"></i>
                </div>
                <h3>Interactive UI</h3>
                <p>Hover effects, smooth scrolling navigation between sections, and seamless user experience across all platforms.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <h3>Contact Integration</h3>
                <p>Direct communication with one-click phone calls and email, social media links for Instagram and Telegram integration.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-heart"></i>
                </div>
                <h3>Animated Elements</h3>
                <p>Responsive contact section adapted for different screen sizes with animated contact icons and pulsing animations for better user engagement.</p>
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
                <h3>UI Components</h3>
                <div className="tech-tags">
                  <span className="tech-tag">Cupertino Icons</span>
                  <span className="tech-tag">Carousel Slider</span>
                  <span className="tech-tag">Smooth Page Indicator</span>
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
              <div className="tech-category">
                <h3>Development Features</h3>
                <div className="tech-tags">
                  <span className="tech-tag">Responsive Design</span>
                  <span className="tech-tag">Custom Theme</span>
                  <span className="tech-tag">Modular Architecture</span>
                  <span className="tech-tag">Performance Optimized</span>
                </div>
              </div>
            </div>
          </div>
          <div className="content-section">
            <h2>Platform Capabilities</h2>
            <div className="user-types">
              <div className="user-type">
                <div className="user-icon">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <h3>Mobile Applications</h3>
                <p>Native performance on Android and iOS devices with touch-optimized interface and mobile-specific features.</p>
              </div>
              <div className="user-type">
                <div className="user-icon">
                  <i className="fas fa-desktop"></i>
                </div>
                <h3>Desktop Applications</h3>
                <p>Full desktop support for Windows, macOS, and Linux with adaptive layouts for larger screens and desktop interactions.</p>
              </div>
              <div className="user-type">
                <div className="user-icon">
                  <i className="fas fa-globe"></i>
                </div>
                <h3>Web Application</h3>
                <p>Progressive Web App support with responsive design that works seamlessly across all modern web browsers.</p>
              </div>
              <div className="user-type">
                <div className="user-icon">
                  <i className="fas fa-sync-alt"></i>
                </div>
                <h3>Cross-Platform Sync</h3>
                <p>Consistent experience across all platforms with synchronized content and unified design language.</p>
              </div>
            </div>
          </div>
          <div className="content-section">
            <h2>Key Development Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-expand-arrows-alt"></i>
                </div>
                <h3>Responsive Design System</h3>
                <p>Adaptive layouts for different screen sizes ensuring optimal viewing experience on any device.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-palette"></i>
                </div>
                <h3>Custom Theme</h3>
                <p>Consistent color scheme and styling throughout the application with brand-aligned visual identity.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-cubes"></i>
                </div>
                <h3>Modular Architecture</h3>
                <p>Organized widget structure for maintainability and scalability with clean code organization.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-tachometer-alt"></i>
                </div>
                <h3>Performance Optimized</h3>
                <p>Efficient image loading and smooth animations for optimal user experience across all platforms.</p>
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
          <div className="content-section">
            <h2>Technical Highlights</h2>
            <div className="user-types">
              <div className="user-type">
                <div className="user-icon">
                  <i className="fas fa-code"></i>
                </div>
                <h3>Cross-Platform Development</h3>
                <p>Single codebase deployed across mobile, desktop, and web platforms using Flutter's powerful framework.</p>
              </div>
              <div className="user-type">
                <div className="user-icon">
                  <i className="fas fa-images"></i>
                </div>
                <h3>Interactive Image Galleries</h3>
                <p>Advanced carousel implementation with auto-scroll, manual navigation, and full-screen preview capabilities.</p>
              </div>
              <div className="user-type">
                <div className="user-icon">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <h3>Adaptive UI Design</h3>
                <p>Dynamic layout system that automatically adjusts to different screen sizes and orientations.</p>
              </div>
              <div className="user-type">
                <div className="user-icon">
                  <i className="fas fa-link"></i>
                </div>
                <h3>Social Integration</h3>
                <p>Seamless integration with social media platforms and direct communication channels for enhanced user engagement.</p>
              </div>
            </div>
          </div>
          <div className="content-section">
            <h2>Company Information</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-user-tie"></i>
                </div>
                <h3>Engineer Elias Fayad</h3>
                <p>Co-founder specializing in engineering solutions and technical implementation for interior and exterior design projects.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-paint-brush"></i>
                </div>
                <h3>Graphic Designer Jan Karraz</h3>
                <p>Co-founder bringing creative vision and graphic design expertise to brand identity and visual design solutions.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-bullseye"></i>
                </div>
                <h3>Company Mission</h3>
                <p>Providing innovative, custom, and high-quality solutions that make living spaces and designs stand out with exceptional service.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-star"></i>
                </div>
                <h3>Quality Focus</h3>
                <p>Commitment to delivering exceptional results through innovative design solutions and customer-focused service approach.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="project-actions">
          <a href="projects.html" className="btn btn-secondary">
            <i className="fas fa-arrow-left"></i>
            Back to Projects
          </a>
          <a href="contact.html" className="btn btn-primary">
            <i className="fas fa-envelope"></i>
            Discuss This Project
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectMosaicGroup;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Projects.css';
import './Gallery.css';

function ProjectBusBooking() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  
  const openImageModal = (imageSrc, alt) => {
    setSelectedImage({ src: imageSrc, alt });
  };
  
  const closeImageModal = () => {
    setSelectedImage(null);
  };
  
  return (
    <section className="project-detail page-section">
      <div className="container">
        <div className="back-navigation">
          <Link to="/projects" className="btn btn-secondary">
            <i className="fas fa-arrow-left"></i>
            Back to Projects
          </Link>
        </div>
        <div className="project-header">
          <div className="project-icon">
            <i className="fas fa-bus"></i>
          </div>
          <h1 className="project-title">Cross-Border Bus Booking & Logistics System</h1>
          <p className="project-subtitle">Graduation Project (2025) - Comprehensive logistics solution between Syria and Jordan</p>
          <div className="project-meta">
            <div className="meta-item">
              <i className="fas fa-calendar"></i>
              <span>2025</span>
            </div>
            <div className="meta-item">
              <i className="fas fa-code"></i>
              <span>Flutter</span>
            </div>
            <div className="meta-item">
              <i className="fas fa-users"></i>
              <span>Multi-platform</span>
            </div>
          </div>
        </div>
        <div className="project-content">
          <div className="content-section">
            <h2>Project Gallery</h2>
            <div className="project-gallery">
              <div className="gallery-grid">
                <div className="gallery-item main-image">
                  <img src="/trasport (1).jpg" alt="Bus Booking Main Dashboard" loading="lazy" />
                  <div className="image-overlay">
                    <h3>🚌 Main Dashboard</h3>
                    <p>Comprehensive booking interface with route management and real-time tracking</p>
                  </div>
                </div>
                <div className="gallery-item">
                  <img src="/trasport (2).jpg" alt="Trip Booking Interface" loading="lazy" />
                  <div className="image-overlay">
                    <h3>🎫 Trip Booking</h3>
                    <p>Easy seat selection and reservation system</p>
                  </div>
                </div>
                <div className="gallery-item">
                  <img src="/trasport (5).jpg" alt="Route Management System" loading="lazy" />
                  <div className="image-overlay">
                    <h3>🗺️ Route Management</h3>
                    <p>Cross-border route planning and optimization</p>
                  </div>
                </div>
                <div className="gallery-item">
                  <img src="/trasport (8).jpg" alt="Driver Application Interface" loading="lazy" />
                  <div className="image-overlay">
                    <h3>👨‍✈️ Driver App</h3>
                    <p>Specialized interface for drivers and logistics</p>
                  </div>
                </div>
                <div className="gallery-item">
                  <img src="/trasport (6).jpg" alt="Customer Management Portal" loading="lazy" />
                  <div className="image-overlay">
                    <h3>👥 Customer Portal</h3>
                    <p>User-friendly booking and management interface</p>
                  </div>
                </div>
                <div className="gallery-item">
                  <img src="/trasport (12).jpg" alt="Admin Analytics Dashboard" loading="lazy" />
                  <div className="image-overlay">
                    <h3>📊 Analytics Dashboard</h3>
                    <p>Comprehensive reporting and business intelligence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-section">
            <h2>Project Overview</h2>
            <p>This comprehensive logistics solution facilitates cross-border transportation between Syria and Jordan. The system includes separate applications for different user types: Customers, Drivers, Admins, and Employees, each with tailored functionality to streamline the booking and logistics process.</p>
          </div>
          
          {/* Company Recognition Section */}
          <div className="content-section recognition-section">
            <h2>🏆 Company Recognition</h2>
            <div className="recognition-card">
              <div className="recognition-content">
                <div className="recognition-image" onClick={() => openImageModal('/thanksfromalkamal.jpg', 'Al-Kamal International Company Official Appreciation Letter')}>
                  <img src="/thanksfromalkamal.jpg" alt="Al-Kamal International Company Appreciation Letter" />
                  <div className="image-overlay">
                    <i className="fas fa-expand-arrows-alt"></i>
                    <span>Click to view full letter</span>
                  </div>
                </div>
                <div className="recognition-text">
                  <h3>{t('testimonials.alkamal.author')}</h3>
                  <p className="recognition-title">{t('testimonials.alkamal.position')}</p>
                  <blockquote>
                    "{t('testimonials.alkamal.content')}"
                  </blockquote>
                  <div className="recognition-badge">
                    <i className="fas fa-award"></i>
                    <span>Official Client Recognition</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-section">
            <h2>Key Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-ticket-alt"></i>
                </div>
                <h3>Trip Booking</h3>
                <p>Easy-to-use booking system for customers to reserve seats and manage their travel plans.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-shipping-fast"></i>
                </div>
                <h3>Shipping Management</h3>
                <p>Comprehensive shipping and cargo management system for cross-border logistics.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <h3>Validation System</h3>
                <p>Robust validation and verification system for secure cross-border operations.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-chart-bar"></i>
                </div>
                <h3>Admin Dashboard</h3>
                <p>Comprehensive dashboard for administrators to monitor and manage all operations.</p>
              </div>
            </div>
          </div>
          <div className="content-section">
            <h2>Technology Stack</h2>
            <div className="tech-stack">
              <div className="tech-category">
                <h3>Frontend</h3>
                <div className="tech-tags">
                  <span className="tech-tag">Flutter</span>
                  <span className="tech-tag">Dart</span>
                  <span className="tech-tag">Material Design</span>
                </div>
              </div>
              <div className="tech-category">
                <h3>Backend</h3>
                <div className="tech-tags">
                  <span className="tech-tag">REST APIs</span>
                  <span className="tech-tag">Authentication</span>
                  <span className="tech-tag">Database Integration</span>
                </div>
              </div>
              <div className="tech-category">
                <h3>Features</h3>
                <div className="tech-tags">
                  <span className="tech-tag">Multi-platform</span>
                  <span className="tech-tag">Real-time Updates</span>
                  <span className="tech-tag">Cross-border Logistics</span>
                </div>
              </div>
            </div>
          </div>
          <div className="content-section">
            <h2>User Types & Applications</h2>
            <div className="user-types">
              <div className="user-type">
                <div className="user-icon">
                  <i className="fas fa-user"></i>
                </div>
                <h3>Customer App</h3>
                <p>Intuitive interface for booking trips, managing reservations, and tracking shipments.</p>
              </div>
              <div className="user-type">
                <div className="user-icon">
                  <i className="fas fa-truck"></i>
                </div>
                <h3>Driver App</h3>
                <p>Specialized tools for drivers to manage routes, schedules, and cargo information.</p>
              </div>
              <div className="user-type">
                <div className="user-icon">
                  <i className="fas fa-user-shield"></i>
                </div>
                <h3>Admin Panel</h3>
                <p>Comprehensive management system for overseeing all operations and analytics.</p>
              </div>
              <div className="user-type">
                <div className="user-icon">
                  <i className="fas fa-users-cog"></i>
                </div>
                <h3>Employee Portal</h3>
                <p>Dedicated interface for staff to handle customer service and operational tasks.</p>
              </div>
            </div>
          </div>
          <div className="content-section">
            <h2>Cross-Border Logistics Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-passport"></i>
                </div>
                <h3>Document Verification</h3>
                <p>Automated passport and visa verification system for seamless border crossing.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-route"></i>
                </div>
                <h3>Route Optimization</h3>
                <p>AI-powered route planning considering border wait times and traffic conditions.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <h3>Real-time Tracking</h3>
                <p>Live GPS tracking with estimated arrival times and delay notifications.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3>Security Protocols</h3>
                <p>Enhanced security measures for passenger and cargo safety during transit.</p>
              </div>
            </div>
          </div>
          <div className="content-section">
            <h2>Project Impact</h2>
            <div className="impact-stats">
              <div className="stat-card">
                <div className="stat-number">4</div>
                <div className="stat-label">Different Apps</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">2</div>
                <div className="stat-label">Countries Connected</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100%</div>
                <div className="stat-label">Cross-platform</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support System</div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-actions">
          <Link to="/projects" className="btn btn-secondary">
            <i className="fas fa-arrow-left"></i>
            Back to Projects
          </Link>
          <a
            href="https://apkpure.com/group/com.transport.transporter_customer"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-external-link-alt"></i>
            APKPure Link
          </a>
          <Link to="/contact" className="btn btn-primary">
            <i className="fas fa-envelope"></i>
            Discuss This Project
          </Link>
        </div>
      </div>
      
      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={closeImageModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeImageModal}>
              <i className="fas fa-times"></i>
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <div className="modal-caption">
              <p>{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProjectBusBooking;
import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

function ProjectBusBooking() {
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
            <h2>Project Overview</h2>
            <p>This comprehensive logistics solution facilitates cross-border transportation between Syria and Jordan. The system includes separate applications for different user types: Customers, Drivers, Admins, and Employees, each with tailored functionality to streamline the booking and logistics process.</p>
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
            </div>
          </div>
        </div>
        <div className="project-actions">
          <Link to="/projects" className="btn btn-secondary">
            <i className="fas fa-arrow-left"></i>
            Back to Projects
          </Link>
          <Link to="/contact" className="btn btn-primary">
            <i className="fas fa-envelope"></i>
            Discuss This Project
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectBusBooking;
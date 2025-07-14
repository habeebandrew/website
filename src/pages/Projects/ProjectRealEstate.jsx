import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

function ProjectRealEstate() {
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
            <i className="fas fa-home"></i>
          </div>
          <h1 className="project-title">Capital Estate - Real Estate Marketing App</h1>
          <p className="project-subtitle">Comprehensive platform offering property listing, buying, renting features, and admin dashboards for property management</p>
          <div className="project-meta">
            <div className="meta-item">
              <i className="fas fa-code"></i>
              <span>Flutter</span>
            </div>
            <div className="meta-item">
              <i className="fas fa-server"></i>
              <span>REST APIs</span>
            </div>
            <div className="meta-item">
              <i className="fas fa-chart-bar"></i>
              <span>Admin Dashboard</span>
            </div>
          </div>
        </div>
        <div className="project-content">
          <div className="content-section">
            <h2>Project Overview</h2>
            <p>Capital Estate is a comprehensive real estate marketing application designed to revolutionize the property market experience. The platform serves buyers, sellers, and real estate agents by providing a seamless, efficient, and user-friendly environment for property transactions. Built with Flutter and integrated with REST APIs, the application offers advanced search capabilities, detailed property information, and robust administrative features.</p>
          </div>
          <div className="content-section">
            <h2>Project Goals</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-search"></i>
                </div>
                <h3>Streamlined Search & Browsing</h3>
                <p>Provide a smooth and comfortable search experience for buyers and sellers to find suitable properties quickly through various criteria and filters.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-info-circle"></i>
                </div>
                <h3>Accurate & Comprehensive Information</h3>
                <p>Deliver precise and detailed information about available properties and real estate agents, including technical details, images, and location data.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-user-friends"></i>
                </div>
                <h3>Exceptional User Experience</h3>
                <p>Provide a comfortable and enjoyable user experience through an easy-to-use interface and attractive design for seamless browsing.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <h3>Time & Effort Savings</h3>
                <p>Help buyers, sellers, and real estate agents save time and effort by providing quick access to information and faster transaction processing.</p>
              </div>
            </div>
          </div>
          <div className="content-section">
            <h2>Core Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-user-plus"></i>
                </div>
                <h3>User Registration & Management</h3>
                <p>Complete registration system for users, real estate agents, and admins with profile management capabilities.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-building"></i>
                </div>
                <h3>Property Listings Management</h3>
                <p>Add, edit, and delete property listings for both sale and rental with comprehensive property details.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-heart"></i>
                </div>
                <h3>Favorites & Wishlist</h3>
                <p>Save properties to personal favorites list for easy access and comparison.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-share-alt"></i>
                </div>
                <h3>Social Features & Posts</h3>
                <p>Create, edit, and delete posts with commenting system for real estate agents to engage with users.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-search-plus"></i>
                </div>
                <h3>Advanced Search</h3>
                <p>Sophisticated search functionality with multiple criteria and filters for precise property discovery.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-star"></i>
                </div>
                <h3>Agent Rating & Reviews</h3>
                <p>Rate and review real estate agents with reporting system for quality assurance.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-map-marked-alt"></i>
                </div>
                <h3>Google Maps Integration</h3>
                <p>Interactive maps for property location visualization and navigation assistance.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-credit-card"></i>
                </div>
                <h3>Payment & Subscription</h3>
                <p>Integrated payment system for agent subscriptions with detailed subscription management.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-bell"></i>
                </div>
                <h3>Push Notifications</h3>
                <p>Real-time notifications for users and agents about property updates and activities.</p>
              </div>
            </div>
          </div>
          <div className="content-section">
            <h2>User Types & Roles</h2>
            <div className="user-types">
              <div className="user-type">
                <div className="user-icon">
                  <i className="fas fa-user"></i>
                </div>
                <h3>Regular Users</h3>
                <p>Browse properties, save favorites, create posts, rate agents, and access all search features with full account management.</p>
              </div>
              <div className="user-type">
                <div className="user-icon">
                  <i className="fas fa-user-tie"></i>
                </div>
                <h3>Real Estate Agents</h3>
                <p>Manage property listings, create promotional posts, comment on content, handle subscriptions, and maintain professional profiles.</p>
              </div>
              <div className="user-type">
                <div className="user-icon">
                  <i className="fas fa-user-shield"></i>
                </div>
                <h3>System Administrators</h3>
                <p>Full system control including user management, content moderation, handling complaints, and system analytics.</p>
              </div>
              <div className="user-type">
                <div className="user-icon">
                  <i className="fas fa-eye"></i>
                </div>
                <h3>Visitors</h3>
                <p>Browse and view properties without registration, with limited access to basic information and search features.</p>
              </div>
            </div>
          </div>
          <div className="content-section">
            <h2>Technical Features</h2>
            <div className="tech-stack">
              <div className="tech-category">
                <h3>Core Technology</h3>
                <div className="tech-tags">
                  <span className="tech-tag">Flutter</span>
                  <span className="tech-tag">Dart</span>
                  <span className="tech-tag">REST APIs</span>
                </div>
              </div>
              <div className="tech-category">
                <h3>Platform Compatibility</h3>
                <div className="tech-tags">
                  <span className="tech-tag">iOS</span>
                  <span className="tech-tag">Android</span>
                  <span className="tech-tag">Cross-platform</span>
                </div>
              </div>
              <div className="tech-category">
                <h3>Integration Services</h3>
                <div className="tech-tags">
                  <span className="tech-tag">Google Maps</span>
                  <span className="tech-tag">Payment Gateway</span>
                  <span className="tech-tag">Push Notifications</span>
                </div>
              </div>
              <div className="tech-category">
                <h3>Security & Performance</h3>
                <div className="tech-tags">
                  <span className="tech-tag">Data Encryption</span>
                  <span className="tech-tag">User Authentication</span>
                  <span className="tech-tag">Scalable Architecture</span>
                </div>
              </div>
            </div>
          </div>
          <div className="content-section">
            <h2>Non-Functional Requirements</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <h3>Cross-Platform Compatibility</h3>
                <p>Compatible with various operating systems and devices including smartphones and tablets.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-hand-pointer"></i>
                </div>
                <h3>User-Friendly Interface</h3>
                <p>Simple and intuitive design for easy navigation and information access for all user types.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-language"></i>
                </div>
                <h3>Multi-Language Support</h3>
                <p>Support for multiple languages to ensure accessibility for users from different cultures and backgrounds.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-comments"></i>
                </div>
                <h3>Direct Communication</h3>
                <p>Direct communication channels between buyers, sellers, and real estate agents including phone call features.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-expand-arrows-alt"></i>
                </div>
                <h3>Scalability</h3>
                <p>Future-ready architecture to handle increased data volume and user growth without performance impact.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3>Security & Privacy</h3>
                <p>Robust protection of user data and sensitive information related to properties and personal accounts.</p>
              </div>
            </div>
          </div>
          <div className="content-section">
            <h2>Administrative Features</h2>
            <div className="user-types">
              <div className="user-type">
                <div className="user-icon">
                  <i className="fas fa-ban"></i>
                </div>
                <h3>User Management</h3>
                <p>Block user accounts and delete all their activities with comprehensive user oversight capabilities.</p>
              </div>
              <div className="user-type">
                <div className="user-icon">
                  <i className="fas fa-headset"></i>
                </div>
                <h3>Support System</h3>
                <p>Handle requests, complaints, suggestions, and inquiries with dedicated response and resolution system.</p>
              </div>
              <div className="user-type">
                <div className="user-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3>Analytics Dashboard</h3>
                <p>Comprehensive analytics and reporting tools for monitoring system performance and user engagement.</p>
              </div>
              <div className="user-type">
                <div className="user-icon">
                  <i className="fas fa-cogs"></i>
                </div>
                <h3>System Configuration</h3>
                <p>Advanced system settings and configuration options for optimal platform management and customization.</p>
              </div>
            </div>
          </div>
          <div className="content-section">
            <h2>Project Impact</h2>
            <div className="impact-stats">
              <div className="stat-card">
                <div className="stat-number">4</div>
                <div className="stat-label">User Types</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">20+</div>
                <div className="stat-label">Core Features</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100%</div>
                <div className="stat-label">Cross-Platform</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">3</div>
                <div className="stat-label">Integration Services</div>
              </div>
            </div>
          </div>
          <div className="content-section">
            <h2>Special Features</h2>
            <div className="user-types">
              <div className="user-type">
                <div className="user-icon">
                  <i className="fas fa-share"></i>
                </div>
                <h3>Sharing Time Feature</h3>
                <p>Unique "sharing time" functionality that allows users to share property viewing schedules and coordinate visits.</p>
              </div>
              <div className="user-type">
                <div className="user-icon">
                  <i className="fas fa-file-contract"></i>
                </div>
                <h3>Subscription Management</h3>
                <p>Comprehensive subscription system for real estate agents with payment processing and detailed subscription tracking.</p>
              </div>
              <div className="user-type">
                <div className="user-icon">
                  <i className="fas fa-users-cog"></i>
                </div>
                <h3>Agent Discovery</h3>
                <p>Advanced search functionality for users and system managers to find and connect with real estate agents.</p>
              </div>
              <div className="user-type">
                <div className="user-icon">
                  <i className="fas fa-plug"></i>
                </div>
                <h3>System Integration</h3>
                <p>Seamless integration with external systems including online payment platforms, mapping services, and more.</p>
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

export default ProjectRealEstate;
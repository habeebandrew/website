import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import './Gallery.css';

function ProjectFolderit() {
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
            <i className="fas fa-folder-open"></i>
          </div>
          <h1 className="project-title">Folderit – Document Management Web App</h1>
          <p className="project-subtitle">Flutter-based application designed to streamline file management and enhance collaboration within groups</p>
          <div className="project-meta">
            <div className="meta-item">
              <i className="fas fa-code"></i>
              <span>Flutter Web</span>
            </div>
            <div className="meta-item">
              <i className="fas fa-users"></i>
              <span>Group Collaboration</span>
            </div>
            <div className="meta-item">
              <i className="fas fa-globe"></i>
              <span>Multi-language</span>
            </div>
          </div>
        </div>
        <div className="project-content">
          <div className="content-section">
            <h2>Project Gallery</h2>
            <div className="project-gallery">
              <div className="gallery-grid">
                <div className="gallery-item main-image">
                  <img src="/folderit (3).jpg" alt="Folderit Main Dashboard" loading="lazy" />
                  <div className="image-overlay">
                    <h3>📁 Main Dashboard</h3>
                    <p>Comprehensive file management interface with advanced organization tools</p>
                  </div>
                </div>
                <div className="gallery-item">
                  <img src="/folderit (4).jpg" alt="File Upload Interface" loading="lazy" />
                  <div className="image-overlay">
                    <h3>📤 File Upload</h3>
                    <p>Drag & drop file upload with multi-format support</p>
                  </div>
                </div>
                <div className="gallery-item">
                  <img src="/folderit (2).jpg" alt="Group Collaboration Portal" loading="lazy" />
                  <div className="image-overlay">
                    <h3>👥 Group Collaboration</h3>
                    <p>Team workspace with role-based permissions</p>
                  </div>
                </div>
                <div className="gallery-item">
                  <img src="/folderit (5).jpg" alt="Task Management System" loading="lazy" />
                  <div className="image-overlay">
                    <h3>✅ Task Management</h3>
                    <p>Assign and track tasks within project groups</p>
                  </div>
                </div>
                <div className="gallery-item">
                  <img src="/folderit (8).jpg" alt="User Authentication" loading="lazy" />
                  <div className="image-overlay">
                    <h3>🔐 User Authentication</h3>
                    <p>Secure login and user management system</p>
                  </div>
                </div>
                <div className="gallery-item">
                  <img src="/folderit (1).jpg" alt="Admin Control Panel" loading="lazy" />
                  <div className="image-overlay">
                    <h3>⚙️ Admin Panel</h3>
                    <p>Comprehensive administrative controls and analytics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-section">
            <h2>Project Overview</h2>
            <p>Folder IT is a Flutter-based application designed to streamline file management and enhance collaboration within groups. It provides a user-friendly interface for organizing, sharing, and managing files, along with features for group creation, member invitation, and task assignment. With support for multiple languages and customizable themes, Folder IT offers a personalized and efficient file management experience.</p>
          </div>
          <div className="content-section">
            <h2>Key Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-file-alt"></i>
                </div>
                <h3>File Management</h3>
                <p>Securely upload, store, and organize your files with ease. Advanced file organization system with folder structures.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h3>Group Collaboration</h3>
                <p>Create and manage groups, invite members, assign roles, and foster seamless teamwork across projects.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3>User Authentication</h3>
                <p>Secure login and signup functionality to protect your data and ensure authorized access to files.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-tasks"></i>
                </div>
                <h3>Task Management</h3>
                <p>Assign and track tasks within groups to enhance productivity and accountability across team members.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-language"></i>
                </div>
                <h3>Localization</h3>
                <p>Supports multiple languages (English and Arabic) for a global user base with seamless language switching.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-user-shield"></i>
                </div>
                <h3>Admin Panel</h3>
                <p>Dedicated features for administrators to efficiently manage users and files with comprehensive controls.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-share-alt"></i>
                </div>
                <h3>File Sharing</h3>
                <p>Share files seamlessly within groups, ensuring everyone has access to the necessary resources and documents.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-history"></i>
                </div>
                <h3>User Logs</h3>
                <p>Track user activity to maintain transparency and monitor application usage with detailed activity logs.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-palette"></i>
                </div>
                <h3>Customizable Themes</h3>
                <p>Switch between light and dark themes to personalize your experience and reduce eye strain.</p>
              </div>
            </div>
          </div>
          <div className="content-section">
            <h2>Technology Stack</h2>
            <div className="tech-stack">
              <div className="tech-category">
                <h3>Core Framework</h3>
                <div className="tech-tags">
                  <span className="tech-tag">Flutter</span>
                  <span className="tech-tag">Dart</span>
                  <span className="tech-tag">Flutter Web</span>
                </div>
              </div>
              <div className="tech-category">
                <h3>State Management & Navigation</h3>
                <div className="tech-tags">
                  <span className="tech-tag">flutter_bloc</span>
                  <span className="tech-tag">go_router</span>
                  <span className="tech-tag">get_it</span>
                </div>
              </div>
              <div className="tech-category">
                <h3>Networking & Storage</h3>
                <div className="tech-tags">
                  <span className="tech-tag">http</span>
                  <span className="tech-tag">shared_preferences</span>
                  <span className="tech-tag">connectivity_plus</span>
                </div>
              </div>
              <div className="tech-category">
                <h3>File Handling</h3>
                <div className="tech-tags">
                  <span className="tech-tag">image_picker</span>
                  <span className="tech-tag">flutter_dropzone</span>
                  <span className="tech-tag">pdf</span>
                  <span className="tech-tag">csv</span>
                </div>
              </div>
              <div className="tech-category">
                <h3>UI & Media</h3>
                <div className="tech-tags">
                  <span className="tech-tag">flutter_svg</span>
                  <span className="tech-tag">Material Design</span>
                  <span className="tech-tag">Responsive Design</span>
                </div>
              </div>
              <div className="tech-category">
                <h3>Utilities</h3>
                <div className="tech-tags">
                  <span className="tech-tag">permission_handler</span>
                  <span className="tech-tag">intl</span>
                  <span className="tech-tag">Localization</span>
                </div>
              </div>
            </div>
          </div>
          <div className="content-section">
            <h2>Core Functionalities</h2>
            <div className="user-types">
              <div className="user-type">
                <div className="user-icon">
                  <i className="fas fa-cloud-upload-alt"></i>
                </div>
                <h3>File Upload & Storage</h3>
                <p>Drag and drop file uploads with support for multiple file formats including images, PDFs, and CSV files.</p>
              </div>
              <div className="user-type">
                <div className="user-icon">
                  <i className="fas fa-sitemap"></i>
                </div>
                <h3>Permission Control</h3>
                <p>Granular permission system allowing administrators to control access levels and file sharing permissions.</p>
              </div>
              <div className="user-type">
                <div className="user-icon">
                  <i className="fas fa-code-branch"></i>
                </div>
                <h3>Version Tracking</h3>
                <p>Comprehensive version control system to track file changes and maintain document history.</p>
              </div>
              <div className="user-type">
                <div className="user-icon">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <h3>Responsive Interface</h3>
                <p>Intuitive user interface that works seamlessly across desktop and mobile devices with Flutter Web.</p>
              </div>
            </div>
          </div>
          <div className="content-section">
            <h2>User Experience Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-moon"></i>
                </div>
                <h3>Dark/Light Theme</h3>
                <p>Toggle between dark and light themes for comfortable viewing in any lighting condition.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-globe-americas"></i>
                </div>
                <h3>Multi-language Support</h3>
                <p>Full internationalization with English and Arabic language support for global accessibility.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-search"></i>
                </div>
                <h3>Advanced Search</h3>
                <p>Powerful search functionality to quickly locate files and documents across all folders and groups.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-bell"></i>
                </div>
                <h3>Real-time Notifications</h3>
                <p>Stay updated with real-time notifications for file changes, task assignments, and group activities.</p>
              </div>
            </div>
          </div>
          <div className="content-section">
            <h2>Advanced File Management</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-folder-tree"></i>
                </div>
                <h3>Hierarchical Organization</h3>
                <p>Create nested folder structures with unlimited depth for optimal file organization.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-tags"></i>
                </div>
                <h3>Smart Tagging</h3>
                <p>Tag files with custom labels for easy categorization and quick retrieval.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-history"></i>
                </div>
                <h3>Version History</h3>
                <p>Track all file modifications with complete version history and rollback capabilities.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-compress-alt"></i>
                </div>
                <h3>File Compression</h3>
                <p>Automatic file compression to optimize storage space without compromising quality.</p>
              </div>
            </div>
          </div>
          <div className="content-section">
            <h2>Project Impact</h2>
            <div className="impact-stats">
              <div className="stat-card">
                <div className="stat-number">9+</div>
                <div className="stat-label">Core Features</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">15+</div>
                <div className="stat-label">Flutter Packages</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">2</div>
                <div className="stat-label">Languages Supported</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100%</div>
                <div className="stat-label">Responsive Design</div>
              </div>
            </div>
          </div>
          <div className="content-section">
            <h2>Technical Highlights</h2>
            <div className="user-types">
              <div className="user-type">
                <div className="user-icon">
                  <i className="fas fa-cubes"></i>
                </div>
                <h3>BLoC Architecture</h3>
                <p>Implemented using flutter_bloc for predictable state management and clean separation of concerns.</p>
              </div>
              <div className="user-type">
                <div className="user-icon">
                  <i className="fas fa-route"></i>
                </div>
                <h3>Advanced Routing</h3>
                <p>Utilizes go_router for declarative routing with support for nested routes and navigation guards.</p>
              </div>
              <div className="user-type">
                <div className="user-icon">
                  <i className="fas fa-plug"></i>
                </div>
                <h3>Dependency Injection</h3>
                <p>Clean architecture with get_it service locator for efficient dependency management.</p>
              </div>
              <div className="user-type">
                <div className="user-icon">
                  <i className="fas fa-database"></i>
                </div>
                <h3>Local Storage</h3>
                <p>Efficient local data persistence using shared_preferences for user settings and cache.</p>
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
            href="https://github.com/habeebandrew/folder_it"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-code-branch"></i>
            View Code on GitHub
          </a>
          <Link to="/contact" className="btn btn-primary">
            <i className="fas fa-envelope"></i>
            Discuss This Project
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectFolderit;
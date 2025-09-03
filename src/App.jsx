import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { initGA, trackPageView, trackScrollDepth, trackTimeOnPage, trackEngagement, enableAnalyticsDebug } from './utils/analytics';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import './App.css';

// Lazy load components for better performance
const About = React.lazy(() => import('./pages/About/About'));
const Services = React.lazy(() => import('./pages/Services/Services'));
const Projects = React.lazy(() => import('./pages/Projects/Projects'));
const Testimonials = React.lazy(() => import('./pages/Testimonials/Testimonials'));
const Contact = React.lazy(() => import('./pages/Contact/Contact'));
const Blog = React.lazy(() => import('./pages/Blog/Blog'));
const ProjectFolderit = React.lazy(() => import('./pages/Projects/ProjectFolderit'));
const ProjectBusBooking = React.lazy(() => import('./pages/Projects/ProjectBusBooking'));
const ProjectMosaicGroup = React.lazy(() => import('./pages/Projects/ProjectMosaicGroup'));
const ProjectRealEstate = React.lazy(() => import('./pages/Projects/ProjectRealEstate'));

// Analytics wrapper component
const AnalyticsWrapper = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics (replace with your actual measurement ID)
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';
    initGA(measurementId);
    
    // Enable debug mode in development
    if (import.meta.env.DEV) {
      enableAnalyticsDebug();
    }
  }, []);

  useEffect(() => {
    // Track page views
    trackPageView(location.pathname, document.title);
    
    // Set up scroll tracking
    const cleanupScroll = trackScrollDepth();
    
    // Set up time tracking
    const cleanupTime = trackTimeOnPage();
    
    // Set up engagement tracking
    const cleanupEngagement = trackEngagement();
    
    // Cleanup function
    return () => {
      cleanupScroll && cleanupScroll();
      cleanupTime && cleanupTime();
      cleanupEngagement && cleanupEngagement();
    };
  }, [location]);

  return children;
};

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <AnalyticsWrapper>
          <div className="App">
            <Navigation />
            <main>
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/testimonials" element={<Testimonials />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/project-folderit" element={<ProjectFolderit />} />
                  <Route path="/project-bus-booking" element={<ProjectBusBooking />} />
                  <Route path="/project-mosaic-group" element={<ProjectMosaicGroup />} />
                  <Route path="/project-real-estate" element={<ProjectRealEstate />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </AnalyticsWrapper>
      </Router>
    </ErrorBoundary>
  );
}

export default App;

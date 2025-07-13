import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Projects from './pages/Projects/Projects';
import Testimonials from './pages/Testimonials/Testimonials';
import Contact from './pages/Contact/Contact';
import ProjectFolderit from './pages/Projects/ProjectFolderit'; // Create this component
import ProjectBusBooking from './pages/Projects/ProjectBusBooking'; // Create this component
import ProjectMosaicGroup from './pages/Projects/ProjectMosaicGroup'; // Create this component
import ProjectRealEstate from './pages/Projects/ProjectRealEstate'; // Create this component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project-folderit" element={<ProjectFolderit />} />
            <Route path="/project-bus-booking" element={<ProjectBusBooking />} />
            <Route path="/project-mosaic-group" element={<ProjectMosaicGroup />} />
            <Route path="/project-real-estate" element={<ProjectRealEstate />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

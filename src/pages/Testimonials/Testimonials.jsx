import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Testimonials.css';

const Testimonials = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  
  const openImageModal = (imageSrc, alt) => {
    setSelectedImage({ src: imageSrc, alt });
  };
  
  const closeImageModal = () => {
    setSelectedImage(null);
  };
  
  const testimonials = [
    {
      content: t('testimonials.alkamal.content'),
      author: t('testimonials.alkamal.author'),
      position: t('testimonials.alkamal.position'),
      image: "/thanksfromalkamal.jpg",
      featured: true
    },
    {
      content: "Working with Habeeb was an excellent experience. His Flutter development skills and attention to detail resulted in a high-quality mobile application that exceeded our expectations.",
      author: "Client Testimonial",
      position: "Project Collaborator"
    },
    {
      content: "Habeeb's expertise in cross-platform development and his ability to deliver production-ready applications make him a valuable developer to work with.",
      author: "Team Feedback",
      position: "Development Team"
    },
    {
      content: "His focus on UI/UX design and clean architecture principles resulted in applications that are both beautiful and maintainable.",
      author: "Project Review",
      position: "Technical Assessment"
    },
    {
      content: "The interactive learning modules created with Articulate Storyline were engaging and effective. Habeeb's understanding of gamification principles really showed in the final product.",
      author: "Educational Content Review",
      position: "E-Learning Specialist"
    },
    {
      content: "Habeeb's document management system streamlined our workflow significantly. The Flutter Web implementation was smooth and the user interface was intuitive.",
      author: "Business Client",
      position: "Operations Manager"
    },
    {
      content: "As a fellow developer, I appreciate Habeeb's clean code practices and his use of modern architecture patterns like BLoC. His code is maintainable and well-structured.",
      author: "Peer Review",
      position: "Senior Developer"
    }
  ];

  return (
    <section id="testimonials" className="testimonials page-section">
      <div className="container">
        <h2 className="section-title">Testimonials</h2>
        <p className="section-subtitle">What clients and colleagues say about my work</p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`testimonial-card ${testimonial.featured ? 'featured-testimonial' : ''}`}>
              <div className="testimonial-content">
                <p>"{testimonial.content}"</p>
              </div>
              <div className="testimonial-author">
                {testimonial.image && (
                  <div className="testimonial-image" onClick={() => openImageModal(testimonial.image, `Testimonial from ${testimonial.author}`)}>
                    <img src={testimonial.image} alt={`Testimonial from ${testimonial.author}`} />
                    <div className="image-overlay">
                      <i className="fas fa-expand-arrows-alt"></i>
                      <span>Click to enlarge</span>
                    </div>
                  </div>
                )}
                <div className="author-info">
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
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
};

export default Testimonials;
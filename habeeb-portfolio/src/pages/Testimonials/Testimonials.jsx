import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
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
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <p>"{testimonial.content}"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
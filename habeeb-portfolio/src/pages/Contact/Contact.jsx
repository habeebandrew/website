import React from 'react';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      content: 'habeebandrew4@gmail.com',
      link: 'mailto:habeebandrew4@gmail.com'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      content: 'Damascus, Syria',
      link: null
    }
  ];

  return (
    <section className="contact-container page-section">
      <div className="container">
        <h1 className="section-title">Get In Touch</h1>
        <p className="section-subtitle">I'd love to hear from you. Here's how you can reach me:</p>
        
        <div className="contact-info">
          {contactInfo.map((contact, index) => (
            <div key={index} className="contact-item">
              <i className={contact.icon}></i>
              <div className="contact-text">
                <h3>{contact.title}</h3>
                {contact.link ? (
                  <a href={contact.link}>{contact.content}</a>
                ) : (
                  <p>{contact.content}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
import React from 'react';
import './About.css';

const About = () => {
  const skills = [
    'Flutter & Dart',
    'RESTful APIs',
    'Firebase',
    'Supabase',
    'Back4App',
    'Cubit (BLoC)',
    'Figma',
    'Articulate Storyline',
    'GitHub & GitLab',
    'Flutter Web',
    'Flutter Desktop'
  ];

  const stats = [
    {
      value: '2025',
      label: 'Expected Graduation'
    },
    {
      value: '5+',
      label: 'Major Projects'
    },
    {
      value: '3+',
      label: 'Years Experience'
    }
  ];

  return (
    <section id="about" className="about page-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Software Engineering Student & Flutter Developer</h3>
            <p>
            I hold a Bachelor’s degree in Software Engineering from the Faculty of Informatics Engineering at Damascus University . 
            I’m passionate about building production-ready applications and solving real-world problems through innovative technology solutions.
            </p>
            
            <p>
              With experience delivering prototypes and collecting feedback from real clients, I focus on creating applications with 
              exceptional UI/UX design, solid system architecture, and seamless backend integration.
            </p>
            
            <div className="skills">
              <h4>Tech Stack</h4>
              <div className="skill-tags">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat">
                  <h4>{stat.value}</h4>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
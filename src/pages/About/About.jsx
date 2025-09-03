import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import './About.css';

const About = () => {
  const { t } = useTranslation();
  
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
      value: '5+',
      label: t('about.stats.projects')
    },
    {
      value: '3+',
      label: t('about.stats.experience')
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t('about.title')} - Habeeb Andraws | Software Engineer</title>
        <meta name="description" content={t('about.subtitle')} />
        <meta name="keywords" content="software engineer, Flutter developer, Damascus University, mobile development, web development" />
      </Helmet>
      
      <section id="about" className="about page-section">
        <div className="container">
          <h2 className="section-title">{t('about.title')}</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>{t('about.heading')}</h3>
              <p>
                {t('about.description1')}
              </p>
              
              <p>
                {t('about.description2')}
              </p>
              
              <div className="skills">
                <h4>{t('about.techStack')}</h4>
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
    </>
  );
};

export default About;
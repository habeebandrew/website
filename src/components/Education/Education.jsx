import React from 'react';
import { useTranslation } from 'react-i18next';
import './Education.css';

const Education = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const education = [
    {
      id: 1,
      degreeEn: 'Bachelor of Informatics Engineering',
      degreeAr: 'بكالوريوس هندسة المعلوماتية',
      majorEn: 'Software Engineering & Information Systems',
      majorAr: 'هندسة البرمجيات ونظم المعلومات',
      universityEn: 'Damascus University',
      universityAr: 'جامعة دمشق',
      locationEn: 'Damascus, Syria',
      locationAr: 'دمشق، سوريا',
      year: '2024',
      descriptionEn: 'Specialized in software engineering and information systems development with focus on modern application development and programming',
      descriptionAr: 'تخصص في هندسة البرمجيات وتطوير نظم المعلومات مع التركيز على تطوير التطبيقات والبرمجة الحديثة',
      achievementsEn: [
        'Comprehensive study in Software Engineering',
        'Development of multiple practical projects',
        'Specialization in Information Systems and Databases',
        'Focus on modern programming methodologies'
      ],
      achievementsAr: [
        'دراسة شاملة في هندسة البرمجيات',
        'تطوير مشاريع تطبيقية متعددة',
        'التخصص في نظم المعلومات وقواعد البيانات',
        'التركيز على منهجيات البرمجة الحديثة'
      ]
    }
  ];

  return (
    <section className="education-section">
      <div className="container">
        <h2 className="section-title">{t('education.title')}</h2>
        <div className="education-grid">
          {education.map((edu) => (
            <div key={edu.id} className="education-card">
              <div className="education-header">
                <div className="university-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <div className="education-info">
                  <h3 className="degree">
                    {isArabic ? edu.degreeAr : edu.degreeEn}
                  </h3>
                  <h4 className="major">
                    {isArabic ? edu.majorAr : edu.majorEn}
                  </h4>
                  <div className="university-details">
                    <span className="university">
                      {isArabic ? edu.universityAr : edu.universityEn}
                    </span>
                    <span className="location">
                      <i className="fas fa-map-marker-alt"></i>
                      {isArabic ? edu.locationAr : edu.locationEn}
                    </span>
                    <span className="year">
                      <i className="fas fa-calendar-alt"></i>
                      {edu.year}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="education-content">
                <p className="description">
                  {isArabic ? edu.descriptionAr : edu.descriptionEn}
                </p>
                <div className="achievements">
                  <h5>{t('education.achievements')}</h5>
                  <ul>
                    {(isArabic ? edu.achievementsAr : edu.achievementsEn).map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
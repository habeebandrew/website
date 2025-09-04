import React from 'react';
import { useTranslation } from 'react-i18next';
import './Experience.css';

const Experience = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const experiences = [
    {
      id: 1,
      titleEn: 'Flutter Developer & Product Owner',
      titleAr: 'مطور Flutter ومالك المنتج',
      companyEn: 'Al-Kamal International Transport',
      companyAr: 'شركة الكمال الدولية للنقل',
      locationEn: 'Damascus, Syria',
      locationAr: 'دمشق، سوريا',
      periodEn: '2025 - Present',
      periodAr: '2025 - الحالي',
      descriptionEn: [
        'Develop mobile and web applications using Flutter framework',
        'Design user interfaces and user experience (UI/UX)',
        'Work as Product Owner and manage development team',
        'Collaborate with cross-functional teams to ensure timely project delivery',
        'Optimize application performance and resolve technical issues'
      ],
      descriptionAr: [
        'تطوير تطبيقات الهاتف المحمول والويب باستخدام Flutter',
        'تصميم واجهات المستخدم وتجربة المستخدم (UI/UX)',
        'العمل كمالك منتج (Product Owner) وإدارة فريق التطوير',
        'التعاون مع الفرق متعددة التخصصات لضمان تسليم المشاريع في الوقت المحدد',
        'تحسين أداء التطبيقات وحل المشاكل التقنية'
      ],
      technologies: ['Flutter', 'Dart', 'UI/UX Design', 'Product Management', 'Team Leadership'],
      current: true
    },
    {
      id: 2,
      titleEn: 'E-Learning Developer',
      titleAr: 'مطور التعلم الإلكتروني',
      companyEn: 'Glotech',
      companyAr: 'جلوتك',
      locationEn: 'Damascus, Syria',
      locationAr: 'دمشق، سوريا',
      periodEn: '2023',
      periodAr: '2023',
      descriptionEn: [
        'Developed interactive e-learning courses using Articulate Storyline with a focus on user experience',
        'Collaborated with teams to ensure timely delivery and high quality',
        'Resolved bugs and performance issues to optimize content delivery'
      ],
      descriptionAr: [
        'تطوير دورات تعليمية تفاعلية باستخدام Articulate Storyline',
        'التركيز على تجربة المستخدم في التصميم التعليمي',
        'التعاون مع الفرق لضمان التسليم في الوقت المحدد والجودة العالية',
        'حل الأخطاء ومشاكل الأداء لتحسين توصيل المحتوى'
      ],
      technologies: ['Articulate Storyline', 'E-Learning Design', 'User Experience'],
      current: false
    }
  ];

  return (
    <section className="experience-section">
      <div className="container">
        <h2 className="section-title">{t('experience.title')}</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`timeline-item ${exp.current ? 'current' : ''}`}>
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content">
                <div className="experience-header">
                  <h3 className="job-title">
                    {isArabic ? exp.titleAr : exp.titleEn}
                  </h3>
                  <div className="company-info">
                    <span className="company">
                      {isArabic ? exp.companyAr : exp.companyEn}
                    </span>
                    <span className="location">
                      <i className="fas fa-map-marker-alt"></i>
                      {isArabic ? exp.locationAr : exp.locationEn}
                    </span>
                  </div>
                  <div className="period">
                    <i className="fas fa-calendar-alt"></i>
                    {isArabic ? exp.periodAr : exp.periodEn}
                  </div>
                </div>
                
                <div className="experience-details">
                  <ul className="responsibilities">
                    {(isArabic ? exp.descriptionAr : exp.descriptionEn).map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  
                  <div className="technologies">
                    <h4>{t('experience.technologies')}</h4>
                    <div className="tech-tags">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
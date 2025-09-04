import React from 'react';
import { useTranslation } from 'react-i18next';
import './SoftSkills.css';

const SoftSkills = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const softSkills = [
    {
      nameEn: 'Teamwork',
      nameAr: 'العمل الجماعي',
      icon: 'fas fa-users',
      descriptionEn: 'Ability to work effectively within diverse teams and achieve common goals',
      descriptionAr: 'القدرة على العمل بفعالية ضمن فرق متنوعة وتحقيق الأهداف المشتركة'
    },
    {
      nameEn: 'Communication',
      nameAr: 'التواصل',
      icon: 'fas fa-comments',
      descriptionEn: 'Excellent communication skills with clients, colleagues, and stakeholders',
      descriptionAr: 'مهارات تواصل ممتازة مع العملاء والزملاء وأصحاب المصلحة'
    },
    {
      nameEn: 'Leadership',
      nameAr: 'القيادة',
      icon: 'fas fa-crown',
      descriptionEn: 'Experience in leading teams and managing projects as a product owner',
      descriptionAr: 'خبرة في قيادة الفرق وإدارة المشاريع كمالك منتج'
    },
    {
      nameEn: 'Time Management',
      nameAr: 'إدارة الوقت',
      icon: 'fas fa-clock',
      descriptionEn: 'Organizing tasks and managing priorities to ensure timely project delivery',
      descriptionAr: 'تنظيم المهام وإدارة الأولويات لضمان تسليم المشاريع في الوقت المحدد'
    },
    {
      nameEn: 'Problem Solving',
      nameAr: 'حل المشكلات',
      icon: 'fas fa-lightbulb',
      descriptionEn: 'Analyzing complex problems and finding creative and effective solutions',
      descriptionAr: 'تحليل المشاكل المعقدة وإيجاد حلول إبداعية وفعالة'
    }
  ];

  return (
    <section className="soft-skills-section">
      <div className="container">
        <h2 className="section-title">{t('softSkills.title')}</h2>
        <div className="skills-grid">
          {softSkills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                <i className={skill.icon}></i>
              </div>
              <h3 className="skill-name">
                {isArabic ? skill.nameAr : skill.nameEn}
              </h3>
              <p className="skill-description">
                {isArabic ? skill.descriptionAr : skill.descriptionEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;
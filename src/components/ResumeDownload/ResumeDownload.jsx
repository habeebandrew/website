import React from 'react';
import { useTranslation } from 'react-i18next';
import './ResumeDownload.css';

const ResumeDownload = () => {
  const { t } = useTranslation();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'HABIB ANDRAWS - Flutter Developer & Software Engineer Resume.pdf';
    link.download = 'HABIB ANDRAWS - Flutter Developer & Software Engineer Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resume-download">
      <button 
        onClick={handleDownload} 
        className="btn btn-primary resume-btn"
        aria-label="Download Resume"
      >
        <i className="fas fa-download"></i>
        <span>{t('resume.download')}</span>
      </button>
    </div>
  );
};

export default ResumeDownload;
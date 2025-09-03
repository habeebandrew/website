import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../contexts/LanguageContext';
import './LanguageToggle.css';

const LanguageToggle = ({ className = '' }) => {
  const { t } = useTranslation();
  const { currentLanguage, toggleLanguage, availableLanguages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageSelect = (languageCode) => {
    if (languageCode !== currentLanguage) {
      toggleLanguage();
    }
    setIsOpen(false);
  };

  const currentLang = availableLanguages.find(lang => lang.code === currentLanguage);

  return (
    <div className={`language-toggle ${className}`}>
      <button
        onClick={handleToggle}
        className="language-toggle-btn"
        aria-label={t('common.language')}
        title={t('common.language')}
      >
        <span className="language-icon">🌐</span>
        <span className="language-text">{currentLang?.nativeName}</span>
        <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </button>
      
      {isOpen && (
        <div className="language-dropdown">
          {availableLanguages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageSelect(language.code)}
              className={`language-option ${currentLanguage === language.code ? 'active' : ''}`}
            >
              <span className="language-flag">
                {language.code === 'en' ? '🇺🇸' : '🇸🇦'}
              </span>
              <span className="language-name">{language.nativeName}</span>
              {currentLanguage === language.code && (
                <span className="check-mark">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
      
      {/* Overlay to close dropdown when clicking outside */}
      {isOpen && (
        <div 
          className="language-overlay" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default LanguageToggle;
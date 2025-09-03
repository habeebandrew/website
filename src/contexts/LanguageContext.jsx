import React, { createContext, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'en');
  const [isRTL, setIsRTL] = useState(false);

  // RTL languages list
  const rtlLanguages = ['ar', 'he', 'fa', 'ur'];

  const changeLanguage = async (language) => {
    try {
      await i18n.changeLanguage(language);
      setCurrentLanguage(language);
      
      // Update RTL state
      const isRightToLeft = rtlLanguages.includes(language);
      setIsRTL(isRightToLeft);
      
      // Update HTML attributes
      document.documentElement.lang = language;
      document.documentElement.dir = isRightToLeft ? 'rtl' : 'ltr';
      
      // Store in localStorage
      localStorage.setItem('language', language);
      
      // Update page title direction for RTL
      if (isRightToLeft) {
        document.documentElement.classList.add('rtl');
        document.documentElement.classList.remove('ltr');
      } else {
        document.documentElement.classList.add('ltr');
        document.documentElement.classList.remove('rtl');
      }
    } catch (error) {
      console.error('Error changing language:', error);
    }
  };

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    changeLanguage(newLanguage);
  };

  // Initialize language on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    const browserLanguage = navigator.language.split('-')[0];
    const initialLanguage = savedLanguage || (rtlLanguages.includes(browserLanguage) ? browserLanguage : 'en');
    
    if (initialLanguage !== currentLanguage) {
      changeLanguage(initialLanguage);
    }
  }, []);

  // Listen for i18n language changes
  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setCurrentLanguage(lng);
      const isRightToLeft = rtlLanguages.includes(lng);
      setIsRTL(isRightToLeft);
    };

    i18n.on('languageChanged', handleLanguageChange);
    
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n, rtlLanguages]);

  const value = {
    currentLanguage,
    isRTL,
    changeLanguage,
    toggleLanguage,
    availableLanguages: [
      { code: 'en', name: 'English', nativeName: 'English' },
      { code: 'ar', name: 'Arabic', nativeName: 'العربية' }
    ]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
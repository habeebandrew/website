import React from 'react';
import { useTranslation } from 'react-i18next';
import './LoadingSpinner.css';

const LoadingSpinner = ({ message }) => {
  const { t } = useTranslation();
  const displayMessage = message || t('common.loading');
  
  return (
    <div className="loading-container">
      <div className="spinner">
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
      </div>
      <p className="loading-message">{displayMessage}</p>
    </div>
  );
};

export default LoadingSpinner;
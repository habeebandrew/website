import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = ({ className = '' }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`theme-toggle ${className}`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      <div className="toggle-track">
        <div className="toggle-thumb">
          <span className="toggle-icon">
            {isDark ? '🌙' : '☀️'}
          </span>
        </div>
      </div>
      <span className="toggle-label">
        {isDark ? 'Dark' : 'Light'}
      </span>
    </button>
  );
};

export default ThemeToggle;
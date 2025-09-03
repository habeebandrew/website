import React from 'react';
import { useTranslation } from 'react-i18next';
import './ErrorBoundary.css';

// Error display component that uses hooks
const ErrorDisplay = ({ error, errorInfo, onReload }) => {
  const { t } = useTranslation();
  
  return (
    <div className="error-boundary">
      <div className="error-content">
        <div className="error-icon">⚠️</div>
        <h2>{t('error.title')}</h2>
        <p>{t('error.description')}</p>
        
        <div className="error-actions">
          <button onClick={onReload} className="btn btn-primary">
            {t('common.refresh')}
          </button>
          <button onClick={() => window.history.back()} className="btn btn-secondary">
            {t('common.goBack')}
          </button>
        </div>

        {import.meta.env.DEV && error && (
          <details className="error-details">
            <summary>{t('error.details')}</summary>
            <pre className="error-stack">
              {error && error.toString()}
              <br />
              {errorInfo.componentStack}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null, 
      errorInfo: null 
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to console or error reporting service
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorDisplay 
          error={this.state.error}
          errorInfo={this.state.errorInfo}
          onReload={this.handleReload}
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
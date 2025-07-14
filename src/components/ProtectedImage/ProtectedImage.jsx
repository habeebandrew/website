import React, { useState, useRef, useEffect } from 'react';
import './ProtectedImage.css';

const ProtectedImage = ({ src, alt, className = '', loading = 'lazy', ...props }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    // Disable right-click context menu on the image
    const handleContextMenu = (e) => {
      e.preventDefault();
      return false;
    };

    // Disable drag and drop
    const handleDragStart = (e) => {
      e.preventDefault();
      return false;
    };

    // Disable text selection
    const handleSelectStart = (e) => {
      e.preventDefault();
      return false;
    };

    // Disable keyboard shortcuts for saving images
    const handleKeyDown = (e) => {
      // Disable Ctrl+S, Ctrl+A, Ctrl+C, F12, etc.
      if (
        (e.ctrlKey && (e.key === 's' || e.key === 'a' || e.key === 'c')) ||
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.shiftKey && e.key === 'C') ||
        (e.ctrlKey && e.key === 'u')
      ) {
        e.preventDefault();
        return false;
      }
    };

    const imgElement = imgRef.current;
    if (imgElement) {
      imgElement.addEventListener('contextmenu', handleContextMenu);
      imgElement.addEventListener('dragstart', handleDragStart);
      imgElement.addEventListener('selectstart', handleSelectStart);
      document.addEventListener('keydown', handleKeyDown);

      return () => {
        imgElement.removeEventListener('contextmenu', handleContextMenu);
        imgElement.removeEventListener('dragstart', handleDragStart);
        imgElement.removeEventListener('selectstart', handleSelectStart);
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(false);
  };

  return (
    <div className={`protected-image-container ${className}`} {...props}>
      {/* Invisible overlay to prevent right-click and selection */}
      <div className="image-protection-overlay"></div>
      
      {/* Watermark overlay */}
      <div className="image-watermark">
        <span>© Habeeb Andraws Portfolio</span>
      </div>

      {/* Loading placeholder */}
      {!imageLoaded && !imageError && (
        <div className="image-loading-placeholder">
          <div className="loading-spinner"></div>
          <span>Loading...</span>
        </div>
      )}

      {/* Error placeholder */}
      {imageError && (
        <div className="image-error-placeholder">
          <i className="fas fa-image"></i>
          <span>Image not available</span>
        </div>
      )}

      {/* Protected Image */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={loading}
        onLoad={handleImageLoad}
        onError={handleImageError}
        className={`protected-image ${imageLoaded ? 'loaded' : ''}`}
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
        onSelectStart={(e) => e.preventDefault()}
        style={{
          userSelect: 'none',
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none',
          WebkitTouchCallout: 'none',
          WebkitUserDrag: 'none',
          KhtmlUserSelect: 'none'
        }}
      />
    </div>
  );
};

export default ProtectedImage;
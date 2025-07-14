import React, { useEffect } from 'react';
import './ProtectedGallery.css';

const ProtectedGallery = ({ images, className = '' }) => {
  useEffect(() => {
    // Disable right-click globally
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

    // Disable keyboard shortcuts
    const handleKeyDown = (e) => {
      if (
        (e.ctrlKey && (e.key === 's' || e.key === 'a' || e.key === 'c' || e.key === 'u')) ||
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'C' || e.key === 'J'))
      ) {
        e.preventDefault();
        return false;
      }
    };

    // Disable print screen
    const handleKeyUp = (e) => {
      if (e.key === 'PrintScreen') {
        navigator.clipboard.writeText('');
        alert('Screenshots are not allowed on this page.');
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('selectstart', handleSelectStart);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    // Disable developer tools detection
    let devtools = {
      open: false,
      orientation: null
    };

    const threshold = 160;

    setInterval(() => {
      if (window.outerHeight - window.innerHeight > threshold || 
          window.outerWidth - window.innerWidth > threshold) {
        if (!devtools.open) {
          devtools.open = true;
          console.clear();
          console.log('%cDeveloper tools detected! This content is protected.', 
            'color: red; font-size: 20px; font-weight: bold;');
        }
      } else {
        devtools.open = false;
      }
    }, 500);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className={`protected-gallery ${className}`}>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className={`gallery-item ${image.isMain ? 'main-image' : ''}`}>
            {/* Protection overlay */}
            <div className="image-protection-layer"></div>
            
            {/* Watermark */}
            <div className="image-watermark">
              <span>© Habeeb Andraws</span>
            </div>

            {/* Protected Image */}
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="protected-image"
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
                KhtmlUserSelect: 'none',
                pointerEvents: 'none'
              }}
            />

            {/* Overlay content */}
            <div className="image-overlay">
              <h3>{image.title}</h3>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProtectedGallery;
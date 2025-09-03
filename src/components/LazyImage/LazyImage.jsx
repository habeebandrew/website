import React, { useState, useRef, useEffect } from 'react';
import './LazyImage.css';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = '/api/placeholder/400/300',
  onLoad,
  onError,
  ...props 
}) => {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = (e) => {
    setLoaded(true);
    if (onLoad) onLoad(e);
  };

  const handleError = (e) => {
    setError(true);
    if (onError) onError(e);
  };

  return (
    <div 
      ref={imgRef} 
      className={`lazy-image-container ${className}`}
      {...props}
    >
      {!inView && (
        <div className="image-skeleton">
          <div className="skeleton-shimmer"></div>
        </div>
      )}
      
      {inView && !error && (
        <>
          {!loaded && (
            <div className="image-skeleton">
              <div className="skeleton-shimmer"></div>
            </div>
          )}
          <img
            src={src}
            alt={alt}
            onLoad={handleLoad}
            onError={handleError}
            className={`lazy-image ${loaded ? 'loaded' : 'loading'}`}
            loading="lazy"
          />
        </>
      )}
      
      {error && (
        <div className="image-error">
          <div className="error-icon">📷</div>
          <span>Failed to load image</span>
        </div>
      )}
    </div>
  );
};

export default LazyImage;
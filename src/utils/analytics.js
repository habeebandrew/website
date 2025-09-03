// Google Analytics 4 Integration

// Initialize Google Analytics
export const initGA = (measurementId) => {
  if (typeof window === 'undefined' || !measurementId) {
    return;
  }

  // Add Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', measurementId, {
    page_title: document.title,
    page_location: window.location.href,
  });

  console.log('Google Analytics initialized with ID:', measurementId);
};

// Track page views
export const trackPageView = (path, title) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', import.meta.env.VITE_GA_MEASUREMENT_ID || 'GA_MEASUREMENT_ID', {
      page_path: path,
      page_title: title,
    });
  }
};

// Track custom events
export const trackEvent = (action, category = 'engagement', label = '', value = 0) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track button clicks
export const trackButtonClick = (buttonName, location = '') => {
  trackEvent('click', 'button', `${buttonName}${location ? ` - ${location}` : ''}`);
};

// Track form submissions
export const trackFormSubmission = (formName, success = true) => {
  trackEvent('form_submit', 'form', formName, success ? 1 : 0);
};

// Track file downloads
export const trackDownload = (fileName, fileType = '') => {
  trackEvent('download', 'file', `${fileName}${fileType ? ` - ${fileType}` : ''}`);
};

// Track outbound links
export const trackOutboundLink = (url, linkText = '') => {
  trackEvent('click', 'outbound_link', `${url}${linkText ? ` - ${linkText}` : ''}`);
};

// Track scroll depth
export const trackScrollDepth = () => {
  if (typeof window === 'undefined') return;

  let maxScroll = 0;
  const milestones = [25, 50, 75, 100];
  const tracked = new Set();

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.round((scrollTop / docHeight) * 100);
    
    if (scrollPercent > maxScroll) {
      maxScroll = scrollPercent;
      
      milestones.forEach(milestone => {
        if (scrollPercent >= milestone && !tracked.has(milestone)) {
          tracked.add(milestone);
          trackEvent('scroll', 'engagement', `${milestone}%`, milestone);
        }
      });
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  
  // Return cleanup function
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};

// Track time on page
export const trackTimeOnPage = () => {
  if (typeof window === 'undefined') return;

  const startTime = Date.now();
  
  const handleBeforeUnload = () => {
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    
    if (timeSpent > 10) { // Only track if user spent more than 10 seconds
      trackEvent('time_on_page', 'engagement', document.title, timeSpent);
    }
  };

  window.addEventListener('beforeunload', handleBeforeUnload);
  
  // Return cleanup function
  return () => {
    window.removeEventListener('beforeunload', handleBeforeUnload);
  };
};

// Track user engagement
export const trackEngagement = () => {
  if (typeof window === 'undefined') return;

  let isEngaged = false;
  let engagementStartTime = null;

  const markEngaged = () => {
    if (!isEngaged) {
      isEngaged = true;
      engagementStartTime = Date.now();
      trackEvent('user_engagement', 'engagement', 'engaged');
    }
  };

  const events = ['click', 'scroll', 'keydown', 'mousemove'];
  events.forEach(event => {
    document.addEventListener(event, markEngaged, { once: true, passive: true });
  });

  // Track engagement time when user leaves
  const handleBeforeUnload = () => {
    if (isEngaged && engagementStartTime) {
      const engagementTime = Math.round((Date.now() - engagementStartTime) / 1000);
      trackEvent('engagement_time', 'engagement', document.title, engagementTime);
    }
  };

  window.addEventListener('beforeunload', handleBeforeUnload);
  
  // Return cleanup function
  return () => {
    events.forEach(event => {
      document.removeEventListener(event, markEngaged);
    });
    window.removeEventListener('beforeunload', handleBeforeUnload);
  };
};

// Enhanced tracking for React components
export const useAnalytics = () => {
  return {
    trackPageView,
    trackEvent,
    trackButtonClick,
    trackFormSubmission,
    trackDownload,
    trackOutboundLink,
  };
};

// Debug mode for development
export const enableAnalyticsDebug = () => {
  if (import.meta.env.DEV) {
    console.log('Analytics Debug Mode Enabled');
    
    const originalTrackEvent = trackEvent;
    window.trackEvent = (...args) => {
      console.log('Analytics Event:', args);
      originalTrackEvent(...args);
    };
    
    const originalTrackPageView = trackPageView;
    window.trackPageView = (...args) => {
      console.log('Analytics Page View:', args);
      originalTrackPageView(...args);
    };
  }
};
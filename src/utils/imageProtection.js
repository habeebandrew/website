// Image Protection Utilities

// Disable right-click context menu
export const disableRightClick = () => {
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
  });
};

// Disable drag and drop
export const disableDragDrop = () => {
  document.addEventListener('dragstart', (e) => {
    e.preventDefault();
    return false;
  });
};

// Disable text selection
export const disableTextSelection = () => {
  document.addEventListener('selectstart', (e) => {
    e.preventDefault();
    return false;
  });
};

// Disable keyboard shortcuts
export const disableKeyboardShortcuts = () => {
  document.addEventListener('keydown', (e) => {
    // Disable Ctrl+S, Ctrl+A, Ctrl+C, F12, etc.
    if (
      (e.ctrlKey && (e.key === 's' || e.key === 'a' || e.key === 'c' || e.key === 'u')) ||
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'C' || e.key === 'J')) ||
      (e.ctrlKey && e.key === 'p') // Disable print
    ) {
      e.preventDefault();
      showProtectionMessage();
      return false;
    }
  });
};

// Disable print screen
export const disablePrintScreen = () => {
  document.addEventListener('keyup', (e) => {
    if (e.key === 'PrintScreen') {
      navigator.clipboard.writeText('');
      showProtectionMessage('Screenshots are not allowed on this page.');
    }
  });
};

// Show protection message
const showProtectionMessage = (message = 'This content is protected and cannot be copied.') => {
  // Create a temporary notification
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #ff4444;
    color: white;
    padding: 15px 20px;
    border-radius: 8px;
    z-index: 10000;
    font-family: Arial, sans-serif;
    font-size: 14px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    animation: slideIn 0.3s ease-out;
  `;
  
  notification.textContent = message;
  document.body.appendChild(notification);
  
  // Add animation styles
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
  `;
  document.head.appendChild(style);
  
  // Remove after 3 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
    if (style.parentNode) {
      style.parentNode.removeChild(style);
    }
  }, 3000);
};

// Developer tools detection
export const detectDevTools = () => {
  let devtools = { open: false };
  const threshold = 160;

  setInterval(() => {
    if (window.outerHeight - window.innerHeight > threshold || 
        window.outerWidth - window.innerWidth > threshold) {
      if (!devtools.open) {
        devtools.open = true;
        console.clear();
        console.log('%cDeveloper tools detected! This content is protected.', 
          'color: red; font-size: 20px; font-weight: bold;');
        showProtectionMessage('Developer tools detected. Content is protected.');
      }
    } else {
      devtools.open = false;
    }
  }, 500);
};

// Blur images when dev tools are open
export const blurImagesOnDevTools = () => {
  let devToolsOpen = false;
  
  const checkDevTools = () => {
    const threshold = 160;
    const isOpen = window.outerHeight - window.innerHeight > threshold || 
                   window.outerWidth - window.innerWidth > threshold;
    
    if (isOpen && !devToolsOpen) {
      devToolsOpen = true;
      document.querySelectorAll('img').forEach(img => {
        img.style.filter = 'blur(10px)';
      });
    } else if (!isOpen && devToolsOpen) {
      devToolsOpen = false;
      document.querySelectorAll('img').forEach(img => {
        img.style.filter = '';
      });
    }
  };
  
  setInterval(checkDevTools, 500);
};

// Initialize all protections
export const initializeImageProtection = () => {
  disableRightClick();
  disableDragDrop();
  disableTextSelection();
  disableKeyboardShortcuts();
  disablePrintScreen();
  detectDevTools();
  blurImagesOnDevTools();
  
  // Add CSS for additional protection
  const style = document.createElement('style');
  style.textContent = `
    * {
      -webkit-user-select: none !important;
      -moz-user-select: none !important;
      -ms-user-select: none !important;
      user-select: none !important;
      -webkit-touch-callout: none !important;
      -webkit-user-drag: none !important;
      -khtml-user-select: none !important;
    }
    
    img {
      -webkit-user-drag: none !important;
      -khtml-user-drag: none !important;
      -moz-user-drag: none !important;
      -o-user-drag: none !important;
      user-drag: none !important;
      pointer-events: none !important;
    }
    
    @media print {
      img { display: none !important; }
      .protected-gallery { display: none !important; }
      .gallery-item { display: none !important; }
    }
  `;
  document.head.appendChild(style);
  
  console.log('%cImage Protection Activated', 'color: green; font-weight: bold;');
};